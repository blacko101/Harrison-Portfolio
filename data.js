const PORTFOLIO_DATA = {
  personal: {
    name: "Kweku Agyako",
    fullName: "Harrison Nana Kwaku Agyako",
    title: "Computer Scientist",
    roles: [
      "CS Student @ Central University Ghana",
      "Flutter Developer",
      "SETA President",
      "Penetration Tester",
      "ML Engineer",
      "Full-Stack Builder"
    ],
    bio: "BSc Computer Science student at Central University Ghana's School of Engineering & Technology. I build full-stack apps, probe systems for vulnerabilities, and lead students as SETA President. I ship things that matter.",
    email: "kweku.agyako@gmail.com",
    github: "https://github.com/kwekuagyako",
    linkedin: "https://linkedin.com/in/kwekuagyako",
    location: "Accra, Ghana",
    avatar: "KA"
  },

  skills: [
    { name: "Flutter / Dart", level: 90, category: "Mobile" },
    { name: "Python / ML", level: 82, category: "AI/ML" },
    { name: "Node.js / Express", level: 78, category: "Backend" },
    { name: "Penetration Testing", level: 80, category: "Security" },
    { name: "MongoDB", level: 72, category: "Backend" },
    { name: "React / HTML / CSS", level: 75, category: "Frontend" },
    { name: "Linux / Kali", level: 85, category: "Security" },
    { name: "Scikit-learn", level: 76, category: "AI/ML" }
  ],

  projects: [
    {
      id: 1,
      title: "Smart-Attend",
      description: "Geolocation-based student attendance system with face recognition using ML Kit. Full-stack Flutter + Node.js + MongoDB with 2FA security model and live GPS session management.",
      tags: ["Flutter", "Node.js", "MongoDB", "ML Kit", "Geolocation", "2FA"],
      status: "In Development",
      category: "Mobile App",
      icon: "📍",
      color: "#6C63FF",
      github: "https://github.com/kwekuagyako/smart-attend",
      demo: null,
      featured: true,
      year: 2026
    },
    {
      id: 2,
      title: "GPA Forecaster",
      description: "Full-featured Flutter + Supabase GPA tracking and prediction app with multi-scale grading (5.0/4.0/4.3), Riverpod state management, auth guards, and semester-level analytics.",
      tags: ["Flutter", "Supabase", "Riverpod", "GoRouter", "Dart"],
      status: "Completed",
      category: "Mobile App",
      icon: "🎓",
      color: "#00F5FF",
      github: "https://github.com/kwekuagyako/gpa-forecaster",
      demo: null,
      featured: true,
      year: 2026
    },
    {
      id: 3,
      title: "FinBridge",
      description: "AI-powered offline credit and payment platform for Ghana's informal sector. Submitted to the Bank of Ghana FinTech Innovation Challenge. Bridges financial exclusion for the unbanked.",
      tags: ["FinTech", "AI", "Offline-First", "Ghana", "Concept"],
      status: "Concept / Pitched",
      category: "FinTech",
      icon: "🏦",
      color: "#FFB347",
      github: null,
      demo: null,
      featured: true,
      year: 2026
    },
    {
      id: 4,
      title: "Penetration Testing Lab",
      description: "Professional pentest of Metasploitable 2 on Kali Linux using Nmap, Burp Suite & Nikto. Identified vsftpd 2.3.4 backdoor, UnrealIRCd RCE, and open bindshell CVEs with CVSS v3.1 scoring.",
      tags: ["Kali Linux", "Metasploit", "Nmap", "Burp Suite", "CVE", "CVSS"],
      status: "Completed",
      category: "Cybersecurity",
      icon: "🔐",
      color: "#FF6B6B",
      github: null,
      demo: null,
      featured: false,
      year: 2026
    },
    {
      id: 5,
      title: "Ghana Real Estate ML Model",
      description: "Data cleaning, feature engineering pipeline and LinearRegression model for Ghana housing price prediction. Includes code review identifying LabelEncoder misuse and One-Hot Encoding gaps.",
      tags: ["Python", "Scikit-learn", "Pandas", "LinearRegression", "EDA"],
      status: "Completed",
      category: "AI/ML",
      icon: "🏠",
      color: "#4ECDC4",
      github: null,
      demo: null,
      featured: false,
      year: 2026
    },
    {
      id: 6,
      title: "Loan Default Predictor",
      description: "FastAPI + Flutter integration for a Scikit-learn credit risk model. Takes Income, Loan Amount, and Credit Score as inputs, returns risk score and loan verdict in real-time.",
      tags: ["FastAPI", "Flutter", "Scikit-learn", "Python", "ML"],
      status: "Completed",
      category: "AI/ML",
      icon: "💳",
      color: "#A8E6CF",
      github: null,
      demo: null,
      featured: false,
      year: 2026
    }
  ],

  experience: [
    {
      role: "SETA President",
      org: "Central University Ghana – SET Association",
      period: "2025 – Present",
      desc: "Lead the School of Engineering & Technology Association. Coordinate events, draft institutional communications, manage executive elections, and represent students at faculty level."
    },
    {
      role: "IT Support & Registration Officer",
      org: "Ghana Revenue Authority (GRA)",
      period: "2023 – 2024",
      desc: "Handled taxpayer registration, IT support across GRA systems, and data entry workflows. Bridged technical and administrative functions."
    }
  ]
};
