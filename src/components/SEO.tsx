import { useEffect } from 'react';

export function SEO() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Ryan Arman",
      "alternateName": "Mohammad Najafi",
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
      "knowsAbout": ["Artificial Intelligence", "Healthcare Technology", "Robotics", "Machine Learning", "Computer Vision"],
      "worksFor": {
        "@type": "Organization",
        "name": "Meta"
      },
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Technical Leader",
        "description": "AI and Machine Learning Expert specializing in healthcare and robotics applications"
      }
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