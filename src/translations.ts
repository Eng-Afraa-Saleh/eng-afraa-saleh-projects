import type { CertificateItem, Language, Translation } from "./types";
import estatein from "/projectimage/estatein.png";
import flora from "/projectimage/flora.png";
import dashboardseller from "/projectimage/dashboardseller.png";
import violetecommerce from "/projectimage/violetecommerce.png";
import annaStore from "/projectimage/annaStore.png";
import theBlogs from "/projectimage/theBlogs.png";
import academy from "/projectimage/academy.png";
import violetcompany from "/projectimage/violetcompany.png";
import violetKit from "/projectimage/violetKit.png";
import focalXcertification from "/certifications/focalXcertification.png";
import m3arfcertification from "/certifications/m3arfcertification.jpg";
import Recommendation from "/certifications/Afraa_Malek_Saleh_Recommendation.pdf";
export const translations: Record<Language, Translation> = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عني",
      skills: "المهارات",
      projects: "المشاريع",
      certificates: "الشهادات",
      contact: "اتصل بي"
    },
    contactForm: {
      title: "تواصل معي",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      message: "رسالتك",
      send: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      success: "تم تحويلك لبريدك الإلكتروني لإرسال الرسالة!",
      contactInfo: "معلومات الاتصال",
      followUs: "تابعني على"
    },
    hero: {
      greeting: "مرحباً، أنا",
      name: "المهندسة عفراء",
      title: "مطور واجهات أمامية (Front-End Developer)",
      bio: "مطورة شغوفة ببناء تطبيقات ويب حديثة تركز على الأداء، تجربة المستخدم، وتحسين محركات البحث (SEO).",
      hireMe: "وظفني",
      viewWork: "شاهد أعمالي",
      contactMe: "تواصل معي"
    },
    about: {
      title: "عني",
      description: "أنا مهندسة برمجيات متخصصة في تطوير الواجهات الأمامية. أؤمن بأن التصميم الجيد ليس مجرد شكل جميل، بل هو أداة لحل المشكلات وتسهيل حياة المستخدمين. لدي خبرة واسعة في بناء تطبيقات ويب متجاوبة وسريعة.",
      experience: "سنوات خبرة",
      projectsCompleted: "مشروع مكتمل"
    },
    skills: {
      title: "المهارات التقنية",
      core: "الأساسيات",
      frameworks: "الأطر والمكتبات",
      tools: "الأدوات والمفاهيم",
      other: "الخلفية البرمجية والأخرى"
    },
    projects: {
      title: "معرض المشاريع",
      viewProject: "عرض المشروع",
      techStack: "التقنيات المستخدمة",
      all: "الكل",
      items: [
        {
          title: "موقع شركة - عرض تقديمي",
          description: "موقع ويب استعراضي لعرض خدمات الشركة وتاريخها وإنجازاتها. يقدم واجهة احترافية مع أقسام الخدمات، الفريق، والمشاريع (مع إخفاء الأقسام الحساسة المربوطة بالخلفية بسبب سياسة الخصوصية).",
          tech: ["ReactJS", "Tailwind CSS", "Axios", "TypeScript"],
          link: "https://eng-afraa-saleh.github.io/VioletCompany/",
          github: "https://github.com/Eng-Afraa-Saleh/VioletCompany",
          category: "موقع شركة",
          image: violetcompany
        },
        {
          title: "معرض عقاري",
          description: "منصة ويب متطورة لعرض العقارات والوحدات السكنية بأسلوب مرئي جذاب. تتيح للمستخدمين تصفح البيوت والشقق والفيلات مع تفاصيل كاملة، صور عالية الجودة، وخريطة تفاعلية",
          tech: ["ReactJS", "Tailwind CSS", "Firebase", "TypeScript"],
          link: "https://eng-afraa-saleh.github.io/Esty/",
          github: "https://github.com/Eng-Afraa-Saleh/Esty",
          category: "عقاري",
          image: estatein
        },
        {
          title: "مكتبة مكونات واجهة المستخدم",
          description: "مكتبة شاملة لمكونات React جاهزة للاستخدام، مصممة خصيصاً للمشاريع العربية مع دعم كامل لـ RTL. تحتوي على +30 مكوناً مع أمثلة حية، توثيق تفاعلي، وإمكانية التخصيص الكامل.",
          tech: ["ReactJS", "Tailwind CSS", "TypeScript"],
          link: " https://eng-afraa-saleh.github.io/Violet-UI-Kit/",
          github: "https://github.com/Eng-Afraa-Saleh/Violet-UI-Kit",
          category: "مكتبة UI / أدوات تطوير",
          image: violetKit
        },
        {
          title: "منصة تجارة إلكترونية متكاملة",
          description: "متجر إلكتروني متكامل مع واجهة مستخدم غنية يدعم عمليات البيع الكاملة: تصفح المنتجات، عربة التسوق، إدارة الطلبات، مع لوحة تحكم إدارية متكاملة لإدارة المخزون والعملاء.",
          tech: ["ReactJS", "Tailwind CSS", "TypeScript"],
          link: "https://eng-afraa-saleh.github.io/E-commerceViolet/",
          github: "https://github.com/Eng-Afraa-Saleh/E-commerceViolet",
          category: "متجر الكتروني",
          image: violetecommerce
        },
        {
          title: "منصة مدونات أكاديمية",
          description: "منصة متكاملة لنشر وتصنيف التقارير والمقالات الأكاديمية. تتيح قراءة المدونات، التصنيف حسب التخصص، نظام تقييم وتعليقات .",
          tech: ["ReactJS", "Redux", "TypeScript", "Tailwind CSS"],
          link: "https://eng-afraa-saleh.github.io/TheBlogs-Website/",
          github: "https://github.com/Eng-Afraa-Saleh/TheBlogs-Website",
          category: "أكاديمي",
          image: theBlogs
        },
        {
          title: "لوحة تحكم المبيعات",
          description: "منصة متكاملة لإدارة عمليات المبيعات مع دعم كامل للمنتجات والعملاء والفواتير والتقارير والتحليلات البيانية والمساعد الذكي",
          tech: ["ReactJS", "TypeScript", "Tailwind CSS"],
          link: "https://eng-afraa-saleh.github.io/DashboardSeller/",
          github: "https://github.com/Eng-Afraa-Saleh/DashboardSeller",
          category: "لوحة تحكم / نظام إدارة",
          image: dashboardseller
        },
        {

          title: "معرض عقاري بسيط",
          description: "واجهة ويب خفيفة لعرض قوائم العقارات (شقق، فلل) بتصميم نظيف وسهل الاستخدام",
          tech: ["ReactJS", "TypeScript", "CSS"],
          link: "https://eng-afraa-saleh.github.io/Flora-website/",
          github: "https://github.com/Eng-Afraa-Saleh/Flora",
          category: "عقاري",
          image: flora
        },

        {
          title: "متجر الكتروني بسيط",
          description: "مشروعي الاول على الاطلاق, واجهة متجر إلكتروني خفيفة لعرض المنتجات وتصفحها. تصميم بسيط ونظيف لتجربة تسوق أساسية بدون تعقيدات.",
          tech: ["HTML", "CSS", "JavaScript"],
          link: "https://eng-afraa-saleh.github.io/AnnaStore/",
          github: "https://github.com/Eng-Afraa-Saleh/AnnaStore",
          category: "متجر الكتروني",
          image: annaStore


        },

        {
          title: "منصة أكاديمية تعليمية",
          description: "أول مشروع React في مسيرتي - موقع تعليمي متكامل يعرض كورسات الأكاديمية، الفعاليات، أراء أولياء الأمور، والمحتوى التعليمي مع واجهة تصفح بسيطة وسلسة.",
          tech: ["ReactJS", "CSS", "JavaScript"],
          link: "https://eng-afraa-saleh.github.io/AcademyWebsite/",
          github: "https://github.com/Eng-Afraa-Saleh/AcademyWebsite",
          category: "أكاديمي",
          image: academy
        }
        
      ]
    },
    certificates: {
      title: "الشهادات والاعتمادات",
      issuedBy: "جهة الإصدار",
      viewCertificate: "عرض الشهادة",
      recommendation: "رسالة التوصية",
      skillsGained: "المهارات المكتسبة",
      viewOriginal: "عرض النسخة الأصلية",
      close: "إغلاق"
    },
    footer: {
      rights: "جميع الحقوق محفوظة © المهندسة عفراء 2026",
      stayConnected: "ابق على تواصل"
    },
    chat: {
      title: "مساعد عفراء الذكي",
      welcome: "مرحباً! كيف يمكنني مساعدتك في التعرف على أعمالي ومهاراتي؟",
      placeholder: "اكتب رسالتك هنا...",
      suggested1: "ما هي مهاراتك الأساسية؟",
      suggested2: "حدثيني عن مشاريعك.",
      suggested3: "كيف يمكنني التواصل معك؟",
      online: "متصل الآن"
    }
  },


  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      certificates: "Certificates",
      contact: "Contact"
    },
    contactForm: {
      title: "Get in Touch",
      name: "Full Name",
      email: "Email Address",
      message: "Your Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Redirecting to your email client...",
      contactInfo: "Contact Information",
      followUs: "Follow Me"
    },
    hero: {
      greeting: "Hi, I am",
      name: "Afraa.dev",
      title: "Front-End Developer",
      bio: "Passionate developer building modern web applications with a focus on performance, UX, and SEO optimization.",
      hireMe: "Hire Me",
      viewWork: "View Work",
      contactMe: "Contact Me"
    },
    about: {
      title: "About Me",
      description: "I am a software engineer specialized in front-end development. I believe that good design is not just a beautiful shape, but a tool for solving problems and making users' lives easier. I have extensive experience in building responsive and fast web applications.",
      experience: "Years Experience",
      projectsCompleted: "Projects Completed"
    },
    skills: {
      title: "Technical Skills",
      core: "Core",
      frameworks: "Frameworks & Libraries",
      tools: "Tools & Concepts",
      other: "Backend & Others"
    },
    projects: {
      title: "Projects Gallery",
      viewProject: "View Project",
      techStack: "Tech Stack",
      all: "All",
      items: [
         {
          title: "Company Presentation Website",
          description: "A showcase website displaying company services, history, and achievements. Features professional interface with services, team, and projects sections (sensitive backend-connected sections are hidden due to privacy policies).",
          tech: ["ReactJS", "Tailwind CSS", "Axios", "TypeScript"],
          link: "https://eng-afraa-saleh.github.io/VioletCompany/",
          github: "https://github.com/Eng-Afraa-Saleh/VioletCompany",
          category: "Corporate Website / Presentation",
          image: violetcompany
        },
        {

          title: "Real Estate Showcase",
          description: "A modern web platform for visually appealing real estate and property listings. Allows users to browse houses, apartments, and villas with complete details, high-quality images, and interactive maps.",
          tech: ["ReactJS", "Tailwind CSS", "Firebase", "TypeScript"],
          link: "https://eng-afraa-saleh.github.io/Esty/",
          github: "https://github.com/Eng-Afraa-Saleh/Esty",
          category: "Real Estate",
          image: estatein
        },
        {
          title: "Violet UI Kit - React Component Library",
          description: "A comprehensive React UI component library designed specifically for Arabic projects with full RTL support. Features 30+ components with live examples, interactive documentation, and full customization capabilities.",
          tech: ["ReactJS", "Tailwind CSS", "TypeScript"],
          link: " https://eng-afraa-saleh.github.io/Violet-UI-Kit/",
          github: "https://github.com/Eng-Afraa-Saleh/Violet-UI-Kit",
          category: "UI Library / Development Tools",
          image: violetKit
        },
        {
          title: "E-commerce Platform",
          description: "A complete e-commerce store with rich UI supporting full shopping operations: product browsing, shopping cart, order management, along with an integrated admin dashboard for inventory and customer management.",
          tech: ["ReactJS", "Tailwind CSS", "TypeScript"],
          link: "https://eng-afraa-saleh.github.io/E-commerceViolet/",
          github: "https://github.com/Eng-Afraa-Saleh/E-commerceViolet",
          category: "E-commerce",
          image: violetecommerce
        },
        {
          title: "Academic Blogging Platform",
          description: "A comprehensive platform for reading and categorizing academic reports and articles. Features blog creation, categorization, rating systems, comments.",
          tech: ["ReactJS", "Redux", "TypeScript", "Tailwind CSS"],
          link: "https://eng-afraa-saleh.github.io/TheBlogs-Website/",
          github: "https://github.com/Eng-Afraa-Saleh/TheBlogs-Website",
          category: "Academic",
          image: theBlogs
        },
        {
          title: "Sales Management Dashboard",
          description: "A comprehensive platform for managing sales operations with full support for products, customers, invoices, reports, chart analytics, and AI chatbot assistance",
          tech: ["ReactJS", "TypeScript", "Tailwind CSS"],
          link: "https://eng-afraa-saleh.github.io/DashboardSeller/",
          github: "https://github.com/Eng-Afraa-Saleh/DashboardSeller",
          category: "Dashboard",
          image: dashboardseller
        },
        {
          title: "Simple Real Estate Gallery",
          description: "A lightweight web interface for displaying property listings (apartments, villas) with clean and user-friendly design",
          tech: ["ReactJS", "TypeScript", "CSS"],
          link: "https://eng-afraa-saleh.github.io/Flora-website/",
          github: "https://github.com/Eng-Afraa-Saleh/Flora",
          category: "Real Estate",
          image: flora
        },
        {
          title: "Simple E-commerce Store",
          description: "My first project ever,A lightweight e-commerce interface for displaying and browsing products. Clean and minimal design for a basic shopping experience without complexities.",
          tech: ["HTML", "CSS", "JavaScript"],
          link: "https://eng-afraa-saleh.github.io/AnnaStore/",
          github: "https://github.com/Eng-Afraa-Saleh/AnnaStore",
          category: "E-commerce",
          image: annaStore
        },

        {
          title: "Educational Academy Platform",
          description: "My first React project - A comprehensive educational website displaying academy courses, events, parent testimonials, and educational content with a simple, smooth browsing interface.",
          tech: ["ReactJS", "CSS", "JavaScript"],
          link: "https://eng-afraa-saleh.github.io/AcademyWebsite/",
          github: "https://github.com/Eng-Afraa-Saleh/AcademyWebsite",
          category: "Academic",
          image: academy
        }
       
      ]
    },
    certificates: {
      title: "Certificates",
      issuedBy: "Issued by",
      viewCertificate: "View Certificate",
      recommendation: "Recommendation",
      skillsGained: "Skills Gained",
      viewOriginal: "View Original",
      close: "Close"
    },
    footer: {
      rights: "All rights reserved © Afraa.dev 2026",
      stayConnected: "Stay Connected"
    },
    chat: {
      title: "Afraa's Assistant",
      welcome: "Hi there! How can I help you learn more about my work and skills?",
      placeholder: "Type your message...",
      suggested1: "What are your core skills?",
      suggested2: "Tell me about your projects.",
      suggested3: "How can I contact you?",
      online: "Online"
    }
  },


  zh: {
    nav: {
      home: "首页",
      about: "关于我",
      skills: "技能",
      projects: "项目",
      certificates: "证书",
      contact: "联系我"
    },
    contactForm: {
      title: "取得联系",
      name: "全名",
      email: "电子邮件地址",
      message: "您的留言",
      send: "发送消息",
      sending: "发送中...",
      success: "正在跳转至邮件客户端...",
      contactInfo: "联系方式",
      followUs: "关注我"
    },
    hero: {
      greeting: "你好，我是",
      name: "阿芙拉工程师",
      title: "前端开发工程师",
      bio: "热衷于构建现代 Web 应用程序，专注于性能、用户体验和 SEO 优化。",
      hireMe: "雇佣我",
      viewWork: "查看作品",
      contactMe: "联系我"
    },
    about: {
      title: "关于我",
      description: "我是一名专注于前端开发的软件工程师。我相信好的设计不仅仅是美观的外表，更是解决问题和改善用户生活的工具。在构建响应式和快速的 Web 应用程序方面，我有丰富的经验。",
      experience: "多年经验",
      projectsCompleted: "完成项目"
    },
    skills: {
      title: "技术技能",
      core: "核心技术",
      frameworks: "框架与库",
      tools: "工具与概念",
      other: "后端及其他"
    },
    projects: {
      title: "项目展示",
      viewProject: "查看项目",
      techStack: "技术栈",
      all: "全部",
      items: [
         {
          title: "公司展示网站",
          description: "展示公司服务、历史和成就的展示网站。具备专业的界面，包含服务、团队和项目部分（由于隐私政策，与后端连接的敏感部分已隐藏）。",
          tech: ["ReactJS", "Tailwind CSS", "Axios", "TypeScript"],
          link: "https://eng-afraa-saleh.github.io/VioletCompany/",
          github: "https://github.com/Eng-Afraa-Saleh/VioletCompany",
          category: "企业网站 / 展示网站",
          image: violetcompany
        },
        {
          title: "房产展示",
          description: "现代化房地产展示平台，以视觉吸引人的方式展示房产和住宅单元。用户可以浏览别墅、公寓、房屋的完整详细信息、高清图片和交互式地图。",
          tech: ["ReactJS", "Tailwind CSS", "Firebase", "TypeScript"],
          link: "https://eng-afraa-saleh.github.io/Esty/",
          github: "https://github.com/Eng-Afraa-Saleh/Esty",
          category: "房地产",
          image: estatein
        },
        {
          title: "Violet UI 组件库",
          description: "专为阿拉伯项目设计的全面React UI组件库，支持完整的RTL。包含30多个组件，提供实时示例、交互式文档和完全自定义功能。",
          tech: ["ReactJS", "Tailwind CSS", "TypeScript", "Storybook"],
          link: " https://eng-afraa-saleh.github.io/Violet-UI-Kit/",
          github: "https://github.com/Eng-Afraa-Saleh/Violet-UI-Kit",
          category: "UI组件库 / 开发工具",
          image: violetKit
        },
        {
          title: "全栈电商平台",
          description: "功能完整的电子商务商店，拥有丰富的用户界面，支持完整的购物流程：产品浏览、购物车、安全支付 、订单管理，以及用于库存和客户管理的集成管理仪表板。",
          tech: ["ReactJS", "Tailwind CSS", "TypeScript"],
          link: "https://eng-afraa-saleh.github.io/E-commerceViolet/",
          github: "https://github.com/Eng-Afraa-Saleh/E-commerceViolet",
          category: "电子商务",
          image: violetecommerce
        },
        {
          title: "学术博客平台",
          description: "一个用于发布和分类学术报告和文章的综合平台。它包括主题分类、评分系统和评论功能。",
          tech: ["ReactJS", "Redux", "TypeScript", "Tailwind CSS"],
          link: "https://eng-afraa-saleh.github.io/TheBlogs-Website/",
          github: "https://github.com/Eng-Afraa-Saleh/TheBlogs-Website",
          category: "学术平台",
          image: theBlogs
        },
        {
          title: "销售管理仪表板",
          description: "用于管理销售业务的综合平台，全面支持产品管理、客户管理、发票管理、报告生成、图表分析和AI聊天机器人助手",
          tech: ["ReactJS", "TypeScript", "Tailwind CSS"],
          link: "https://eng-afraa-saleh.github.io/DashboardSeller/",
          github: "https://github.com/Eng-Afraa-Saleh/DashboardSeller",
          category: "仪表板 / 管理系统",
          image: dashboardseller
        },
        {
          title: "简单房地产展示",
          description: "用于展示房产列表（公寓、别墅）的轻量级网页界面，设计简洁、用户友好",
          tech: ["ReactJS", "TypeScript", "CSS"],
          link: "https://eng-afraa-saleh.github.io/Flora-website/",
          github: "https://github.com/Eng-Afraa-Saleh/Flora",
          category: "房地产",
          image: flora
        },
        {
          title: "简易电子商店",
          description: "我的第一个项目,用于展示和浏览产品的轻量级电子商务界面。简洁、极简的设计，提供基本的购物体验，无复杂功能。",
          tech: ["HTML", "CSS", "JavaScript"],
          link: "https://eng-afraa-saleh.github.io/AnnaStore/",
          github: "https://github.com/Eng-Afraa-Saleh/AnnaStore",
          category: "电子商务",
          image: annaStore
        },

        {
          title: "教育学术平台",
          description: "我职业生涯中的第一个React项目 - 一个全面的教育网站，展示学院课程、活动、家长评价和教育内容，具有简单流畅的浏览界面。",
          tech: ["ReactJS", "CSS", "JavaScript"],
          link: "https://eng-afraa-saleh.github.io/AcademyWebsite/",
          github: "https://github.com/Eng-Afraa-Saleh/AcademyWebsite",
          category: "学术平台",
          image: academy
        }

      ]
    },
    certificates: {
      title: "资质证书",
      issuedBy: "颁发机构",
      viewCertificate: "查看证书",
      recommendation: "推荐信",
      skillsGained: "获得的技能",
      viewOriginal: "查看原件",
      close: "关闭"
    },
    footer: {
      rights: "版权所有 © 阿芙拉工程师 2026",
      stayConnected: "保持联系"
    },
    chat: {
      title: "阿芙拉的助手",
      welcome: "你好！我该如何帮助你了解更多关于我的工作和技能？",
      placeholder: "在这里输入您的消息...",
      suggested1: "你的核心技能是什么？",
      suggested2: "告诉我关于你的项目。",
      suggested3: "我该如何联系你？",
      online: "在线"
    }
  }


};

export const certificateData: CertificateItem[] = [
  {
    title: "Web Development | Front-end [React Advanced]",
    issuer: "Focal X",
    date: "2025",
    image: focalXcertification,
    recommendation: "I am writing to recommend Afraa Malek Saleh She successfully completed a four-month training program in Web Development | Front-end Lvl.2 from April 2025 to September 2025. Afraa is a motivated individual with a passion for Web Development | Front-end Lvl.2 . She demonstrated exceptional creativity, attention to detail, technical expertise, teamwork, and adaptability during the program.Afraa would be a valuable asset to your company. She has the skills and work ethic to thrive in digital marketing front-end. I highly recommend her for employment and encourage you to consider her application Please feel free to contact me if you require further information about Afraa Malek Saleh's qualifications and performance. Thank You",
    skills: ["React Advanced", "State Management", "Performance Optimization", "API Integration", "Testing"],
    file: Recommendation,

  },
  {
    title: "Building Web Applications with Next.js",
    issuer: "M3aarf",
    date: "2026",
    image: m3arfcertification,
    skills: ["Next.js", "SSR/SSG", "SEO Optimization", "API Routes", "Deployment"],
  }
];
