import {
  Monitor,
  Cpu,
  Database,
  LayoutDashboard,
  Wrench,
  BrainCircuit,
} from 'lucide-react';

export interface Service {
  id: string;
  icon: typeof Monitor;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'machine-software',
    icon: Monitor,
    title: 'Custom Machine Software',
    description:
      'Software applications designed specifically for industrial machines and equipment.',
    features: [
      'Machine interfaces',
      'Operator applications',
      'Machine monitoring',
      'Configuration software',
      'Diagnostic tools',
      'Production control applications',
    ],
  },
  {
    id: 'plc-automation',
    icon: Cpu,
    title: 'PLC & Automation Integration',
    description:
      'Connect industrial controllers and machine processes with reliable custom software.',
    features: [
      'PLC communication',
      'Modbus',
      'Machine signals',
      'State monitoring',
      'Handshakes',
      'Device communication',
      'PC-based machine applications',
    ],
  },
  {
    id: 'production-traceability',
    icon: Database,
    title: 'Production & Traceability Systems',
    description:
      'Capture, track and manage production information in a structured system.',
    features: [
      'Serial number tracking',
      'Production records',
      'Process data',
      'Torque/angle data',
      'Machine status',
      'Production history',
      'Traceability',
    ],
  },
  {
    id: 'engineering-apps',
    icon: Wrench,
    title: 'Engineering Applications',
    description:
      'Convert repetitive engineering processes into dedicated software tools.',
    features: [
      'Configuration tools',
      'Engineering utilities',
      'Diagnostics',
      'Automation utilities',
      'Data processing',
      'Workflow automation',
    ],
  },
  {
    id: 'dashboards',
    icon: LayoutDashboard,
    title: 'Manufacturing Dashboards',
    description:
      'Real-time dashboards that transform machine and production data into useful information.',
    features: [
      'Machine status',
      'Production monitoring',
      'KPIs',
      'Charts',
      'Historical data',
      'Reports',
      'Alerts',
    ],
  },
  {
    id: 'ai-applications',
    icon: BrainCircuit,
    title: 'AI-Powered Engineering Software',
    description:
      'Practical AI applications designed around engineering and business workflows.',
    features: [
      'Engineering assistants',
      'AI automation',
      'Intelligent software tools',
      'Document processing',
      'AI-powered workflows',
      'Local LLM applications',
    ],
  },
];
