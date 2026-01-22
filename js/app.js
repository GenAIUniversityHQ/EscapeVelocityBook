/**
 * Escape Velocity Interactive Book - Main Application
 */

class BookApp {
    constructor() {
        this.currentChapterIndex = 0;
        this.chapters = BOOK_CONTENT.chapters;
        this.fontSize = 100;
        this.lineHeight = 1.8;

        this.init();
    }

    init() {
        this.cacheElements();
        this.bindEvents();
        this.loadSavedState();
        this.renderTOC();
        this.loadChapter(this.currentChapterIndex);
        this.initTheme();
    }

    cacheElements() {
        // Sidebar
        this.sidebar = document.getElementById('sidebar');
        this.sidebarToggle = document.getElementById('sidebar-toggle');
        this.toc = document.getElementById('toc');

        // Content
        this.bookContent = document.getElementById('book-content');
        this.currentSection = document.getElementById('current-section');
        this.progressBar = document.getElementById('progress-bar');

        // Navigation
        this.prevBtn = document.getElementById('prev-chapter');
        this.nextBtn = document.getElementById('next-chapter');
        this.chapterCurrent = document.getElementById('chapter-current');
        this.chapterTotal = document.getElementById('chapter-total');

        // Controls
        this.themeToggle = document.getElementById('theme-toggle');
        this.fontSizeBtn = document.getElementById('font-size-btn');
        this.downloadBtn = document.getElementById('download-btn');

        // Modals
        this.videoModal = document.getElementById('video-modal');
        this.videoContainer = document.getElementById('video-container');
        this.fontModal = document.getElementById('font-modal');

        // Font controls
        this.fontDecrease = document.getElementById('font-decrease');
        this.fontIncrease = document.getElementById('font-increase');
        this.fontSizeDisplay = document.getElementById('font-size-display');
        this.spacingBtns = document.querySelectorAll('.spacing-btn');
    }

