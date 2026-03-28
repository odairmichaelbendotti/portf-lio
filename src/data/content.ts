export interface Project {
  id: string;
  title: string;
  summary: string;
  image: string;
  link?: string;
  media: 'image' | 'gallery' | 'youtube' | 'video';
  youtubeId?: string;
  videoUrl?: string;
  galleryImages?: string[];
}

export interface Skill {
  name: string;
  rating: number;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Client {
  name: string;
  logo: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  class: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
}

export interface SectionContent {
  id: string;
  title: string;
  content: string[];
  options?: { label: string; action: string; variant?: 'primary' | 'secondary' }[];
}

export const personalInfo = {
  name: "David",
  fullName: "David Johnson",
  role: "Web Developer",
  location: "London, UK",
  years: "9+",
  projects: "62+",
  customers: "55+",
  quote: "David is the secret weapon for any modern SaaS, he transformed our complex ideas into a high performance reality.",
  quoteAuthor: "Marc Hawkins - Adobe Director",
  avatar: "/img/chat-avatar.png",
  introImage: "/img/avatar-intro.png"
};

export const aboutContent: SectionContent = {
  id: "about",
  title: "About Me",
  content: [
    "I'm a frontend developer passionate about building clean, intuitive interfaces and meaningful digital experiences that people enjoy using."
  ],
  options: [
    { label: "View My Skills", action: "skills" },
    { label: "View My Projects", action: "projects", variant: "secondary" }
  ]
};

export const skillsContent: SectionContent = {
  id: "skills",
  title: "Skills",
  content: [
    "Here are the tools and technologies I use daily to build reliable, modern interfaces with a strong focus on quality and performance."
  ],
  options: [
    { label: "View My Projects", action: "projects" },
    { label: "Download CV", action: "cv", variant: "secondary" }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "laptop",
    skills: [
      { name: "HTML", rating: 5 },
      { name: "JavaScript", rating: 4 },
      { name: "TypeScript", rating: 4 },
      { name: "React", rating: 5 },
      { name: "Tailwind CSS", rating: 5 }
    ]
  },
  {
    name: "Backend",
    icon: "database",
    skills: [
      { name: "Node.js", rating: 5 },
      { name: "Python", rating: 4 },
      { name: "PostgreSQL", rating: 4 }
    ]
  }
];

export const projectsIntro = {
  title: "Projects",
  content: "Ready to view my recent work? I'll walk you through my projects one at a time. Click the buttons below to explore."
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Gallery Project",
    summary: "Interactive e-commerce website with multiple product views and zoom features built with React and Node.js.",
    image: "/img/projects/project-1-big.jpg",
    link: "https://link-to-your-website.com",
    media: "gallery",
    galleryImages: [
      "/img/projects/project-1-big.jpg",
      "/img/projects/project-2-big.jpg",
      "/img/projects/project-3-big.jpg"
    ]
  },
  {
    id: "2",
    title: "YouTube Project",
    summary: "A short video showcasing the concept, key features, and the overall user experience in action.",
    image: "/img/projects/project-2-big.jpg",
    link: "https://link-to-your-website.com",
    media: "youtube",
    youtubeId: "SjJhuZQlkbA"
  },
  {
    id: "3",
    title: "Image Project",
    summary: "Interactive e-commerce website with multiple product views and zoom features built with React and Node.js.",
    image: "/img/projects/project-3-big.jpg",
    media: "image"
  }
];

export const clientsContent: SectionContent = {
  id: "clients",
  title: "Clients",
  content: [
    "I've had the pleasure of working with some amazing companies and brands over the years, here are a few of them:"
  ],
  options: [
    { label: "Contact Me", action: "contact" },
    { label: "Download CV", action: "cv", variant: "secondary" }
  ]
};

export const clients: Client[] = [
  { name: "Logo Ipsum", logo: "/img/clients/logoipsum-391.png" },
  { name: "Logo Ipsum", logo: "/img/clients/logoipsum-393.png" },
  { name: "Logo Ipsum", logo: "/img/clients/logoipsum-406.png" },
  { name: "Logo Ipsum", logo: "/img/clients/logoipsum-408.png" },
  { name: "Logo Ipsum", logo: "/img/clients/logoipsum-410.png" },
  { name: "Logo Ipsum", logo: "/img/clients/logoipsum-414.png" }
];

export const contactContent: SectionContent = {
  id: "contact",
  title: "Contact",
  content: [
    "I'm always open to new projects, creative ideas and opportunities. Feel free to get in touch through any of the channels below."
  ],
  options: [
    { label: "Send Me a Message", action: "contact_form" },
    { label: "View Projects", action: "projects", variant: "secondary" }
  ]
};

export const contactInfo: ContactInfo = {
  email: "david@website.com",
  phone: "+49 151 8025134"
};

export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com", class: "linkedin" },
  { name: "GitHub", icon: "github", url: "https://github.com", class: "github" },
  { name: "Facebook", icon: "facebook", url: "https://facebook.com", class: "facebook" },
  { name: "Twitter", icon: "twitter", url: "https://twitter.com", class: "twitter" },
  { name: "Instagram", icon: "instagram", url: "https://instagram.com", class: "instagram" }
];

export const hobbiesContent: SectionContent = {
  id: "hobbies",
  title: "Hobbies",
  content: [
    "Beyond coding, I like to keep my mind and body active with these activities:",
    "Do you share any of these interests?"
  ],
  options: [
    { label: "Let's Connect", action: "contact" },
    { label: "More About Me", action: "about", variant: "secondary" }
  ]
};

export const hobbies = [
  { name: "Photography", icon: "camera", description: "Capturing urban landscapes and nature." },
  { name: "Traveling", icon: "plane", description: "Exploring new cultures and cuisines." },
  { name: "Fitness", icon: "dumbbell", description: "Hitting the gym to stay energized." },
  { name: "Gaming", icon: "gamepad", description: "Love immersive RPGs and strategy games." },
  { name: "Music", icon: "headphones", description: "Lo-fi beats while coding and rock for the road." },
  { name: "Football", icon: "futbol", description: "Playing in local leagues and following the beautiful game." }
];

export const quickStats = [
  { icon: "star", value: "9+", label: "Years in Web Development" },
  { icon: "code", value: "62+", label: "Completed Projects" },
  { icon: "smile", value: "55+", label: "Happy Customers" },
  { icon: "calendar-check", value: "Available", label: "for Freelance" },
  { icon: "map", value: "London, UK", label: "Based in" }
];

export const navItems = [
  { id: "about", label: "About Me", icon: "file-lines" },
  { id: "skills", label: "Skills", icon: "gear" },
  { id: "projects", label: "Projects", icon: "layer-group" },
  { id: "clients", label: "Clients", icon: "users" },
  { id: "contact", label: "Contact", icon: "envelope" }
];
