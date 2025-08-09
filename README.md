# YeneSteps

**Empowering the next generation of African climate leaders through AI-powered carbon tracking**

A revolutionary climate action web application designed specifically for African youth, featuring AI-powered carbon footprint analysis, community engagement, and sustainable living insights.

## Features

- **Smart Photo Recognition**: AI-powered product identification and carbon footprint calculation
- **Real-time Impact Tracking**: Live carbon reduction monitoring with beautiful visualizations
- **Community Leaderboards**: Climate challenges and sustainable lifestyle competitions
- **Personalized Recommendations**: Culturally relevant, location-aware environmental tips
- **Offline Capabilities**: Full functionality even with limited internet connectivity
- **Local Impact Data**: Region-specific environmental data across Africa

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 with custom animations
- **3D Graphics**: Three.js + React Three Fiber
- **Routing**: React Router DOM
- **Forms**: Formspree for email collection

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/ChernetAsmamaw/yenesteps.git
   cd yenesteps
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Set up environment variables

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your Formspree form ID:

   ```env
   VITE_FORMSPREE_FORM_ID=your_formspree_form_id_here
   ```

4. Start development server
   ```bash
   npm run dev
   ```

Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
npm run preview
```

## Email Collection Setup

The project uses [Formspree](https://formspree.io) for collecting email subscriptions:

1. Create a free account at formspree.io
2. Create a new form
3. Copy your form ID
4. Add it to your `.env` file as `VITE_FORMSPREE_FORM_ID`

## Key Components

**Coming Soon Page** (`/coming-soon`)

- Email subscription form with Formspree integration
- Feature previews and launch timeline

**Main Landing Page** (`/`)

- Animated 3D globe with Three.js
- Feature showcase with scroll animations
- Download CTAs linking to Coming Soon page

## Deployment

### Vercel

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload dist/ folder to Netlify
```

Make sure to set `VITE_FORMSPREE_FORM_ID` in your deployment platform's environment variables.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## About YeneSteps

YeneSteps is dedicated to empowering African youth in the fight against climate change through technology, community, and actionable insights.

---

**Made with love in Africa** | [Contact](mailto:hello@yenesteps.com)
