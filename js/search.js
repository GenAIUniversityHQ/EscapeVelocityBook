/**
 * Escape Velocity Interactive Book - Search Functionality
 */

class BookSearch {
    constructor() {
        this.searchIndex = [];
        this.init();
    }

    init() {
        this.cacheElements();
        this.buildIndex();
        this.bindEvents();
    }

    cacheElements() {
        this.searchInput = document.getElementById('search-input');
        this.searchBtn = document.getElementById('search-btn');
        this.searchResults = document.getElementById('search-results');
    }

    buildIndex() {
        // Build search index from book content
        BOOK_CONTENT.chapters.forEach((chapter, index) => {
            // Strip HTML and create searchable text
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = chapter.content;
            const plainText = tempDiv.textContent || tempDiv.innerText;

            // Split into paragraphs for better excerpts
            const paragraphs = plainText.split(/\n\n+/).filter(p => p.trim().length > 20);

            paragraphs.forEach((paragraph, pIndex) => {
                this.searchIndex.push({
                    chapterIndex: index,
                    chapterTitle: chapter.title,
                    chapterNumber: chapter.number,
                    text: paragraph.trim(),
                    keywords: chapter.keywords || []
                });
            });

            // Also index the title
            this.searchIndex.push({
                chapterIndex: index,
                chapterTitle: chapter.title,
                chapterNumber: chapter.number,
                text: `${chapter.title} ${chapter.subtitle || ''}`,
                keywords: chapter.keywords || [],
                isTitle: true
            });
        });

        // Index knowledge base concepts
        if (BOOK_CONTENT.knowledgeBase) {
            Object.entries(BOOK_CONTENT.knowledgeBase.concepts || {}).forEach(([term, definition]) => {
                this.searchIndex.push({
                    chapterIndex: -1,
                    chapterTitle: 'Knowledge Base',
                    text: `${term}: ${definition}`,
                    keywords: [term],
                    isKnowledge: true,
                    term: term
                });
            });
        }
    }

    bindEvents() {
        // Search on input
        let debounceTimer;
        this.searchInput.addEventListener('input', () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => this.performSearch(), 200);
        });

        // Search on button click
        this.searchBtn.addEventListener('click', () => this.performSearch());

        // Search on Enter
        this.searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.performSearch();
            }
            if (e.key === 'Escape') {
                this.clearSearch();
            }
        });

        // Close results when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container') && !e.target.closest('.search-results')) {
                this.hideResults();
            }
        });
    }

    performSearch() {
        const query = this.searchInput.value.trim().toLowerCase();

        if (query.length < 2) {
            this.hideResults();
            return;
        }

        const results = this.search(query);
        this.displayResults(results, query);
    }

    search(query) {
        const queryWords = query.split(/\s+/);
        const results = [];

        this.searchIndex.forEach(item => {
            const textLower = item.text.toLowerCase();
            const keywordsLower = item.keywords.map(k => k.toLowerCase());

            // Calculate relevance score
            let score = 0;

            // Exact phrase match (highest score)
            if (textLower.includes(query)) {
                score += 100;
            }

            // Word matches
            queryWords.forEach(word => {
                if (textLower.includes(word)) {
                    score += 10;
                }
                if (keywordsLower.some(k => k.includes(word))) {
                    score += 20;
                }
            });

            // Title matches get bonus
            if (item.isTitle && textLower.includes(query)) {
                score += 50;
            }

            // Keyword exact match
            if (keywordsLower.includes(query)) {
                score += 30;
            }

            if (score > 0) {
                results.push({
                    ...item,
                    score: score
                });
            }
        });

        // Sort by score and deduplicate by chapter
        results.sort((a, b) => b.score - a.score);

        // Group and limit results
        const seen = new Set();
        const uniqueResults = [];

        for (const result of results) {
            const key = result.isKnowledge ? `kb-${result.term}` : `ch-${result.chapterIndex}`;
            if (!seen.has(key) || result.score > 80) {
                seen.add(key);
                uniqueResults.push(result);
                if (uniqueResults.length >= 10) break;
            }
        }

        return uniqueResults;
    }

    displayResults(results, query) {
        if (results.length === 0) {
            this.searchResults.innerHTML = `
                <div class="search-result-item">
                    <div class="search-result-title">No results found</div>
                    <div class="search-result-excerpt">Try different keywords or browse the table of contents.</div>
                </div>
            `;
            this.showResults();
            return;
        }

        this.searchResults.innerHTML = results.map(result => {
            const excerpt = this.getExcerpt(result.text, query);
            const chapterNum = result.chapterNumber ? `Chapter ${result.chapterNumber}: ` : '';
            const icon = result.isKnowledge ? '📚 ' : '';

            return `
                <div class="search-result-item" data-chapter="${result.chapterIndex}" data-term="${result.term || ''}">
                    <div class="search-result-title">${icon}${chapterNum}${result.chapterTitle}</div>
                    <div class="search-result-excerpt">${excerpt}</div>
                </div>
            `;
        }).join('');

        // Bind click events
        this.searchResults.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const chapterIndex = parseInt(item.dataset.chapter);
                if (chapterIndex >= 0) {
                    window.bookApp.loadChapter(chapterIndex);
                }
                // For knowledge base items, you could open a modal or chat
                if (item.dataset.term && window.bookChat) {
                    window.bookChat.askAboutTerm(item.dataset.term);
                }
                this.clearSearch();
            });
        });

        this.showResults();
    }

    getExcerpt(text, query) {
        const maxLength = 150;
        const lowerText = text.toLowerCase();
        const queryIndex = lowerText.indexOf(query.toLowerCase());

        let excerpt;

        if (queryIndex >= 0) {
            // Show text around the match
            const start = Math.max(0, queryIndex - 40);
            const end = Math.min(text.length, queryIndex + query.length + 100);
            excerpt = (start > 0 ? '...' : '') + text.slice(start, end) + (end < text.length ? '...' : '');

            // Highlight the match
            const regex = new RegExp(`(${this.escapeRegex(query)})`, 'gi');
            excerpt = excerpt.replace(regex, '<mark>$1</mark>');
        } else {
            // Just show the beginning
            excerpt = text.slice(0, maxLength) + (text.length > maxLength ? '...' : '');
        }

        return excerpt;
    }

    escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    showResults() {
        this.searchResults.classList.remove('hidden');
    }

    hideResults() {
        this.searchResults.classList.add('hidden');
    }

    clearSearch() {
        this.searchInput.value = '';
        this.hideResults();
    }
}

// Initialize search when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.bookSearch = new BookSearch();
});
