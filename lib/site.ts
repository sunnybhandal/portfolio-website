export const siteConfig = {
  name: 'Sunny Bhandal',
  title: 'Sunny Bhandal | Custom Websites for Businesses',
  description:
    'Sunny Bhandal designs and builds custom websites for businesses. Every site is made for desktop and mobile, starts at $500, and comes with clear pricing and no hidden fees.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://sunnybhandal.com',
  email: 'sunnybhandal123@gmail.com',
  locale: 'en_US',
  ogImageAlt: 'Sunny Bhandal, custom websites for businesses',
} as const;

export const faqs: { question: string; answer: string }[] = [
  {
    question: 'How much does a website cost?',
    answer:
      'Websites start at $500. Final pricing depends on your goals, content, and the functionality you need. If you have a smaller project or are not sure where to start, I am happy to discuss options.',
  },
  {
    question: 'What’s included in a project?',
    answer:
      'Each project includes custom functionality, responsive design, strategy sessions, brand optimization, and ongoing support. Revisions are available for an additional fee but highly depend on the amount of work required.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Timelines vary based on scope and how quickly content and feedback are available. After an initial conversation, I will share a clear estimate so you know what to expect before we begin. It should take about a week for me to provide you with an initial draft that we can have a discussion about and then make adjustments from there.',
  },
  {
    question: 'What do you need from me to get started?',
    answer:
      'A short overview of your business, goals, and any examples you like is a great start. From there, we will cover content, design preferences, and the features that matter most.',
  },
  {
    question: 'Can you help with more than just websites?',
    answer:
      'Absolutely. While websites are my primary focus, I also design a wide range of marketing and branding materials. Whether you need business cards, brochures, presentations, social media graphics, images, videos, or other branded content, I can help create a cohesive visual identity across all of your marketing materials.',
  },
  {
    question: 'Do you write website copy?',
    answer:
      'Yes. Clear, compelling messaging is just as important as great design. I can help write or refine your website copy to ensure it communicates your brand effectively and encourages visitors to take action.',
  },
  {
    question: 'Will my website work on mobile devices?',
    answer:
      'Yes. Every website I build is fully responsive and optimized to provide a seamless experience across desktops, tablets, and smartphones.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer:
      'Absolutely. If your current website feels outdated, difficult to navigate, or no longer reflects your brand, I can redesign it with a modern look, improved user experience, and better performance.',
  },
  {
    question: 'What types of websites do you build?',
    answer:
      'I design and develop custom websites for businesses, professionals, and personal brands. Whether you need a portfolio, business website, landing page, or a complete redesign, every website is built to be responsive, user-friendly, and tailored to your goals.',
  },
  {
    question: 'Do you provide website maintenance?',
    answer:
      'Yes. I can help with ongoing updates, content changes, performance improvements, and general maintenance to keep your website running smoothly.',
  },
  {
    question: 'How do I get in touch?',
    answer:
      'Fill out the contact form with your name, email, and project details, and I will follow up soon to discuss next steps.',
  },
];
