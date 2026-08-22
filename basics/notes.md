# HTML Basics

HTML stands for HyperText Markup Language. It is the standard language for creating web pages.

## Basic Structure
Every HTML document has a basic structure:
```html
<!DOCTYPE html> <!-- Tells the browser this is an HTML5 document -->
<html lang="en">
<head>
    <!-- Metadata, title, links to CSS -->
    <meta charset="UTF-8">
    <title>My Website</title>
</head>
<body>
    <!-- Visible content goes here! -->
</body>
</html>
```

### HTML Boilerplate Explained:
- `<!DOCTYPE html>`: This declaration tells the web browser that the document is written in HTML5. It ensures the browser renders the page correctly.
- `<html>`: The root element of an HTML page. All other elements must be inside this tag. The `lang="en"` attribute specifies that the page content is in English.
- `<head>`: This section contains meta-information about the HTML page that isn't displayed directly on the screen (like the title, character set, CSS styles, and scripts).
- `<meta charset="UTF-8">`: Specifies the character encoding for the HTML document. `UTF-8` covers almost all characters and symbols in the world.
- `<title>`: Sets the title of the web page, which appears in the browser's title bar or tab.
- `<body>`: Contains all the visible content of the web page, such as headings, paragraphs, images, videos, hyperlinks, etc. Only the content inside the `<body>` tag will be shown in the browser window.

## Headings
Headings go from `<h1>` (most important/largest) down to `<h6>` (least important/smallest).
```html
<h1>Main Title</h1>
<h2>Subheading</h2>
```

## Paragraphs & Dividers
- `<p>`: Used for a paragraph of text.
- `<div>`: A generic container used to group things together (very important for styling later!).
- `<br>`: Line break (forces text to the next line).
- `<hr>`: Horizontal rule (draws a horizontal line).
