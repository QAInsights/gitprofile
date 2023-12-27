// gitprofile.config.js

const config = {
  github: {
    username: 'qainsights', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'naveenkumarn',
    twitter: 'qainsights',
    //mastodon: 'arifszn@mastodon.social',
    facebook: '',
    instagram: '',
    youtube: 'qainsights', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    //medium: 'arifszn',
    dev: 'qainsights',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://qainsights.com',
    contact: 'https://book.qainsights.com',
    phone: '',
    email: 'naveenkumar@qain.si',
  },
  resume: {
    fileUrl: 'https://app.rezi.ai/s/25E51vcqnwTJb4pPvAKR', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Bash',
    'Linux',
    'Git',
    'Observability',
    'Chaos Engineering',
    'Docker',
    'JMeter',
    'LoadRunner',
    'k6',
    'Locust',
  ],
  experiences: [
    {
      company: 'Salesforce',
      position: 'Performance Engineer',
      from: 'October 2021',
      to: 'Present',
      companyLink: 'https://salesforce.com',
    },
    {
      company: 'Ascendum Solutions',
      position: 'Performance Engineer',
      from: 'July 2019',
      to: 'October 2021',
      companyLink: 'https://ascendum.com',
    },
    {
      company: 'Kaplan',
      position: 'Performance Engineer',
      from: 'Apr 2019',
      to: 'Jul 2019',
      companyLink: 'https://kaplan.com',
    },
    {
      company: 'Infosys',
      position: 'Performance Engineer',
      from: 'September 2006',
      to: 'April 2019',
      companyLink: 'https://infosys.com',
    },
  ],
   certifications: [
    {
      name: 'Certified Ethical Hacker (CEH)',
      body: '',
      year: 'March 2023',
      link: '',
    },
    {
      name: 'Certified Kubernetes Application Developer (CKAD)',
      body: '',
      year: 'Jul 2023',
      link: 'https://qain.si/ckad',
    },
    {
      name: 'AWS Solution Architect Associate',
      body: '',
      year: 'October 2020',
      link: '',
    },
  ],
  education: [
    {
      institution: 'Western Governors University',
      degree: 'Masters in Cybersecurity and Quality Assurance',
      from: '2022',
      to: '2023',
    },
    {
      institution: 'Bharathiyar University',
      degree: 'Masters in Political Science and Public Administration',
      from: '2008',
      to: '2010',
    },
    {
      institution: 'PSG College of Technology',
      degree: 'Bachelors in Applied Science',
      from: '2006',
      to: '2003',
    },
    {
      institution: 'Devanga High School',
      degree: 'High School',
      from: '2003',
      to: '1991',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'PerfGPT',
      description: 'AI tools designed for performance testing and engineering.',
      imageUrl: 'https://www.perfgpt.ai/img/perfGPT-logo.svg',
      link: 'https://www.perfgpt.ai/',
    },
    {
      title: 'Kel',
      description:
        'AI assistant for the CLI. Supports OpenAI, Anthropic, Ollama, Google, and more.',
      imageUrl: 'https://kel.qainsights.com/img/logo.svg',
      link: 'https://kel.qainsights.com',
    },
    {
      title: 'Hamster',
      description: 'Powerful JMeter launcher for Mac and Windows',
      imageUrl: 'https://hamster.qainsights.com/img/hamster.png',
      link: 'https://hamster.qainsights.com',
    },
    {
      title: 'JMeter Docker Extension',
      description: 'Execute JMeter tests in Docker Desktop',
      imageUrl:
        'https://desktop.docker.com/extensions/qainsights_jmeter-docker-extension/raw_githubusercontent_com/QAInsights/jmeter-docker-extension/main/feather.svg',
      link: 'https://hub.docker.com/extensions/qainsights/jmeter-docker-extension',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'qainsights', // to hide blog section, keep it empty
    limit: 4, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      // 'cupcake',
      // 'bumblebee',
      // 'emerald',
      'corporate',
      'synthwave',
      // 'retro',
      // 'cyberpunk',
      // 'valentine',
      // 'halloween',
      // 'garden',
      // 'forest',
      // 'aqua',
      // 'lofi',
      // 'pastel',
      // 'fantasy',
      // 'wireframe',
      // 'black',
      // 'luxury',
      'dracula',
      // 'cmyk',
      // 'autumn',
      // 'business',
      // 'acid',
      'lemonade',
      // 'night',
      // 'coffee',
      // 'winter',
      // 'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `©️ NaveenKumar Namachivayam - <a 
  class="text-primary"
  href="https://qainsights.com"
  target="_blank"
  rel="noreferrer">
  QAInsights.com</a>`,
};

export default config;
