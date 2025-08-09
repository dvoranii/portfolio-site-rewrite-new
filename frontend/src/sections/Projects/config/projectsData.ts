import OGCarouselImg1 from "../../../assets/images/Projects/GalleryImages/OG-gallery-img(1).png";
import OGCarouselImg2 from "../../../assets/images/Projects/GalleryImages/OG-gallery-img(2).png";
import OGCarouselImg3 from "../../../assets/images/Projects/GalleryImages/OG-gallery-img(3).png";

export interface Project {
  id: number;
  title: string;
  thumbnail: string;
  techStack: string[];
  description: string;
  galleryImages: string[];
  githubURL?: string;
  liveDemoURL?: string;
  figmaLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sunstar GUM PWA iPad Application",
    thumbnail: "/assets/images/Projects/GUM.webp",
    techStack: ["React", "TypeScript", "PWA", "CSS", "Node"],
    description:
      "Developed a Progressive Web App for Sunstar GUM's sales team to showcase products on iPads. The app features offline functionality, smooth animations, and a custom CMS for content management. Implemented responsive design to ensure optimal viewing on various iPad models.",
    galleryImages: [
      "/assets/images/Projects/GUM-gallery-1.webp",
      "/assets/images/Projects/GUM-gallery-2.webp",
      "/assets/images/Projects/GUM-gallery-3.webp",
    ],
    githubURL: "https://github.com/dvoranii/gum-pwa",
    liveDemoURL: "https://gum-pwa-demo.vercel.app/",
  },
  {
    id: 2,
    title: "YMCA HTML Banner Advertisements",
    thumbnail: "/assets/images/Projects/YMCA-BG.png",
    techStack: ["HTML", "CSS", "JavaScript", "Photoshop"],
    description:
      "Created a series of interactive HTML5 banner ads for YMCA campaigns. Developed a custom lightweight framework for banner animations that improved load times by 40%. Designed templates that were reused across multiple campaigns, significantly reducing development time.",
    galleryImages: [
      "/assets/images/Projects/YMCA-gallery-1.png",
      "/assets/images/Projects/YMCA-gallery-2.png",
      "/assets/images/Projects/YMCA-gallery-3.png",
    ],
    githubURL: "https://github.com/dvoranii/ymca-banners",
  },
  {
    id: 3,
    title: "Fullstack Fanatic - Blogs and Tutorials",
    thumbnail: "/assets/images/Projects/fsf-portfolio-thumbnail.png",
    techStack: ["React", "TypeScript", "Node", "SQL", "CSS"],
    description:
      "A full-stack web app with user authentication, premium content via Stripe, social features, and real-time chat. Implemented robust security measures including CSRF protection, reCAPTCHA, and IP blacklisting.",
    galleryImages: [
      "/assets/images/Projects/fsf-gallery-1.png",
      "/assets/images/Projects/fsf-gallery-2.png",
      "/assets/images/Projects/fsf-gallery-3.png",
    ],
    githubURL: "https://github.com/dvoranii/fullstack-fanatic-mysql",
    liveDemoURL: "https://staging.fullstackfanatic.com/",
    figmaLink:
      "https://www.figma.com/file/QI30cDuiJrvMoWTAKRunZV/Fullstack-Fanatic",
  },
  {
    id: 4,
    title: "Outpost 379 Marketing Agency",
    thumbnail: "/assets/images/Projects/OutpostThumb.webp",
    techStack: ["JavaScript", "HTML", "CSS"],
    description:
      "Collaborated on website management and updates, ensuring responsiveness and user experience. Implemented performance optimizations that reduced bounce rate by 25%.",
    galleryImages: [
      "/assets/images/Projects/op-gallery-1.webp",
      "/assets/images/Projects/op-gallery-2.webp",
    ],
    liveDemoURL: "https://outpost379.com/",
  },
  {
    id: 5,
    title: "Canadian Global Logistics Website",
    thumbnail: "/assets/images/Projects/CGL-Thumb.webp",
    techStack: ["JavaScript", "THREE.js", "Firebase", "Node"],
    description:
      "Beta website featuring a 3D spinning globe and responsive design for the logistics sector. Implemented complex forms for quotes and contacts with backend processing.",
    galleryImages: [
      "/assets/images/Projects/cgl-gallery-1.webp",
      "/assets/images/Projects/cgl-gallery-2.webp",
    ],
    githubURL: "https://github.com/dvoranii/reCaptchaV2",
    liveDemoURL: "https://cglwebsitetest.xyz/",
  },
  {
    id: 6,
    title: "OG Creations Recording Studio",
    thumbnail: "/assets/images/Projects/og-thumb.webp",
    techStack: ["Angular", "TypeScript", "Firebase", "Node", "Photoshop"],
    description:
      "The inaugural website for OG Creations Recording Studio featuring online sales funnel, Firebase-integrated contact forms, and brand-specific design. Delivered a 30% increase in client inquiries post-launch.",
    galleryImages: [OGCarouselImg1, OGCarouselImg2, OGCarouselImg3],
    githubURL: "https://github.com/dvoranii/og-creations-website",
    liveDemoURL: "https://www.ogcreations.ca/",
  },
  {
    id: 7,
    title: "Personal Projects Website",
    thumbnail: "/assets/images/Projects/personal-projects-thumb.png",
    techStack: ["React", "Vite", "JavaScript", "CSS"],
    description:
      "Portfolio site showcasing personal projects with clean navigation and project filtering. Implemented responsive design and performance optimizations.",
    galleryImages: ["/assets/images/Projects/personal-gallery-1.png"],
    githubURL: "https://github.com/dvoranii/personal-projects-site",
    liveDemoURL: "https://personal-projects-site.vercel.app/",
  },
  {
    id: 8,
    title: "Portfolio Site (This Website)",
    thumbnail: "/assets/images/Projects/ildidev-thumb.png",
    techStack: ["React", "TypeScript", "Vite", "Styled-Components"],
    description:
      "Designed and developed this portfolio as a Progressive Web App with offline capabilities. Features custom animations, theme switching, and optimized performance scores.",
    galleryImages: [
      "/assets/images/Projects/portfolio-gallery-1.png",
      "/assets/images/Projects/portfolio-gallery-2.png",
    ],
    githubURL: "https://github.com/dvoranii/portfolio-site-react",
    figmaLink: "https://www.figma.com/file/LkeTEUFRxx2N3XbVw7KedA/IlDIDEV",
  },
];

export default projects;
