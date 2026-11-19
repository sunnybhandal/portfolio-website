export const siteConfig = {
  name: 'Sunny Bhandal',
  title: 'Sunny Bhandal | Custom Websites for Businesses',
  description:
    'Sunny Bhandal designs and builds custom websites for businesses. Every site is made for desktop and mobile. The cost is determined after a consultation, with fair pricing that works around your budget.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://sunnybhandal.com',
  email: 'sunnybhandal123@gmail.com',
  locale: 'en_US',
  ogImageAlt: 'Sunny Bhandal, custom websites for businesses',
} as const;

export const faqs: { question: string; answer: string }[] = [
  {
    question: 'How much does a website cost?',
    answer:
      'The cost of a website is determined after a consultation, once I understand your business and what you need. Pricing is fair, and I work around your budget.',
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
    question: 'Will my website work on mobile devices?',
    answer:
      'Yes. Every website I build is fully responsive and optimized to provide a seamless experience across desktops, tablets, and smartphones.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer:
      'Absolutely. If your current website feels outdated, difficult to navigate, or no longer reflects your brand, I can redesign it with a modern look.',
  },
  {
    question: 'How do I get in touch?',
    answer:
      'Fill out the contact form with your name, email, and project details, and I will follow up soon to discuss next steps.',
  },
];
