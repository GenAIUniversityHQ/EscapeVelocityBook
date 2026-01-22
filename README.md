# Escape Velocity Interactive Book Web App

An elegant, interactive web experience for "Escape Velocity from Human Aging" by Dr. Giampapa and Dr. Urzola.

## Features

- **Beautiful Reading Experience** - Clean, book-like typography with adjustable font sizes and themes
- **Chapter Navigation** - Easy navigation through table of contents and prev/next buttons
- **Full-Text Search** - Search across all book content with highlighted results
- **AI Chat Assistant** - Ask questions about the book content and get intelligent responses
- **Video Embedding** - Support for embedded video content on any page
- **Dark Mode** - Toggle between light and dark themes
- **Reading Progress** - Visual progress indicator showing how far you've read
- **Mobile Responsive** - Works beautifully on all device sizes
- **Offline Support** - Content loads instantly with no external dependencies

## Quick Start

1. Open `index.html` in a web browser
2. That's it! No build process or server required.

For a better experience, serve with any static file server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then open http://localhost:8000

## Project Structure

```
/
├── index.html          # Main HTML file
├── css/
│   ├── styles.css      # Main styles
│   └── chat.css        # Chat widget styles
├── js/
│   ├── content.js      # Book content & knowledge base (EDIT THIS TO UPDATE CONTENT)
│   ├── app.js          # Main application logic
│   ├── search.js       # Search functionality
│   └── chat.js         # AI chat assistant
└── README.md           # This file
```

## Updating Book Content

All book content is stored in `js/content.js`. This is the ONLY file you need to edit to update the book.

### Adding/Editing Chapters

Open `js/content.js` and find the `chapters` array. Each chapter is an object:

```javascript
{
    id: "chapter-1",           // Unique identifier
    number: "1",               // Chapter number (leave empty for non-numbered sections)
    title: "Chapter Title",    // Main title
    subtitle: "Subtitle",      // Optional subtitle
    content: `                 // HTML content (use backticks for multi-line)
        <h1>Chapter 1</h1>
        <h2>Chapter Title</h2>
        <p>Your content here...</p>
    `,
    videos: [],                // Optional video embeds
    keywords: ["keyword1"]     // Keywords for search
}
```

### HTML Formatting Reference

You can use these HTML elements in your content:

```html
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>

<p>Regular paragraph text.</p>

<blockquote>
    <p>Important quote or callout.</p>
</blockquote>

<ul>
    <li>Bullet point</li>
    <li>Another point</li>
</ul>

<ol>
    <li>Numbered item</li>
    <li>Second item</li>
</ol>

<strong>Bold text</strong>
<em>Italic text</em>

<!-- Info boxes -->
<div class="info-box">
    <div class="info-box-title">Title</div>
    <p>Content here.</p>
</div>

<div class="info-box key-point">
    <div class="info-box-title">Key Point</div>
    <p>Important information.</p>
</div>

<div class="info-box highlight">
    <div class="info-box-title">Highlight</div>
    <p>Highlighted content.</p>
</div>

<!-- Tables -->
<table>
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
        </tr>
    </tbody>
</table>
```

### Adding Videos

Add videos to any chapter:

```javascript
videos: [
    {
        id: "video-1",
        title: "Video Title",
        thumbnail: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",
        videoId: "VIDEO_ID"  // YouTube video ID
    }
]
```

### Updating the Knowledge Base

The AI chat uses the knowledge base at the bottom of `content.js`:

```javascript
knowledgeBase: {
    concepts: {
        "term name": "Definition or explanation of the term...",
        "another term": "Another explanation..."
    },
    treatments: {
        "treatment name": "Description of the treatment..."
    },
    lifestyle: {
        "topic": "Information about this lifestyle topic..."
    }
}
```

Add new terms to help the chat assistant answer questions about your book content.

## Customization

### Colors & Theming

Edit the CSS variables at the top of `css/styles.css`:

```css
:root {
    --color-bg: #faf9f7;
    --color-accent: #4a6fa5;
    --font-serif: 'Crimson Pro', Georgia, serif;
    /* ... more variables */
}
```

### Adding AI Backend

The chat can be connected to a real AI API. In `js/chat.js`, set:

```javascript
this.apiEndpoint = 'https://your-api-endpoint.com/chat';
```

The endpoint should accept POST requests with:
```json
{
    "message": "user question",
    "context": {
        "currentChapter": "Chapter Title",
        "bookTitle": "Escape Velocity from Human Aging",
        "recentMessages": []
    }
}
```

And return:
```json
{
    "response": "AI response HTML"
}
```

## Deployment Options

### Static Hosting (Recommended)

The app is purely static HTML/CSS/JS. Deploy to:

- **GitHub Pages** - Free, just push to a gh-pages branch
- **Netlify** - Free tier, drag and drop deployment
- **Vercel** - Free tier, automatic deployments
- **AWS S3** - Low cost, high reliability
- **Cloudflare Pages** - Free, global CDN

### Embedding in Existing Sites

Include the webapp in an iframe or integrate the components:

```html
<iframe src="path/to/webapp/index.html" width="100%" height="800px"></iframe>
```

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## License

Copyright RMI - Regenerative Medicine Institute. All rights reserved.
Book content is proprietary and may not be reproduced without permission.
