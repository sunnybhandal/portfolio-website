# Portfolio Website

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Home Section**: Split layout with profile picture and professional summary
- **About Section**: Showcase of personal interests (hiking, weightlifting, health & fitness research, movies & TV shows)
- **Experience Section**: Resume-style format with company logos, titles, duration, and responsibilities
- **Smooth Navigation**: Fixed navigation bar with smooth scrolling between sections

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding Images

To add your images, place them in the `public/images/` directory:

1. **Profile Picture**: Add your profile image as `public/images/profile.jpg`
2. **Company Logos**: Add company logos as:
   - `public/images/company1-logo.png` (for the first company)
   - `public/images/company2-logo.png` (for the second company)
   - `public/images/company3-logo.png` (for the third company)

The website includes fallback placeholders if images are not found, so you can test it immediately and add images later.

## Customization

- **Home Section**: Edit `sections/HomeSection.tsx` to update the summary text
- **About Section**: Edit `sections/AboutSection.tsx` to modify interests
- **Experience Section**: Edit `sections/ExperienceSection.tsx` to update work experience
- **Styling**: All components use Tailwind CSS classes for easy customization

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page with all sections
│   └── globals.css      # Global styles
├── components/
│   └── Navigation.tsx   # Navigation component
├── sections/
│   ├── HomeSection.tsx      # Home section component
│   ├── AboutSection.tsx     # About section component
│   └── ExperienceSection.tsx # Experience section component
└── public/
    └── images/           # Place your images here
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
