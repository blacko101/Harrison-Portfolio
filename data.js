// ─── PORTFOLIO DATA ──────────────────────────────────────────────────────────
// Edit this file to update content across the entire site.

export const personal = {
  name:     'Harrison Nana Kweku Agyako',
  shortName:'Kweku Agyako',
  initials: 'KA',
  roles: [
    'CS Student @ Central University',
    'Flutter Developer',
    'Python Programmer',
    'Cybersecurity Enthusiast',
  ],
  bio: 'I am a self-driven computer science undergraduate passionate about crafting innovative software solutions. Skilled in Python and Flutter programming, I excel at solving algorithmic challenges, building cross-platform applications, and ensuring system security. I thrive in fast-paced environments and am dedicated to creating impactful, secure solutions.',
  email:    'agyakoharrison@gmail.com',
  github:   'https://github.com/blacko101',
  linkedin: 'https://linkedin.com/in/harrison-agyako-13a2032ba/',
  phone:    '0596119216',
  location: 'Accra, Ghana',
}

export const education = [
  {
    degree: 'BSc in Computer Science',
    school: 'Central University',
    years:  '2023 – 2026',
    icon:   '🎓',
  },
  {
    degree: 'General Science',
    school: 'Forces Senior High & Technical School',
    years:  '2019 – 2022',
    icon:   '📚',
  },
]

export const skills = [
  { name: 'Python',                       level: 90, category: 'Core'           },
  { name: 'Flutter / Dart',               level: 90, category: 'Mobile/Web'     },
  { name: 'HTML & CSS',                   level: 85, category: 'Frontend'       },
  { name: 'MySQL',                         level: 80, category: 'Database'       },
  { name: 'Cybersecurity Fundamentals',   level: 75, category: 'Security'       },
  { name: 'Networking / Router Config',   level: 75, category: 'Infrastructure' },
]

export const projects = [
  {
    title:       'Smart Attendance App',
    description: 'A cross-platform online attendance application. Features a mobile version for students and a web version for administrators (Dean, Faculty Officer, IT). Utilizes geo-fencing, facial recognition, QR codes, and 6-digit codes for secure class sign-ins.',
    tags:        ['Flutter', 'Node.js', 'Express.js', 'NoSQL', 'Geo-fencing', 'Facial Recognition'],
    icon:        '📍',
    color:       '#6C63FF',
    featured:    true,
    github:      null,
    demo:        null,
  },
  {
    title:       'Taxpayer Geomapping Web App',
    description: 'Developed for the Ghana Revenue Authority to enhance field operations. Enables officers to locate taxpayers using an API resolver to retrieve GPS addresses via Google Maps API. Facilitates live data modifications and data cleaning.',
    tags:        ['Web App', 'Geolocation', 'Google Maps API', 'API Integration'],
    icon:        '🗺️',
    color:       '#00F5FF',
    featured:    true,
    github:      null,
    demo:        null,
  },
]

export const experience = [
  {
    role:        'Intern — Head User & IT Support Unit',
    company:     'Ghana Revenue Authority · VAT House',
    date:        'Jul 2025 – Aug 2025',
    description: 'Configured software, integrated PCs into the GRA domain for centralized management, and troubleshooted hardware/software issues including blue screens and faulty hard disks.',
    icon:        '🖥️',
  },
  {
    role:        'Intern — Directorate of Information Technology',
    company:     'General Headquarters · Burma-Camp',
    date:        'Aug 2025 – Sep 2025',
    description: 'Laid network cables from the server room to various offices and gained hands-on experience in router configurations and cable termination.',
    icon:        '🌐',
  },
  {
    role:        'Intern — Registration Unit',
    company:     'Ghana Revenue Authority · Achimota TSC',
    date:        'Aug 2024 – Oct 2024',
    description: 'Managed taxpayer registration/deregistration, audited taxpayer accounts for compliance, and participated in large-scale data cleaning initiatives.',
    icon:        '📋',
  },
]

export const certifications = [
  { name: 'AI Career Essentials',                      issuer: 'ALX',                    icon: '🤖' },
  { name: 'Ethical Hacking Essentials (EHE)',          issuer: 'EC-Council',              icon: '🔐' },
  { name: 'Introduction to Cybersecurity',             issuer: 'Great Learning',          icon: '🛡️' },
  { name: 'Data Science & Analytics Summer Bootcamp',  issuer: 'University of Calgary',   icon: '📊' },
]