    bindEvents() {
        // Sidebar toggle
        this.sidebarToggle.addEventListener('click', () => this.toggleSidebar());

        // Navigation
        this.prevBtn.addEventListener('click', () => this.prevChapter());
        this.nextBtn.addEventListener('click', () => this.nextChapter());

        // Theme toggle
        this.themeToggle.addEventListener('click', () => this.toggleTheme());

        // Font settings
        this.fontSizeBtn.addEventListener('click', () => this.toggleFontModal());
        this.fontDecrease.addEventListener('click', () => this.adjustFontSize(-10));
        this.fontIncrease.addEventListener('click', () => this.adjustFontSize(10));
        this.spacingBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.setLineSpacing(e.target.dataset.spacing));
        });

        // Download
        this.downloadBtn.addEventListener('click', () => this.handleDownload());

        // Scroll progress
        window.addEventListener('scroll', () => this.updateProgress());

        // Modal close handlers
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', () => this.closeModals());
        });

        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) this.closeModals();
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));

        // Video embeds (delegated)
        this.bookContent.addEventListener('click', (e) => {
            const videoEmbed = e.target.closest('.video-embed');
            if (videoEmbed) {
                this.openVideo(videoEmbed.dataset.videoId);
            }
        });
    }

    // ==================
    // Chapter Management
    // ==================

    renderTOC() {
        this.toc.innerHTML = this.chapters.map((chapter, index) => {
            const num = chapter.number ? `<span class="toc-chapter-num">${chapter.number}</span>` : '';
            return `
                <li class="toc-item ${index === this.currentChapterIndex ? 'active' : ''}" data-index="${index}">
                    <a href="#" data-index="${index}">
                        ${num}${chapter.title}
                    </a>
                </li>
            `;
        }).join('');

        // Bind TOC click events
        this.toc.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const index = parseInt(e.target.dataset.index || e.target.closest('a').dataset.index);
                this.loadChapter(index);
                this.closeSidebarOnMobile();
            });
        });

        this.chapterTotal.textContent = this.chapters.length;
    }

    loadChapter(index) {
        if (index < 0 || index >= this.chapters.length) return;

        this.currentChapterIndex = index;
        const chapter = this.chapters[index];

        // Update content
        this.bookContent.innerHTML = chapter.content;

        // Add video embeds if present
        if (chapter.videos && chapter.videos.length > 0) {
            this.renderVideos(chapter.videos);
        }

        // Update UI
        this.currentSection.textContent = chapter.title;
        this.chapterCurrent.textContent = index + 1;

        // Update TOC active state
        this.toc.querySelectorAll('.toc-item').forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });

        // Update navigation buttons
        this.prevBtn.disabled = index === 0;
        this.nextBtn.disabled = index === this.chapters.length - 1;

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Save state
        this.saveState();
    }

    prevChapter() {
        if (this.currentChapterIndex > 0) {
            this.loadChapter(this.currentChapterIndex - 1);
        }
    }

    nextChapter() {
        if (this.currentChapterIndex < this.chapters.length - 1) {
            this.loadChapter(this.currentChapterIndex + 1);
        }
    }

    renderVideos(videos) {
        videos.forEach(video => {
            const videoHtml = `
                <div class="video-embed" data-video-id="${video.videoId}">
                    <div class="video-thumbnail">
                        <img src="${video.thumbnail}" alt="${video.title}">
                        <div class="video-play-btn">
                            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        </div>
                    </div>
                    <div class="video-caption">${video.title}</div>
                </div>
            `;

            // Find a good insertion point (after first h3 or at end)
            const h3 = this.bookContent.querySelector('h3');
            if (h3 && h3.nextElementSibling) {
                h3.nextElementSibling.insertAdjacentHTML('afterend', videoHtml);
            } else {
                this.bookContent.insertAdjacentHTML('beforeend', videoHtml);
            }
        });
    }

    // ==================
    // Video Modal
    // ==================

    openVideo(videoId) {
        if (!videoId || videoId === 'PLACEHOLDER') {
            alert('Video coming soon!');
            return;
        }

        this.videoContainer.innerHTML = `
            <iframe
                src="https://www.youtube.com/embed/${videoId}?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        `;
        this.videoModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    // ==================
    // Sidebar
    // ==================

    toggleSidebar() {
        this.sidebar.classList.toggle('collapsed');
        localStorage.setItem('sidebarCollapsed', this.sidebar.classList.contains('collapsed'));
    }

    closeSidebarOnMobile() {
        if (window.innerWidth <= 768) {
            this.sidebar.classList.remove('open');
        }
    }

    // ==================
    // Theme
    // ==================

    initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    // ==================
    // Font Settings
    // ==================

    toggleFontModal() {
        this.fontModal.classList.toggle('hidden');
    }

    adjustFontSize(delta) {
        this.fontSize = Math.max(80, Math.min(150, this.fontSize + delta));
        document.documentElement.style.setProperty('--font-size-multiplier', this.fontSize / 100);
        this.fontSizeDisplay.textContent = `${this.fontSize}%`;
        localStorage.setItem('fontSize', this.fontSize);
    }

    setLineSpacing(spacing) {
        this.lineHeight = parseFloat(spacing);
        document.documentElement.style.setProperty('--line-height', this.lineHeight);
        this.spacingBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.spacing === spacing);
        });
        localStorage.setItem('lineHeight', this.lineHeight);
    }

    // ==================
    // Progress
    // ==================

    updateProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        this.progressBar.style.width = `${progress}%`;
    }

    // ==================
    // Download
    // ==================

    handleDownload() {
        // In a real implementation, this would generate or serve a PDF
        alert('PDF download feature coming soon! The book will be available for offline reading.');
    }

    // ==================
    // State Management
    // ==================

    saveState() {
        localStorage.setItem('currentChapter', this.currentChapterIndex);
    }

    loadSavedState() {
        // Load chapter
        const savedChapter = localStorage.getItem('currentChapter');
        if (savedChapter !== null) {
            this.currentChapterIndex = parseInt(savedChapter);
        }

        // Load font settings
        const savedFontSize = localStorage.getItem('fontSize');
        if (savedFontSize) {
            this.fontSize = parseInt(savedFontSize);
            document.documentElement.style.setProperty('--font-size-multiplier', this.fontSize / 100);
            this.fontSizeDisplay.textContent = `${this.fontSize}%`;
        }

        const savedLineHeight = localStorage.getItem('lineHeight');
        if (savedLineHeight) {
            this.lineHeight = parseFloat(savedLineHeight);
            document.documentElement.style.setProperty('--line-height', this.lineHeight);
            this.spacingBtns.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.spacing === savedLineHeight);
            });
        }

        // Load sidebar state
        const sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
        if (sidebarCollapsed) {
            this.sidebar.classList.add('collapsed');
        }
    }

    // ==================
    // Modals
    // ==================

    closeModals() {
        this.videoModal.classList.add('hidden');
        this.fontModal.classList.add('hidden');
        this.videoContainer.innerHTML = '';
        document.body.style.overflow = '';
    }

    // ==================
    // Keyboard Navigation
    // ==================

    handleKeyboard(e) {
        // Don't capture if typing in input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        switch (e.key) {
            case 'ArrowLeft':
                this.prevChapter();
                break;
            case 'ArrowRight':
                this.nextChapter();
                break;
            case 'Escape':
                this.closeModals();
                break;
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.bookApp = new BookApp();
});
