import {
  Project,
  SkillCategory,
  ToolkitItem,
  ExperienceItem,
  HackathonItem,
  CertificationItem,
  EducationItem,
} from '../types/portfolio';

export const PERSONAL_INFO = {
  fullName: 'SHUVAM JENA',
  displayName: 'SHUVAM',
  roleTitle: 'DATA ANALYTICS + AI & FULL-STACK DEVELOPER',
  supportingTitle: 'Data & Technology Enthusiast',
  tagline: 'Turning Data Into Insights, Ideas Into Technology.',
  statusBadge: 'Open to Internship & Career Opportunities',
  email: 'shuvamjena149@gmail.com',
  githubUrl: 'https://github.com/shuvam-11',
  linkedinUrl: 'https://www.linkedin.com/in/shuvam-jena-b830b1378',
  instagramUrl: 'https://www.instagram.com/_shuxam.11/',
  university: 'DRIEMS University',
  degree: 'B.Tech',
  branch: 'Computer Science & Engineering (CSE)',
  currentYear: '3rd Year',
  graduationYear: '2028',
  academicDuration: '2024 – 2028',
  location: 'Odisha, India',
  resumeFileName: 'SHUVAM_JENA_Resume.pdf',
  resumePath: '/resume.pdf',
  portraitPath: '/shuvam-profile.png',
  heroDescription:
    'I’m a B.Tech Computer Science student at DRIEMS University specializing in Data Analytics, artificial intelligence, and full-stack development, transforming complex datasets into actionable insights and real-world technology.',
  aboutIntroduction:
    'I’m SHUVAM, a B.Tech Computer Science student at DRIEMS University with a strong interest in Data Analytics, AI, full-stack development, and modern technology. I enjoy transforming raw data into meaningful insights, building interactive dashboards, and developing technology solutions for real-world problems.',
  aboutParagraph1:
    'I’m SHUVAM JENA, a third-year B.Tech Computer Science student at DRIEMS University, graduating in 2028. My primary interest is Data Analytics, where I work with data to discover patterns, create meaningful visualizations, and communicate insights clearly.',
  aboutParagraph2:
    'I also enjoy working with AI and full-stack technologies to transform ideas into practical digital products. Through projects, hackathons, certifications, and hands-on learning, I continue to build my technical and problem-solving skills.',
  contactPrompt:
    'I’m always interested in learning, building meaningful projects, collaborating on ideas, and exploring opportunities in data analytics, AI and technology.',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Data Analytics',
    description: 'Transforming complex data into visual stories and actionable business intelligence',
    iconName: 'BarChart3',
    skills: [
      'Data Analysis',
      'Excel',
      'Power BI',
      'Tableau',
      'Data Visualization',
      'Dashboard Development',
    ],
  },
  {
    title: 'Programming',
    description: 'Core problem-solving and software engineering foundations',
    iconName: 'Code2',
    skills: ['Python', 'C', 'JavaScript'],
  },
  {
    title: 'Database',
    description: 'Structured querying, schema design, and document data models',
    iconName: 'Database',
    skills: ['SQL', 'MongoDB'],
  },
  {
    title: 'Web Development',
    description: 'Modern front-to-back web applications and RESTful backend architectures',
    iconName: 'Globe',
    skills: ['HTML', 'CSS', 'React', 'Node.js', 'Express.js'],
  },
  {
    title: 'AI & Technology',
    description: 'Next-generation intelligent interfaces, LLM workflows, and modern architectures',
    iconName: 'Cpu',
    skills: ['Generative AI', 'Google Gemini API', 'RAG', 'Machine Learning Basics'],
  },
  {
    title: 'Tools & Workflow',
    description: 'Collaborative development and engineering productivity environments',
    iconName: 'Wrench',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
];

