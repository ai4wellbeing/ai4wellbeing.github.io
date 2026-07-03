import type { ImageMetadata } from 'astro';
import founderPortrait from '../assets/hanlin-cai.jpg';

export const navItems = [
  { label: 'Mission', href: '#mission' },
  { label: 'Focus', href: '#focus' },
  { label: 'Events', href: '#events' },
  { label: 'People', href: '#people' },
  { label: 'Contact', href: '#contact' }
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

export const events = [
  {
    type: 'Reading Group',
    title: 'Responsible LLMs for Human Wellbeing',
    date: 'Coming soon',
    body:
      'A paper-led discussion series on safety, privacy, robustness, and evaluation for wellbeing-oriented AI systems.'
  },
  {
    type: 'Seminar',
    title: 'Edge AI, Resilience, and Community Health',
    date: 'Coming soon',
    body:
      'Research talks connecting efficient AI deployment with trustworthy communication and computing infrastructures.'
  },
  {
    type: 'Workshop',
    title: 'AI for Wellbeing Project Studio',
    date: 'Coming soon',
    body:
      'A hands-on format for forming teams, refining problem statements, and developing responsible AI prototypes.'
  }
];

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

export const projects = [
  {
    title: 'Wellbeing-oriented Edge LLM Systems',
    body:
      'Exploring privacy-preserving, resource-efficient, and resilient LLM deployment for human-centered applications.'
  },
  {
    title: 'Trustworthy AI Evaluation',
    body:
      'Developing evaluation protocols for robustness, safety, privacy, and human benefit in AI-assisted workflows.'
  },
  {
    title: 'Cambridge AI for Good Forum',
    body:
      'A proposed forum series for interdisciplinary discussion on beneficial AI research and responsible deployment.'
  }
];
