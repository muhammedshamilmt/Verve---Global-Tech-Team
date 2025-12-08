# ⚡ Verve - Global Tech Team

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green.svg?style=for-the-badge)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

> A premium, high-performance SaaS landing page template designed for AI agencies, tech startups, and modern digital teams. Features a sleek dark mode aesthetic, glassmorphism effects, and fluid animations.

---

## 🚀 Overview

**Verve** is a production-ready React application built with performance and aesthetics in mind. It provides a complete suite of pages including landing, authentication, pricing, and checkout flows, all styled with a sophisticated dark theme.

The project utilizes **React** for the UI library, **Tailwind CSS** for styling, and **TypeScript** for type safety, ensuring a robust developer experience.

---

## ✨ Key Features

### 🎨 Design & UI
- **Premium Dark Mode**: Carefully curated color palette using deep blacks (`#020406`) and vibrant teal accents (`#5eead4`).
- **Glassmorphism**: Modern frosted glass effects on cards, navbars, and overlays.
- **Responsive Layouts**: Mobile-first design that scales perfectly from phones to 4K displays.
- **Micro-Interactions**: Subtle hover states, button glows, and interactive elements.

### ⚡ Performance & Animation
- **Scroll Reveal**: Custom hook-based scroll animations for smooth element entry.
- **Staggered Text**: split-text animations for headlines.
- **Optimized Assets**: SVG icons via `lucide-react` for zero layout shift.

### 🛠️ Pages & Components
- **Landing Page**: Hero section with 3D dashboard preview, feature grids, and social proof.
- **Authentication**: Full flows for Login, Signup, Forgot Password, and OTP Verification.
- **E-commerce**: Pricing tables with monthly/yearly toggles, Checkout form, and Payment Success confirmation.
- **Company**: About Us, Team, Careers, and Contact forms.
- **Legal**: Terms of Service, Privacy Policy, and Licensing pages.

---

## 💻 Tech Stack

| Technology | Description |
| :--- | :--- |
| **React** | Front-end library for building user interfaces. |
| **TypeScript** | Superset of JavaScript adding static type definitions. |
| **Tailwind CSS** | Utility-first CSS framework for rapid UI development. |
| **Lucide React** | Beautiful, consistent icon set. |
| **Vite** | Next Generation Frontend Tooling (presumed build tool). |

---

## 📂 Project Structure

```bash
verve-project/
├── components/          # React components
│   ├── ui/              # Reusable UI atoms (Button, ScrollReveal, etc.)
│   ├── Navbar.tsx       # Main navigation
│   ├── Footer.tsx       # Site footer
│   ├── HeroSection.tsx  # Landing page hero
│   └── ...              # Page-specific components
├── App.tsx              # Main application router/layout
├── index.tsx            # Entry point
├── index.html           # HTML template
└── tailwind.config.js   # Style configuration
```

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/verve-tech-team.git
    cd verve-tech-team
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

---

## 🎨 Customization

### Colors
The project uses a central color configuration in Tailwind. To change the primary accent color, update the `verve-accent` value in the `tailwind.config` (script tag in `index.html` or `tailwind.config.js`):

```javascript
colors: {
  verve: {
    bg: '#020406',
    accent: '#5eead4', // Change this hex code
    // ...
  }
}
```

### Fonts
The project uses **Poppins** from Google Fonts. You can change this by updating the `<link>` tags in `index.html` and the `fontFamily` setting in Tailwind config.

---

## 📄 License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

<div align="center">
  <sub>Built with precision and passion.</sub>
</div>
