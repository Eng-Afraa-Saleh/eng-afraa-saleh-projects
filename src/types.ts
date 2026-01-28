
export type Language = 'ar' | 'en' | 'zh';

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  category: string;  
  image: string;
}
export interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  image?: string;          
  file?: string;            
  certificatePdf?: string;  
  recommendation?: string;  
   skills?: string[];  
}


export interface Translation {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    certificates: string;
    contact: string;
  };
  contactForm: {
    title: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    contactInfo: string;
    followUs: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    bio: string;
    hireMe: string;
    viewWork: string;
    contactMe: string;
  };
  about: {
    title: string;
    description: string;
    experience: string;
    projectsCompleted: string;
  };
  skills: {
    title: string;
    core: string;
    frameworks: string;
    tools: string;
    other: string;
  };
  projects: {
    title: string;
    viewProject: string;
    techStack: string;
    all: string;  
    items: ProjectItem[];
  };
  certificates: {
    title: string;
    issuedBy: string;
    viewCertificate: string;
    recommendation: string;
    skillsGained: string;
    viewOriginal: string;
    close: string;
  };
  footer: {
    rights: string;
    stayConnected: string;
  };
  chat: {
    title: string;
    welcome: string;
    placeholder: string;
    suggested1: string;
    suggested2: string;
    suggested3: string;
    online: string;
  };
}
