#Random Password Generator

A responsive, lightweight web application built with vanilla HTML, CSS, and modern JavaScript to create cryptographically secure random passwords.

---

## Features

- **Cryptographically Secure:** Uses the native `window.crypto.getRandomValues()` Web API instead of predictable pseudo-random methods.
- **Customizable Length:** Interactive range slider allowing lengths from 6 to 32 characters.
- **One-Click Copy:** Seamless clipboard integration with instant feedback.
- **Recent History Dropdown:** Automatically retains a rolling memory of the last 10 generated passwords.
- **Zero Dependencies:** Pure HTML5, modern CSS (Flexbox), and ES6+ JavaScript—no heavy frameworks or external libraries required.

---

## Tech Stack

- **HTML5:** Semantic structure and native input controls.
- **CSS3:** Responsive layout utilizing Flexbox and radial gradients.
- **JavaScript (ES6+):** DOM manipulation, Web Crypto API, and Clipboard API.

---

## Project Structure

```text
Random-Password-Generator/
│
├── index.html
├── README.md
├── css/
│   └── passGenStyle.css
└── js/
    └── passGeneratorScript.js