export const TOOLKIT_ITEMS: ToolkitItem[] = [
  {
    id: 'sql',
    name: 'SQL',
    role: 'Database Querying & Relational Analysis',
    description: 'Querying, filtering and analyzing structured datasets.',
    highlight: 'Advanced filtering, aggregations, joins, and window analytics on relational schemas.',
    accentColor: 'from-blue-500 to-indigo-600',
    badge: 'Query Engine',
    interactiveType: 'sql',
  },
  {
    id: 'excel',
    name: 'Excel',
    role: 'Spreadsheet Modeling & Reporting',
    description: 'Data cleaning, formulas, pivot tables and analytical reporting.',
    highlight: 'Multi-variable lookups, conditional formatting, structured pivot tables, and data validation.',
    accentColor: 'from-emerald-500 to-teal-600',
    badge: 'Analytical Modeling',
    interactiveType: 'excel',
  },
  {
    id: 'powerbi',
    name: 'Power BI',
    role: 'Business Intelligence & Dashboards',
    description: 'Interactive dashboards, data modeling and business intelligence.',
    highlight: 'Interactive cross-filtering, DAX modeling, drill-down metrics, and executive KPIs.',
    accentColor: 'from-amber-500 to-yellow-600',
    badge: 'BI Reporting',
    interactiveType: 'powerbi',
  },
  {
    id: 'tableau',
    name: 'Tableau',
    role: 'Visual Analytics & Storytelling',
    description: 'Interactive visual analytics and dashboard storytelling.',
    highlight: 'Dynamic calculated fields, dual-axis visual maps, cohort scatter graphs, and story points.',
    accentColor: 'from-sky-500 to-cyan-600',
    badge: 'Visual Analytics',
    interactiveType: 'tableau',
  },
  {
    id: 'python',
    name: 'Python',
    role: 'Data Wrangling & Pipeline Automation',
    description: 'Data manipulation, analysis and automation.',
    highlight: 'Pandas & NumPy data transformations, script automation, and AI API integrations.',
    accentColor: 'from-cyan-500 to-blue-600',
    badge: 'Data Programming',
    interactiveType: 'python',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'bis-sahayak-ai',
    name: 'BIS SAHAYAK AI',
    tagline: 'Bureau of Indian Standards AI Assistant & Guidance System',
    description:
      'An AI-powered assistant designed to help users understand BIS standards, certification, hallmarking, laboratory services, and related information.',
    categories: ['All', 'AI', 'Full-Stack'],
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'Google Gemini API',
      'RAG',
      'Three.js',
    ],
    features: [
      'AI Assistant conversational query engine',
      'Bureau of Indian Standards search & retrieval',
      'Certification guidance workflows',
      'Testing & Laboratory assistance locator',
      'Gold Hallmarking & HUID verification utility',
      'Consumer assistance & awareness portal',
    ],
    concepts: [
      'AI',
      'Gemini API',
      'RAG Retrieval Architecture',
      'Bureau of Indian Standards',
      'Verification Portal',
    ],
    liveUrl: 'https://bis-sahayak-ai-1.vercel.app/',
    isFeatured: true,
    type: 'AI Assistant',
  },
  {
    id: 'urban-pulse-ai',
    name: 'URBAN PULSE AI',
    tagline: 'Every Bus. A Sensor for the City.',
    description:
      'An AI-powered smart urban transportation platform designed to transform transportation data into actionable urban insights.',
    categories: ['All', 'Data Analytics', 'AI', 'Full-Stack'],
    technologies: [
      'AI',
      'Data Analytics',
      'Urban Transportation',
      'Real-Time Data',
      'GPS/GIS',
      'Predictive Analytics',
      'Smart City Technology',
    ],
    features: [
      'Fleet & sensor data ingestion pipeline',
      'Real-time urban transit metrics & map telemetry',
      'Predictive arrival and congestion modeling',
      'Actionable municipal intelligence dashboard',
    ],
    concepts: [
      'AI',
      'Data Analytics',
      'Urban Transportation',
      'Real-Time Data',
      'GPS/GIS',
      'Predictive Analytics',
      'Smart City Technology',
    ],
    liveUrl: 'https://urban-pulse-ai-pink.vercel.app/',
    isFeatured: false,
    type: 'AI Platform',
  },
  {
    id: 'skillsetu-ai',
    name: 'SKILLSETU AI',
    description:
      'An AI-powered learning platform providing personalized skill recommendations and learning paths using Generative AI.',
    categories: ['All', 'AI', 'Full-Stack'],
    technologies: ['React', 'JavaScript', 'Google Gemini AI', 'Tailwind CSS'],
    features: [
      'AI-driven skill recommendations engine',
      'Personalized learning pathways generator',
      'Structured step-by-step curriculum milestones',
      'Interactive AI learning assistance chat',
    ],
    liveUrl: 'https://skillsetu-ai-ten.vercel.app/',
    isFeatured: false,
    type: 'Learning Platform',
  },
  {
    id: 'netflix-data-analysis',
    name: 'NETFLIX DATA ANALYSIS DASHBOARD',
    description:
      'An interactive data analytics dashboard designed to explore Netflix content, genres, countries, release trends and other meaningful patterns within the dataset.',
    categories: ['All', 'Data Analytics', 'Power BI'],
    technologies: ['Power BI', 'Excel', 'Data Analysis', 'Data Visualization'],
    features: [
      'Content distribution analysis across Movies and TV Shows',
      'Genre concentration breakdown & trend discovery',
      'Global country contribution & regional licensing mapping',
      'Historical release year pattern tracking',
    ],
    analyticalAreas: [
      'Content distribution (Movies vs TV Shows)',
      'Genre frequency & clustering',
      'Country of origin geographic distribution',
      'Release trend dynamics over time',
    ],
    isFeatured: false,
    type: 'Power BI Dashboard',
  },
  {
    id: 'hr-analytics-dashboard',
    name: 'HR ANALYTICS DASHBOARD',
    description:
      'An interactive HR analytics dashboard designed to analyze workforce data and identify meaningful patterns across employee metrics.',
    categories: ['All', 'Data Analytics', 'Power BI'],
    technologies: ['Power BI', 'Excel', 'Data Analysis', 'Data Visualization'],
    features: [
      'Employee demographics and gender ratio analysis',
      'Cross-departmental headcount distribution',
      'Attrition pattern identification across tenure bands',
      'Job role breakdown and compensation distribution',
      'Workforce retention trends and promotion velocity',
    ],
    analyticalAreas: [
      'Employee demographics',
      'Department analysis',
      'Attrition analysis',
      'Job roles',
      'Salary analysis',
      'Workforce trends',
    ],
    isFeatured: false,
    type: 'Power BI Dashboard',
  },
  {
    id: 'covid-19-tableau-dashboard',
    name: 'COVID-19 INDIA DASHBOARD USING TABLEAU',
    description:
      'An interactive Tableau dashboard analyzing COVID-19 India pandemic trends, state-wise case trajectories, recovery rates, mortality metrics, and temporal patterns across Indian states and union territories.',
    categories: ['All', 'Data Analytics', 'Tableau'],
    technologies: ['Tableau', 'Data Visualization', 'Data Analysis', 'Dashboard Design', 'Healthcare Analytics'],
    features: [
      'India state-wise case spread & active infection geospatial mapping',
      'Daily confirmed cases and 7-day rolling average trendlines across Indian states',
      'Mortality rate vs. recovery rate state-level comparative analysis',
      'Interactive drill-down filters by state, union territory, and timeline',
      'Multi-dimensional Tableau story points and dynamic parameter controls',
    ],
    analyticalAreas: [
      'State-wise confirmed cases & active infection dynamics',
      'Mortality & recovery rate ratios across Indian states',
      'Daily new cases vs. cumulative trajectory curves in India',
      'Geospatial infection density mapping of Indian states',
      'Comparative state & union territory impact analysis',
    ],
    isFeatured: false,
    type: 'Tableau Dashboard',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    organization: 'CTTC, Bhubaneswar',
    course: 'Data Analytics',
    description:
      'Completed Data Analytics training at CTTC, Bhubaneswar, gaining practical exposure to data analysis, visualization and analytical tools.',
    location: 'Bhubaneswar, Odisha',
    status: 'Completed Training',
    keyLearnings: [
      'Practical exposure to real data analysis workflows and methodologies',
      'Hands-on dashboarding and visual analytics with industry tools',
      'Data preparation, relational querying, and structured evaluation',
    ],
  },
];

