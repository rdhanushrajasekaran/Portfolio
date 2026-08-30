export interface TechCategory {
  id: string;
  label: string;
  items: string[];
}

export const technologies: TechCategory[] = [
  {
    id: 'programming',
    label: 'Programming',
    items: ['C#', '.NET', 'Python', 'Lua', 'C/C++'],
  },
  {
    id: 'desktop',
    label: 'Desktop Applications',
    items: ['WPF', '.NET Desktop Applications', 'Windows Applications'],
  },
  {
    id: 'industrial',
    label: 'Industrial Systems',
    items: ['PLC', 'Modbus', 'Machine Communication', 'Industrial Integration'],
  },
  {
    id: 'databases',
    label: 'Databases',
    items: ['SQL Server', 'MySQL'],
  },
  {
    id: 'ai',
    label: 'AI',
    items: ['LLM', 'Ollama', 'RAG', 'AI Applications'],
  },
  {
    id: 'web',
    label: 'Web',
    items: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    id: 'tools',
    label: 'Development Tools',
    items: ['Visual Studio', 'VS Code', 'Git', 'GitHub'],
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description:
      'Understand the machine, product, process or business problem.',
  },
  {
    number: '02',
    title: 'Analyze',
    description:
      'Study workflows, signals, communication requirements, data and edge cases.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Design the software architecture, UI, communication layer and data model.',
  },
  {
    number: '04',
    title: 'Develop',
    description: 'Build the application and required integrations.',
  },
  {
    number: '05',
    title: 'Test',
    description:
      'Validate functionality, communication, data integrity and machine behavior.',
  },
  {
    number: '06',
    title: 'Deliver',
    description:
      'Deploy the solution and provide required documentation/support.',
  },
];

export interface WhoIHelp {
  icon: string;
  title: string;
  description: string;
}

export const whoIHelp = [
  {
    icon: 'Factory',
    title: 'Machine Builders',
    description: 'Custom software for industrial machines.',
  },
  {
    icon: 'Cpu',
    title: 'Automation Companies',
    description: 'Software and PLC integration.',
  },
  {
    icon: 'Building2',
    title: 'Manufacturers',
    description: 'Production monitoring and traceability.',
  },
  {
    icon: 'Users',
    title: 'Engineering Teams',
    description: 'Custom tools for engineering workflows.',
  },
  {
    icon: 'Package',
    title: 'Product Companies',
    description: 'Software solutions around physical products.',
  },
];

export interface WhyMe {
  title: string;
  description: string;
}

export const whyMe = [
  {
    title: 'Engineering First',
    description:
      'I focus on understanding the actual machine or process before designing the software.',
  },
  {
    title: 'Custom Built',
    description:
      'The software is developed around your workflow instead of forcing your workflow into a generic product.',
  },
  {
    title: 'Software + Automation',
    description:
      'I can work across application software, industrial communication and production data systems.',
  },
  {
    title: 'Structured Data',
    description:
      'Machine and production information can be captured in a structured and traceable way.',
  },
  {
    title: 'Scalable Architecture',
    description:
      'Solutions can be structured so additional machines, processes and features can be introduced later.',
  },
];

export const problemFlow = [
  'Manual Process',
  'Repetitive Work',
  'Human Error',
  'Data Scattered Across Systems',
  'Difficult Monitoring',
];

export const solutionFlow = [
  'Custom Application',
  'Machine Integration',
  'Database',
  'Monitoring',
];
