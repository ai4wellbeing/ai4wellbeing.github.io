import type { ImageMetadata } from 'astro';
import founderPortrait from '../assets/hanlin-cai.jpg';
import coFounderPortrait from '../assets/zihao-huang.jpg';
import guangmingWang from '../assets/speaker-guangming-wang.jpg';
import yizhouYu from '../assets/speaker-yizhou-yu.jpg';

export const navItems = [
  { label: 'Main', href: '/' },
  { label: 'Events', href: '/events/' },
  { label: 'People', href: '/people/' },
  { label: 'Contact', href: '/contact/' }
];

export const mission = [
  {
    title: 'AI for Wellbeing',
    body:
      'We connect AI research with practical questions in health, education, resilience, and human flourishing.'
  },
  {
    title: 'Responsible Innovation',
    body:
      'We foreground safety, governance, privacy, robustness, and social impact in the design of intelligent systems.'
  },
  {
    title: 'Interdisciplinary Community',
    body:
      'We convene researchers, builders, clinicians, policy thinkers, and students across technical and human disciplines.'
  }
];

export const focusAreas = [
  {
    title: 'Edge LLMs for Wellbeing',
    body:
      'Efficient, private, and context-aware language models for personal, clinical, and community wellbeing applications.'
  },
  {
    title: 'AI Safety and Resilience',
    body:
      'Attack, defense, robustness, and evaluation methods for AI systems deployed in sensitive human environments.'
  },
  {
    title: 'Digital Mental Health',
    body:
      'Human-centered AI tools that support reflection, early intervention, access, and continuity of care.'
  },
  {
    title: 'AI Governance and Society',
    body:
      'Policy, ethics, and participatory design for responsible AI adoption in institutions and public life.'
  }
];

export interface Speaker {
  topic: string;
  name: string;
  affiliation: string;
  body: string;
  link?: string;
  image?: ImageMetadata;
  /** Renders as an open-call card inviting talk proposals. */
  open?: boolean;
}

export const workshop = {
  title: '1st Cambridge AI for Wellbeing Workshop',
  date: '18 July 2026',
  time: '9:00 – 12:00',
  location: "St John's College, University of Cambridge",
  note: 'Full schedule to be announced — register interest to receive updates.',
  summary:
    'Our first workshop brings together five speakers — from AI-driven drug discovery to machine learning for materials — around a single throughline: trustworthy, usable, and affordable intelligence in the service of health, education, and scientific discovery. One speaking slot remains open.',
  speakers: [
    {
      topic: 'AI for Drug Discovery',
      name: 'Rui Wang · 王锐',
      affiliation: 'EVP, Global Head of In Silico & AI, Evotec',
      body: 'Leads enterprise-scale AI drug discovery at Evotec; previously Head of Data, Analytics and AI at AstraZeneca.',
      link: 'https://uk.linkedin.com/in/ruiwanguk'
    },
    {
      topic: 'Embodied Intelligence',
      name: 'Guangming Wang · 王光明',
      affiliation: 'Assistant Professor, University of Galway · Research Associate, University of Cambridge',
      body: 'Works on embodied intelligence that unites world models with LLM reasoning for robot perception and control.',
      link: 'https://guangmingw.github.io/',
      image: guangmingWang
    },
    {
      topic: 'Bioengineering',
      name: 'Yizhou Yu · 于一周',
      affiliation: 'Founder & CEO, Healthspan Biotics · Cambridge Stem Cell Institute',
      body: 'Develops AI-driven probiotic therapies for neurodegenerative disease as a computational biologist and founder.',
      link: 'https://www.yizhouyu.com/',
      image: yizhouYu
    },
    {
      topic: 'Voice AI',
      name: 'Shilin Gao · 高士琳',
      affiliation: 'PhD, Department of Engineering, University of Cambridge',
      body: 'Builds adaptive spoken-dialogue systems for language learning; formerly Senior ML Engineer at Cambridge University Press & Assessment.',
      link: 'https://uk.linkedin.com/in/shilin-g-155ab593'
    },
    {
      topic: 'ML for Materials',
      name: 'Xin Chen · 陈忻',
      affiliation: 'PhD, Department of Materials Science, University of Cambridge',
      body: 'Applies machine learning to electron-microscopy characterisation in the Electron Microscopy Group.',
      link: 'https://www.emg.msm.cam.ac.uk/People/xin-chen'
    },
    {
      topic: 'Open Call',
      name: 'Your talk could be here.',
      affiliation: 'One speaking slot remains for this edition',
      body: 'Working on trustworthy, efficient, or human-centered AI? Propose a short talk and help complete the program.',
      link: '/contact/',
      open: true
    }
  ] satisfies Speaker[]
};

export const people: {
  name: string;
  role: string;
  body: string;
  image?: ImageMetadata;
  link?: string;
}[] = [
  {
    name: 'Hanlin Cai',
    role: 'Founder / Coordinator',
    body:
      'PhD student in the Internet of Everything Group at the University of Cambridge, Cambridge Trust Scholar. Edge LLMs, LLM networking, attack-defense-resilience.',
    image: founderPortrait,
    link: 'https://caihanlin.com'
  },
  {
    name: 'Zihao Huang',
    role: 'Co-founder',
    body:
      'Researcher at the University of Cambridge working in computational biology and bioinformatics, spanning population genetics and environmental DNA.',
    image: coFounderPortrait,
    link: 'https://www.linkedin.com/in/zihao-huang-248522383'
  },
  {
    name: 'Research Members',
    role: 'Open Call',
    body: 'Students and researchers interested in AI safety, wellbeing, healthcare, education, and society.'
  },
  {
    name: 'Community Partners',
    role: 'Collaboration',
    body: 'Clinicians, technologists, policy researchers, and wellbeing practitioners are welcome to connect.'
  }
];

export const sponsors = [
  {
    name: 'Huawei',
    tier: 'Sponsor',
    logo: '/sponsors/huawei.png',
    height: 74,
    url: 'https://www.huawei.com/en/'
  },
  {
    name: 'Chinese Students and Scholars Association in Cambridge',
    tier: 'Supported by',
    logo: '/sponsors/cssa.png',
    height: 52,
    url: 'https://cssacam.org/'
  }
];

// Formspree endpoint for the contact form. Endpoint ids are public by nature
// (they appear in the deployed HTML); the recipient address stays private in
// the Formspree dashboard. PUBLIC_CONTACT_FORM_ENDPOINT overrides this.
export const contactFormEndpoint = 'https://formspree.io/f/xzdlyaez';
