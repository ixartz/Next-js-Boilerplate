import { DASHBOARD } from '@/routes';

export const DOWNLOAD_PDF_ITEMS = [
  {
    label: 'DOCX',
    onclick: () => alert('Its working'),
  },
  {
    label: 'XLSX',
    link: '/',
  },
  {
    label: 'CSV',
    link: '/',
  },
  {
    label: 'PNG',
    link: '/',
  },
];

export const SIDEBAR_LINKS = [
  {
    label: 'Chat UI',
    path: DASHBOARD.CHAT_UI,
    targetSegment: 'chat-ui',
    icon: '/assets/webp/chatIcon.webp',
  },
  {
    label: 'Prompts',
    path: DASHBOARD.PROMPTS,
    targetSegment: 'prompts',
    icon: '/assets/webp/promptIcon.webp',
  },
  {
    label: 'My Conversations',
    path: DASHBOARD.CONVERSATIONS,
    targetSegment: 'converstions',
    icon: '/assets/webp/conversionIcon.webp',
  },
  {
    label: 'Integrations',
    path: DASHBOARD.INTEGERATIONS,
    targetSegment: 'integrations',
    icon: '/assets/webp/integrationIcon.webp',
  },
  {
    label: 'Template Management',
    path: DASHBOARD.TEMPLATES,
    targetSegment: 'templates',
    icon: '/assets/webp/templateIcon.webp',
  },
];

export const INPUT_RULES = {
  name: {
    required: {
      value: true,
      message: 'Name cannot be empty',
    },
  },
  email: {
    required: {
      value: true,
      message: 'Email cannot be empty',
    },
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Invalid Email',
    },
  },

  password: {
    required: {
      value: true,
      message: 'Password cannot be empty',
    },
    pattern: {
      value: /^(?=.*[A-Z])(?=.*[0-9]).+$/,
      message:
        'Password must contain at least one capital letter and one numeric character',
    },
  },
};
