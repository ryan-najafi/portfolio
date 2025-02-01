import { useEffect } from 'react';

export function SEO() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Ryan Arman",
      "alternateName": "Ryan Najafi",
      "description": "Technical leader with 20+ years of experience in AI, healthcare, robotics, and ranking systems.",
      "url": "https://arman.bio",
      "sameAs": [
        "https://www.linkedin.com/in/rmnajafi/",
        "https://github.com/ryan-najafi",
        "https://scholar.google.com/citations?user=8Ypm7kQAAAAJ&hl=en"
      ],
      "jobTitle": "Technical Leader",
      "alumniOf": [
        {
          "@type": "CollegeOrUniversity",
          "name": "University of British Columbia"
        },
        {
          "@type": "CollegeOrUniversity",
          "name": "Stanford University"
        }
      ],
      "knowsAbout": [
        "Artificial Intelligence",
        "Healthcare Technology",
        "Robotics",
        "Machine Learning",
        "Computer Vision",
        "Natural Language Processing",
        "Ranking Systems"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Meta"
      },
      "award": [
        "Best Paper Award IPCAI 2012",
        "Best of Radiology Advances 2024",
        "GRAND-NCE Commercialization Grant"
      ],
      "workExample": [
        {
          "@type": "CreativeWork",
          "name": "Radiology Co-Pilot",
          "description": "AI tools for lung and breast cancer detection, improving diagnostic sensitivity by +7.6%"
        },
        {
          "@type": "CreativeWork",
          "name": "Epidural Guidance System",
          "description": "Real-time needle tracking system for ultrasound-guided procedures"
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
} 