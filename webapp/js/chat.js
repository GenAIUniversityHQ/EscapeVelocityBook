/**
 * Escape Velocity Interactive Book - AI Chat Assistant
 *
 * This provides an intelligent chat interface that can answer questions
 * about the book content. It can be connected to an actual AI backend
 * or operate in standalone mode using the built-in knowledge base.
 */

class BookChat {
    constructor() {
        this.messages = [];
        this.isTyping = false;
        this.apiEndpoint = null; // Set this to enable AI backend

        this.init();
    }

    init() {
        this.cacheElements();
        this.bindEvents();
        this.loadHistory();
    }

    cacheElements() {
        this.widget = document.getElementById('chat-widget');
        this.toggle = document.getElementById('chat-toggle');
        this.panel = document.getElementById('chat-panel');
        this.messagesContainer = document.getElementById('chat-messages');
        this.form = document.getElementById('chat-form');
        this.input = document.getElementById('chat-input');
        this.sendBtn = document.getElementById('chat-send');
        this.suggestions = document.querySelectorAll('.suggestion-btn');
    }

    bindEvents() {
        // Toggle chat
        this.toggle.addEventListener('click', () => this.toggleChat());

        // Send message
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.sendMessage();
        });

        // Suggestions
        this.suggestions.forEach(btn => {
            btn.addEventListener('click', () => {
                const query = btn.dataset.query;
                this.input.value = query;
                this.sendMessage();
            });
        });

        // Input handling
        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
    }

    toggleChat() {
        this.widget.classList.toggle('open');
        this.panel.classList.toggle('hidden');

        if (!this.panel.classList.contains('hidden')) {
            this.input.focus();
        }
    }

    async sendMessage() {
        const text = this.input.value.trim();
        if (!text || this.isTyping) return;

        // Add user message
        this.addMessage('user', text);
        this.input.value = '';

        // Show typing indicator
        this.showTyping();

        try {
            // Get response (either from AI or knowledge base)
            const response = await this.getResponse(text);
            this.hideTyping();
            this.addMessage('assistant', response);
        } catch (error) {
            this.hideTyping();
            this.addMessage('assistant', 'I apologize, but I encountered an error. Please try asking your question differently.');
        }
    }

    async getResponse(query) {
        // If API endpoint is configured, use it
        if (this.apiEndpoint) {
            return await this.fetchAIResponse(query);
        }

        // Otherwise, use built-in knowledge base
        return this.getKnowledgeBaseResponse(query);
    }

    async fetchAIResponse(query) {
        // This can be connected to Claude, GPT, or any AI API
        const response = await fetch(this.apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: query,
                context: this.getContext()
            })
        });

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const data = await response.json();
        return data.response;
    }

    getKnowledgeBaseResponse(query) {
        const queryLower = query.toLowerCase();

        // Search knowledge base concepts
        const kb = BOOK_CONTENT.knowledgeBase;
        let bestMatch = null;
        let bestScore = 0;

        // Check concepts
        if (kb.concepts) {
            for (const [term, definition] of Object.entries(kb.concepts)) {
                const score = this.calculateRelevance(queryLower, term, definition);
                if (score > bestScore) {
                    bestScore = score;
                    bestMatch = { type: 'concept', term, definition };
                }
            }
        }

        // Check treatments
        if (kb.treatments) {
            for (const [term, definition] of Object.entries(kb.treatments)) {
                const score = this.calculateRelevance(queryLower, term, definition);
                if (score > bestScore) {
                    bestScore = score;
                    bestMatch = { type: 'treatment', term, definition };
                }
            }
        }

        // Check lifestyle
        if (kb.lifestyle) {
            for (const [term, definition] of Object.entries(kb.lifestyle)) {
                const score = this.calculateRelevance(queryLower, term, definition);
                if (score > bestScore) {
                    bestScore = score;
                    bestMatch = { type: 'lifestyle', term, definition };
                }
            }
        }

        // Search chapter content for additional context
        const chapterMatch = this.searchChapters(queryLower);

        // Compose response
        if (bestMatch && bestScore > 5) {
            let response = `<p><strong>${this.capitalize(bestMatch.term)}</strong></p>`;
            response += `<p>${bestMatch.definition}</p>`;

            if (chapterMatch) {
                response += `<div class="chat-sources">`;
                response += `<div class="chat-sources-title">Learn more:</div>`;
                response += `<a class="chat-source-link" href="#" data-chapter="${chapterMatch.index}">`;
                response += `${chapterMatch.chapter.number ? 'Chapter ' + chapterMatch.chapter.number + ': ' : ''}${chapterMatch.chapter.title}`;
                response += `</a></div>`;
            }

            return response;
        }

        if (chapterMatch) {
            let response = `<p>Based on the book content, here's what I found about "${query}":</p>`;
            response += `<p>${chapterMatch.excerpt}</p>`;
            response += `<div class="chat-sources">`;
            response += `<div class="chat-sources-title">Source:</div>`;
            response += `<a class="chat-source-link" href="#" data-chapter="${chapterMatch.index}">`;
            response += `${chapterMatch.chapter.number ? 'Chapter ' + chapterMatch.chapter.number + ': ' : ''}${chapterMatch.chapter.title}`;
            response += `</a></div>`;
            return response;
        }

        // Fallback response
        return this.getFallbackResponse(query);
    }

    calculateRelevance(query, term, definition) {
        let score = 0;
        const termLower = term.toLowerCase();
        const defLower = definition.toLowerCase();

        // Exact term match
        if (query.includes(termLower) || termLower.includes(query)) {
            score += 20;
        }

        // Word matches in term
        const queryWords = query.split(/\s+/);
        queryWords.forEach(word => {
            if (word.length > 2) {
                if (termLower.includes(word)) score += 10;
                if (defLower.includes(word)) score += 2;
            }
        });

        // Common question patterns
        if (query.startsWith('what is') || query.startsWith("what's")) {
            if (query.includes(termLower)) score += 15;
        }
        if (query.startsWith('how does') || query.startsWith('how do')) {
            if (query.includes(termLower)) score += 10;
        }
        if (query.includes('explain') && query.includes(termLower)) {
            score += 15;
        }

        return score;
    }

    searchChapters(query) {
        const queryWords = query.split(/\s+/).filter(w => w.length > 2);
        let bestMatch = null;
        let bestScore = 0;

        BOOK_CONTENT.chapters.forEach((chapter, index) => {
            let score = 0;

            // Check keywords
            if (chapter.keywords) {
                chapter.keywords.forEach(keyword => {
                    if (query.includes(keyword.toLowerCase())) {
                        score += 10;
                    }
                });
            }

            // Check title
            const titleLower = chapter.title.toLowerCase();
            queryWords.forEach(word => {
                if (titleLower.includes(word)) score += 5;
            });

            // Check content (simplified)
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = chapter.content;
            const text = tempDiv.textContent.toLowerCase();

            queryWords.forEach(word => {
                const matches = (text.match(new RegExp(word, 'g')) || []).length;
                score += Math.min(matches, 5);
            });

            if (score > bestScore) {
                bestScore = score;

                // Extract relevant excerpt
                let excerpt = '';
                const sentences = text.split(/[.!?]+/);
                for (const sentence of sentences) {
                    if (queryWords.some(word => sentence.includes(word))) {
                        excerpt = sentence.trim();
                        if (excerpt.length > 50) break;
                    }
                }

                bestMatch = {
                    chapter,
                    index,
                    score,
                    excerpt: excerpt.slice(0, 200) + (excerpt.length > 200 ? '...' : '')
                };
            }
        });

        return bestScore > 5 ? bestMatch : null;
    }

    getFallbackResponse(query) {
        const fallbacks = [
            `<p>I don't have specific information about "${query}" in my knowledge base, but I can help you explore the book content.</p>
             <p>Try asking about:</p>
             <ul>
                 <li>Escape velocity from aging</li>
                 <li>The Human Regenerative System</li>
                 <li>Blue Zones and longevity</li>
                 <li>Stem cell therapy</li>
                 <li>The hallmarks of aging</li>
             </ul>`,
            `<p>I couldn't find a direct answer to your question. The book covers many aspects of longevity science.</p>
             <p>You can use the search feature in the sidebar to find specific topics, or browse the table of contents to explore different chapters.</p>`,
            `<p>That's an interesting question! While I don't have that specific information readily available, the book discusses various aspects of aging and regenerative medicine.</p>
             <p>Would you like me to help you find information about a specific topic from the book?</p>`
        ];

        return fallbacks[Math.floor(Math.random() * fallbacks.length)];
    }

    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    getContext() {
        // Get current chapter context for AI
        const currentChapter = BOOK_CONTENT.chapters[window.bookApp?.currentChapterIndex || 0];
        return {
            currentChapter: currentChapter.title,
            bookTitle: BOOK_CONTENT.title,
            recentMessages: this.messages.slice(-5)
        };
    }

    addMessage(role, content) {
        const message = { role, content, timestamp: Date.now() };
        this.messages.push(message);

        const messageEl = document.createElement('div');
        messageEl.className = `message ${role}`;
        messageEl.innerHTML = `<div class="message-content">${content}</div>`;

        // Remove typing indicator if present
        const typing = this.messagesContainer.querySelector('.typing-indicator');
        if (typing) typing.remove();

        this.messagesContainer.appendChild(messageEl);
        this.scrollToBottom();

        // Bind chapter links
        messageEl.querySelectorAll('[data-chapter]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const index = parseInt(link.dataset.chapter);
                if (index >= 0 && window.bookApp) {
                    window.bookApp.loadChapter(index);
                }
            });
        });

        // Save history
        this.saveHistory();
    }

    showTyping() {
        this.isTyping = true;
        this.sendBtn.disabled = true;

        const typingEl = document.createElement('div');
        typingEl.className = 'message assistant';
        typingEl.innerHTML = `
            <div class="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;

        this.messagesContainer.appendChild(typingEl);
        this.scrollToBottom();
    }

    hideTyping() {
        this.isTyping = false;
        this.sendBtn.disabled = false;

        const typing = this.messagesContainer.querySelector('.typing-indicator');
        if (typing) {
            typing.closest('.message').remove();
        }
    }

    scrollToBottom() {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    // Called from search when clicking on knowledge base item
    askAboutTerm(term) {
        this.widget.classList.add('open');
        this.panel.classList.remove('hidden');
        this.input.value = `What is ${term}?`;
        this.sendMessage();
    }

    saveHistory() {
        // Save last 50 messages
        const toSave = this.messages.slice(-50);
        try {
            localStorage.setItem('chatHistory', JSON.stringify(toSave));
        } catch (e) {
            // Storage quota exceeded, clear old messages
            localStorage.removeItem('chatHistory');
        }
    }

    loadHistory() {
        try {
            const saved = localStorage.getItem('chatHistory');
            if (saved) {
                const messages = JSON.parse(saved);
                // Only load recent messages (last 24 hours)
                const dayAgo = Date.now() - (24 * 60 * 60 * 1000);
                const recent = messages.filter(m => m.timestamp > dayAgo);

                if (recent.length > 0) {
                    recent.forEach(m => this.addMessage(m.role, m.content));
                }
            }
        } catch (e) {
            // Ignore errors loading history
        }
    }
}

// Initialize chat when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.bookChat = new BookChat();
});
