import type { ImageMetadata } from 'astro';
import founderPortrait from '../assets/hanlin-cai.jpg';

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

export const workshop = {
  title: '1st Cambridge AI for Wellbeing Workshop',
  date: '18 July 2026',
  location: 'University of Cambridge',
  note: 'Venue and full schedule to be announced — register interest to receive updates.',
  summary:
    'Our first workshop brings together three speakers across three frontiers where AI meets human health: AI-driven drug discovery, robotics and embodied intelligence, and biotechnology.',
  speakers: [
    {
      topic: 'AI for Drug Discovery',
      name: 'Rui Wang (王锐)',
      affiliation: 'Global Head of In Silico & AI, Evotec',
      body: 'Leads global in silico and AI discovery work at Evotec; previously Head of AI at AstraZeneca.'
    },
    {
      topic: 'Robotics & Embodied Intelligence',
      name: 'Guangming Wang (王光明)',
      affiliation: 'Assistant Professor, University of Galway',
      body: 'Director of PIRLab and Research Associate at the University of Cambridge, working on robot perception and embodied intelligence.'
    },
    {
      topic: 'Biotech',
      name: 'Yizhou Yu (于一周)',
      affiliation: 'Founder & CEO, Healthspan Biotics',
      body: 'Computational biologist at the Cambridge Stem Cell Institute, working at the interface of computation and human health.'
    }
  ]
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

// Formspree endpoint for the contact form. Endpoint ids are public by nature
// (they appear in the deployed HTML); the recipient address stays private in
// the Formspree dashboard. PUBLIC_CONTACT_FORM_ENDPOINT overrides this.
export const contactFormEndpoint = 'https://formspree.io/f/xzdlyaez';
