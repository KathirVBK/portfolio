# Portfolio Website

A modern, responsive, and fully customizable portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1.  Clone the repository or download the source code.
2.  Navigate to the project directory:
    ```bash
    cd portfolio
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```

## 🛠 Configuration

All content is managed through a single configuration file located at `src/data/portfolioData.js`.
You can update your personal information, about section, skills, projects, certifications, and contact details there without touching the code.

## 📦 Deployment

### Vercel (Recommended)

1.  Create a [Vercel account](https://vercel.com).
2.  Install Vercel CLI: `npm i -g vercel` or use the web dashboard.
3.  Run `vercel` in the project root and follow the prompts.
4.  Your site will be deployed instantly.

### Netlify

1.  Create a [Netlify account](https://www.netlify.com).
2.  Drag and drop the `dist` folder (run `npm run build` first) to the Netlify dashboard.
3.  Or connect your GitHub repository for continuous deployment.

### GitHub Pages

1.  In `package.json`, add `"homepage": "https://yourusername.github.io/repo-name"`.
2.  Install gh-pages: `npm install gh-pages --save-dev`.
3.  Add scripts to `package.json`:
    ```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
    ```
4.  Run `npm run deploy`.

## 🎨 Customization

-   **Colors**: Update the `primary` and `dark` colors in `tailwind.config.js`.
-   **Fonts**: The project uses 'Inter' from Google Fonts. You can change this in `index.html` and `tailwind.config.js`.

## 📄 License

MIT
