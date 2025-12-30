<p align="center">
  <img src="src/assets/images/logo.png" alt="ThinkInk Logo" width="200"/>
</p>

<h1 align="center">ThinkInk Frontend</h1>

<p align="center">
  <strong>Translating Brain Signals into Text</strong>
</p>

<p align="center">
  <a href="https://thinkink.vercel.app/">Live Demo</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-project-structure">Project Structure</a>
</p>

---

## 📖 About

**ThinkInk** is a cutting-edge platform that translates brain signals (EEG/EMG) into text using advanced AI and machine learning technologies. This frontend application provides an intuitive, accessible interface for users to interact with neural data processing capabilities.

### Key Highlights

- 🧠 **Neural Signal Processing** — Upload and process EEG/EMG files in real-time
- 🤖 **AI-Powered Translation** — Convert brain signals to text using advanced ML models
- 🔐 **Secure Authentication** — Google OAuth integration with JWT token management
- 📱 **Progressive Web App** — Offline capabilities with service worker support
- ♿ **Accessibility First** — Designed specifically for users with speech impairments
- ⚡ **Real-time Feedback** — Toast notifications and smooth animations

---

## 🛠️ Tech Stack

| Category           | Technologies                                                                                                                                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Framework**      | ![React](https://img.shields.io/badge/React_18-61DAFB?style=flat&logo=react&logoColor=black) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)                                                  |
| **Styling**        | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)             |
| **Routing**        | ![React Router](https://img.shields.io/badge/React_Router_v7-CA4245?style=flat&logo=reactrouter&logoColor=white)                                                                                                                     |
| **HTTP Client**    | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white)                                                                                                                                            |
| **Authentication** | ![Google OAuth](https://img.shields.io/badge/Google_OAuth-4285F4?style=flat&logo=google&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white)                               |
| **UI Components**  | ![Lucide](https://img.shields.io/badge/Lucide_Icons-F56565?style=flat) ![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=flat&logo=swiper&logoColor=white)                                                                  |
| **PWA**            | ![Workbox](https://img.shields.io/badge/Workbox-FF6F00?style=flat) ![Vite PWA](https://img.shields.io/badge/Vite_PWA-646CFF?style=flat)                                                                                              |
| **Dev Tools**      | ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white) ![Husky](https://img.shields.io/badge/Husky-000000?style=flat) ![Commitlint](https://img.shields.io/badge/Commitlint-000000?style=flat) |
| **Runtime**        | ![Bun](https://img.shields.io/badge/Bun-000000?style=flat&logo=bun&logoColor=white)                                                                                                                                                  |

### Dependencies Overview

#### Core

- **[React 18](https://react.dev/)** — Modern React with concurrent features
- **[Vite](https://vitejs.dev/)** — Lightning-fast build tool and dev server
- **[React Router DOM v7](https://reactrouter.com/)** — Client-side routing

#### Styling & Animation

- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** — Production-ready motion library
- **[Lucide React](https://lucide.dev/)** — Beautiful & consistent icon pack
- **[Swiper](https://swiperjs.com/)** — Modern touch slider

#### API & State

- **[Axios](https://axios-http.com/)** — Promise-based HTTP client
- **[React Hot Toast](https://react-hot-toast.com/)** — Toast notifications

#### Authentication

- **[React OAuth Google](https://github.com/MomenSherif/react-oauth)** — Google OAuth integration
- **[JWT Decode](https://github.com/auth0/jwt-decode)** — JSON Web Token decoder

#### PWA

- **[Vite PWA Plugin](https://vite-pwa-org.netlify.app/)** — Zero-config PWA framework
- **[Workbox Window](https://developer.chrome.com/docs/workbox/)** — Service worker management

---

## 🏗️ Project Structure

```
ThinkInk-Frontend/
├── 📁 public/                    # Static assets
│   ├── robots.txt               # SEO robots configuration
│   └── sitemap.xml              # SEO sitemap
│
├── 📁 dev-dist/                  # PWA service worker files
│   ├── sw.js                    # Service worker
│   └── workbox-*.js             # Workbox runtime
│
├── 📁 src/                       # Source code
│   ├── 📄 App.jsx               # Root application component
│   ├── 📄 main.jsx              # Application entry point
│   ├── 📄 index.css             # Global styles
│   │
│   ├── 📁 api/                   # API layer
│   │   ├── axiosInstance.jsx    # Axios configuration
│   │   ├── auth.jsx             # Authentication API
│   │   ├── register.jsx         # Registration API
│   │   └── logout.jsx           # Logout API
│   │
│   ├── 📁 assets/                # Static assets
│   │   └── 📁 images/           # Image files
│   │
│   ├── 📁 common/                # Reusable UI components
│   │   ├── AppleBtn.jsx         # Apple sign-in button
│   │   ├── GoogleBtn.jsx        # Google sign-in button
│   │   ├── CheckBox.jsx         # Custom checkbox
│   │   ├── SwitchBtn.jsx        # Toggle switch
│   │   ├── GreenTag.jsx         # Status tag component
│   │   ├── Loader.jsx           # Loading spinner
│   │   └── TopNav.jsx           # Top navigation bar
│   │
│   ├── 📁 components/            # Feature components
│   │   ├── LanguageSelector.jsx # Language picker
│   │   ├── 📁 header/           # Header component
│   │   ├── 📁 hero/             # Hero section
│   │   ├── 📁 footer/           # Footer component
│   │   ├── 📁 articles/         # Articles display
│   │   ├── 📁 codeSample/       # Code examples
│   │   ├── 📁 fileupload/       # EEG/EMG file upload
│   │   ├── 📁 pricingCard/      # Pricing cards
│   │   ├── 📁 FQA/              # FAQ section
│   │   ├── 📁 sideMenu/         # Side navigation
│   │   ├── 📁 side-slider/      # Slider component
│   │   ├── 📁 sectionText/      # Text sections
│   │   ├── 📁 response-popup/   # Response modal
│   │   ├── 📁 Enterprise/       # Enterprise section
│   │   └── 📁 PATIENTS/         # Patients section
│   │
│   ├── 📁 context/               # React Context providers
│   │   └── UploadContext.jsx    # File upload state
│   │
│   ├── 📁 global/                # Global utilities
│   │   └── styles.css           # Global CSS variables
│   │
│   └── 📁 pages/                 # Route pages
│       ├── About.jsx            # About page
│       ├── Api.jsx              # API documentation
│       ├── BluetoothConnect.jsx # Bluetooth device connection
│       ├── ComingSoon.jsx       # Coming soon placeholder
│       ├── Contact.jsx          # Contact form
│       ├── Login.jsx            # Login page
│       ├── Register.jsx         # Registration page
│       ├── Pricing.jsx          # Pricing page
│       ├── Profile.jsx          # User profile
│       └── NotFound.jsx         # 404 page
│
├── 📄 index.html                 # HTML entry point
├── 📄 package.json               # Dependencies & scripts
├── 📄 vite.config.js             # Vite configuration
├── 📄 tailwind.config.js         # Tailwind configuration
├── 📄 postcss.config.js          # PostCSS configuration
├── 📄 eslint.config.js           # ESLint configuration
├── 📄 Dockerfile                 # Docker configuration
└── 📄 README.md                  # Project documentation
```

---

## 🚦 Getting Started

### Prerequisites

- **[Bun](https://bun.sh/)** (v1.0 or higher) — Fast all-in-one JavaScript runtime

### Installation

```bash
# Install Bun (if not already installed)
curl -fsSL https://bun.sh/install | bash

# Clone the repository
git clone https://github.com/your-username/ThinkInk-Frontend.git
cd ThinkInk-Frontend

# Install dependencies
bun install
```

### Development

```bash
# Start development server
bun run dev

# Run linting
bun run lint

# Setup git hooks
bun run prepare
```

### Production

```bash
# Build for production
bun run build

# Preview production build
bun run preview
```

---

## 🌐 Deployment

This project is optimized for deployment on **Vercel**:

- ✅ Automatic builds on push
- ✅ SEO optimization with sitemap.xml
- ✅ Progressive Web App capabilities
- ✅ Performance optimizations
- ✅ Docker support available

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/new-feature`
3. Commit changes: `git commit -m 'feat: add new feature'`
4. Push to branch: `git push origin feat/new-feature`
5. Submit a pull request

Please follow the [Branch Naming Conventions](BranchNamingConventions.md) and use conventional commits.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <a href="https://thinkink.vercel.app/">🌐 Live Demo</a> •
  <a href="https://thinkink.vercel.app/docs">📚 API Docs</a> •
  <a href="https://thinkink.vercel.app/contact">💬 Contact Us</a>
</p>
