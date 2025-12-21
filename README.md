# Benu Gopal Kanjilal - Portfolio Website

A modern, responsive portfolio website showcasing my work in AI/ML and Full-Stack Development.

## 🌟 Features

- **Modern Tech Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS v4
- **Stunning UI**: Glassmorphism effects, 3D animations with Three.js, Framer Motion
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Complete metadata, Open Graph tags, Twitter Cards
- **Working Contact Form**: EmailJS integration with form validation
- **Performance**: Optimized images, lazy loading, code splitting

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **3D**: Three.js, React Three Fiber
- **Form**: React Hook Form + Zod validation
- **Notifications**: React Hot Toast

### Tools
- **Language**: TypeScript
- **Package Manager**: npm
- **Deployment**: Vercel

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/itgithubplatform/portfolio_website.git

# Navigate to project directory
cd my-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in your browser.

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

See `env.example.txt` for a complete template.

## 📧 Setting Up EmailJS

1. Create a free account at [EmailJS.com](https://www.emailjs.com/)
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Copy your Service ID, Template ID, and Public Key
5. Add them to your `.env.local` file

## 🏗️ Project Structure

```
my-portfolio/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx    # Root layout with metadata
│   │   ├── page.tsx      # Home page
│   │   └── sitemap.ts    # Dynamic sitemap
│   ├── components/
│   │   ├── sections/     # Page sections
│   │   ├── ui/           # Reusable UI components
│   │   ├── animations/   # Animation components
│   │   └── 3d/           # Three.js components
│   ├── data/             # Data files (projects, skills, etc.)
│   ├── lib/              # Utility functions
│   └── types/            # TypeScript types
├── public/               # Static assets
└── package.json
```

## 📝 Sections

- **Hero**: Introduction with animated background
- **About**: Personal info and education
- **Skills**: Technical skills showcase
- **Experience**: Internships and work history
- **Projects**: Portfolio projects with live demos
- **Contact**: Working contact form

## 🎨 Customization

### Update Personal Information

1. **Metadata**: Edit `src/app/layout.tsx`
2. **Hero content**: Edit `src/components/sections/hero.tsx`
3. **About info**: Edit `src/components/sections/about.tsx`
4. **Skills**: Edit `src/data/skills.ts`
5. **Projects**: Edit `src/data/projects.ts`
6. **Experience**: Edit `src/data/experience.ts`

### Colors & Styling

Main color scheme uses Tailwind CSS classes:
- Purple: `purple-500`
- Pink: `pink-500`
- Blue: `blue-500`
- Slate: `slate-900`, `slate-800`, etc.

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

## 📊 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **SEO Score**: 100

## 🔗 Links

- **Live Site**: [benugopal.vercel.app](https://benugopal.vercel.app)
- **GitHub**: [@itgithubplatform](https://github.com/itgithubplatform)
- **LinkedIn**: [benug25](https://linkedin.com/in/benug25)
- **Twitter**: [@BenuKanjil55010](https://x.com/BenuKanjil55010)

## 📄 License

MIT License - feel free to use this portfolio as inspiration for your own!

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Built with ❤️ using Next.js and Tailwind CSS
- Icons from Heroicons and custom SVGs

---

**Built by Benu Gopal Kanjilal** | AI/ML & Full Stack Developer