export const HACKATHON_DATA: HackathonItem[] = [
  {
    title: 'IIT Bhubaneswar Pravaah’26',
    role: 'Web Hackathon Participant',
    year: '2026',
    description:
      'Participated in Pravaah’26 Web Hackathon at IIT Bhubaneswar, collaborating on software engineering, ideation, and rapid prototype development under competitive hackathon conditions.',
    themes: ['Web Development', 'Rapid Prototyping', 'Teamwork', 'Real-World Problem Solving'],
    badge: 'IIT Bhubaneswar',
  },
  {
    title: 'Smart DRIEMS Hackathon',
    role: 'Hackathon Participant',
    year: '2026',
    description:
      'Engaged in university-wide innovation hackathon focused on engineering technological solutions for institutional and community challenges.',
    themes: ['Innovation', 'Campus Solutions', 'Full-Stack Engineering', 'Collaboration'],
    badge: 'DRIEMS University',
  },
  {
    title: 'Smart India Hackathon (SIH) Initiatives',
    role: 'Project Ideation & Participation',
    year: '2025 – 2026',
    description:
      'Collaborated on Smart India Hackathon problem statements, contributing to system ideation, architectural design, data modeling, and practical prototype building.',
    themes: ['National Problem Statements', 'System Architecture', 'Data Modeling', 'Innovation'],
    badge: 'SIH Initiatives',
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    issuer: 'HP LIFE',
    title: 'Data Science & Analytics Certification',
    category: 'Data Science & Analytics',
    verifiedBadge: 'Verified Certification',
  },
  {
    issuer: 'TCS iON',
    title: 'Career Edge: Young Professional',
    category: 'Professional Development',
    verifiedBadge: 'Verified Certification',
  },
  {
    issuer: 'Deloitte × Forage',
    title: 'Data Analytics Job Simulation',
    category: 'Data Analytics Simulation',
    verifiedBadge: 'Industry Simulation',
  },
  {
    issuer: 'Python Bootcamp',
    title: 'Python Programming Certification',
    category: 'Programming & Logic',
    verifiedBadge: 'Verified Certification',
  },
  {
    issuer: 'IP 360°',
    title: 'Safeguarding Innovation in Startups',
    category: 'Intellectual Property & Innovation',
    verifiedBadge: 'Verified Certification',
  },
  {
    issuer: 'IIT Bhubaneswar Pravaah’26',
    title: 'Web Hackathon Participant',
    category: 'Competitive Hackathon',
    verifiedBadge: 'Hackathon Participant',
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'DRIEMS University',
    degree: 'B.Tech',
    branch: 'Computer Science & Engineering (CSE)',
    duration: '2024 – 2028',
    currentYear: '3rd Year',
    location: 'Cuttack / Bhubaneswar, Odisha',
    highlights: [
      'Core coursework in Data Structures, Database Systems, Computer Networks, and Algorithms',
      'Focused domain specializations in Data Analytics, Business Intelligence, and Artificial Intelligence',
      'Active participant in hackathons, university technical events, and project development',
    ],
  },
];
