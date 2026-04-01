# Mapengo Innovation – Enterprise Frontend

Enterprise-grade Next.js frontend for the Mapengo Innovation platform. Built with Next.js 14, Tailwind CSS, and a fully modular component architecture.

## Features

- ⚡ **Next.js 14** with App/Pages Router support
- 🎨 **Tailwind CSS** responsive design system
- 🔍 **SEO-optimised** with OpenGraph and Twitter card meta tags
- 📊 **Google Analytics** integration (placeholder)
- 🍪 **Cookie consent banner** (POPIA compliant)
- 📱 **Fully responsive** mobile-first design
- 🔒 **POPIA-compliant** legal pages (Privacy Policy, Terms, Cookie Policy)
- 📈 **User behaviour tracking** hook (`useUserBehavior`)
- 🧩 **Modular component library** (Navbar, Hero, CTA, Card, PricingTable, Form)
- 🔗 **Backend API integration** via `lib/api.js`

## Project Structure

```
├── components/       # Reusable UI components
├── hooks/            # Custom React hooks
├── layouts/          # Page layout wrappers
├── lib/              # Utility libraries (API client)
├── pages/            # Next.js pages (file-based routing)
├── styles/           # Global CSS
└── __tests__/        # Jest unit tests
```

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Backend API running (see `enterprise-backend` repo)

### Installation

```bash
# Clone the repository
git clone https://github.com/Nhlobo/enterprise-frontend.git
cd enterprise-frontend

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Edit .env.local with your values
nano .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Environment Variables

Copy `.env.local.example` to `.env.local` and configure:

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | Backend API base URL | `http://localhost:4000` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics Measurement ID | `` |

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run test     # Run Jest tests
```

## Pages

| Route | Description |
|---|---|
| `/` | Home page |
| `/pricing` | Pricing plans |
| `/contact` | Contact form |
| `/about` | About us |
| `/privacy` | Privacy Policy (POPIA) |
| `/terms` | Terms of Service |
| `/cookies` | Cookie Policy |
| `/solutions/[slug]` | Dynamic solution pages |
| `/industries/[slug]` | Dynamic industry pages |
| `/case-studies/[slug]` | Dynamic case study pages |

## Deployment to Render

### 1. Push code to GitHub

```bash
git push origin main
```

### 2. Create a Render Web Service

1. Go to [render.com](https://render.com) and click **New → Web Service**
2. Connect your GitHub repository
3. Configure the service:
   - **Name:** `enterprise-frontend`
   - **Runtime:** Node
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm run start`

### 3. Set Environment Variables on Render

In the Render dashboard, add:

```
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 4. Deploy

Click **Create Web Service** – Render will automatically deploy on every push to main.

## CI/CD

The `.github/workflows/ci.yml` workflow runs on every push to `main`:

1. Install dependencies
2. Run lint (`npm run lint`)
3. Run build (`npm run build`)
4. Run tests (`npm run test`)

## Legal & Compliance

All legal pages are POPIA-compliant:
- **Privacy Policy** (`/privacy`) – data collection, processing, and user rights
- **Terms of Service** (`/terms`) – service terms and conditions
- **Cookie Policy** (`/cookies`) – cookie usage and consent management

## Contributing

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages:

```
feat: add new component
fix: resolve navbar mobile menu bug
chore: update dependencies
docs: update README
```
