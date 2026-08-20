import { faqs, siteConfig } from '@/lib/site';

export default function JsonLd() {
  const personAndService = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: 'en-US',
        publisher: { '@id': `${siteConfig.url}/#person` },
      },
      {
        '@type': 'Person',
        '@id': `${siteConfig.url}/#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        image: `${siteConfig.url}/aboutImage.png`,
        email: siteConfig.email,
        jobTitle: 'Web Developer and Designer',
        description: siteConfig.description,
        knowsAbout: [
          'Web design',
          'Web development',
          'Responsive design',
          'Brand design',
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${siteConfig.url}/#service`,
        name: `${siteConfig.name} Web Design`,
        url: siteConfig.url,
        image: `${siteConfig.url}/aboutImage.png`,
        email: siteConfig.email,
        description: siteConfig.description,
        priceRange: '$500+',
        areaServed: 'Worldwide',
        serviceType: [
          'Custom website design',
          'Web development',
          'Website redesign',
          'Brand design',
        ],
        founder: { '@id': `${siteConfig.url}/#person` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteConfig.url}/#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personAndService) }}
    />
  );
}
