export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  problem: string;
  analysis: string;
  solution: string;
  architecture: string;
  result: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  confidentialityNote: string;
  flow: { label: string; sub?: string }[];
}

export const projects: Project[] = [
  {
    slug: 'autoscrewing',
    number: '01',
    title: 'AutoScrewing',
    subtitle: 'Automated Production Software',
    category: 'Industrial Automation / Production Software',
    shortDescription:
      'A custom industrial software system connecting machine activity with production tracking, operator monitoring and database logging.',
    problem:
      'Production processes requiring screw tightening and process tracking need reliable software to monitor machine activity, capture production information and maintain traceability.',
    analysis:
      'The system needed to interface with a PLC to read screw-tightening sequences in real time, capture torque and angle data per operation, associate each cycle with a serial number and operator, and persist everything to a database for full production traceability.',
    solution:
      'A custom industrial software system designed to connect machine activity with production tracking, operator monitoring and database logging. The application communicates with the PLC over Modbus, validates each step of the screw sequence, records process parameters and writes structured records to SQL Server.',
    architecture:
      'PLC (Modbus) → Custom Application (C# / .NET / WPF) → SQL Server → Operator Dashboard',
    result:
      'Provided centralized monitoring of the screw-tightening process and enabled structured production data collection with full traceability.',
    technologies: ['C#', '.NET', 'WPF', 'PLC', 'Modbus', 'SQL Server'],
    features: [
      'Screw sequence monitoring',
      'Machine status',
      'Torque/angle information',
      'Production logging',
      'Serial number tracking',
      'Operator interface',
      'Traceability',
      'Diagnostics',
    ],
    challenges: [
      'Real-time PLC signal synchronization',
      'Reliable torque/angle capture under production speed',
      'Associating each cycle with the correct serial number and operator',
      'Maintaining data integrity across shifts',
    ],
    confidentialityNote:
      'Technical details shown here are intentionally generalized to protect confidential industrial information.',
    flow: [
      { label: 'PLC', sub: 'Screw Sequence' },
      { label: 'Modbus', sub: 'Signals' },
      { label: 'Custom App', sub: 'C# / WPF' },
      { label: 'SQL Server', sub: 'Records' },
      { label: 'Dashboard', sub: 'Traceability' },
    ],
  },
  {
    slug: '3d-wall',
    number: '02',
    title: '3D WALL',
    subtitle: 'Video Driven Dynamic 3D Display',
    category: 'Industrial Innovation / PLC Integration',
    shortDescription:
      'Converts visual information from video/images into motion values and continuously communicates them to a PLC so a physical 3D wall reproduces dynamic visual patterns.',
    problem:
      'A physical 3D wall made of individually actuated elements needed to reproduce dynamic visual patterns from video input in real time, requiring tight synchronization between computer vision, motion computation and industrial control.',
    analysis:
      'The core challenge was translating pixel-based visual information into physical motion values for many elements, then continuously communicating those values to a PLC with low enough latency that the wall appeared to move with the source video.',
    solution:
      'A software pipeline that ingests video or images, extracts visual information using computer vision, computes motion values for each physical element, and continuously streams those values to the PLC over an industrial communication link so the physical 3D wall reproduces the dynamic pattern.',
    architecture:
      'Video → Computer Vision (Python) → Motion Values → Custom App (C#) → PLC → Physical 3D Wall',
    result:
      'Demonstrated synchronized translation of video into physical motion across a multi-element actuated surface.',
    technologies: ['C#', 'Python', 'PLC', 'Computer Vision', 'Industrial Communication'],
    features: [
      'Video-to-motion translation',
      'Real-time PLC communication',
      'Multi-element synchronization',
      'Computer vision pipeline',
      'Custom motion mapping',
      'Live pattern reproduction',
    ],
    challenges: [
      'Translating visual information into physical motion',
      'Real-time communication with the PLC',
      'Synchronizing software and hardware across many elements',
      'Controlling many physical elements simultaneously',
      'Validating system behavior end to end',
    ],
    confidentialityNote:
      'Certain implementation details are omitted because the project involves proprietary industrial systems.',
    flow: [
      { label: 'Video', sub: 'Input' },
      { label: 'Vision', sub: 'Python' },
      { label: 'Motion', sub: 'Values' },
      { label: 'PLC', sub: 'Control' },
      { label: '3D Wall', sub: 'Physical' },
    ],
  },
  {
    slug: 'delta-robot-ai',
    number: '03',
    title: 'Delta Robot Programming AI',
    subtitle: 'AI-Assisted Robot Program Generation',
    category: 'AI / Robotics / Engineering Software',
    shortDescription:
      'An intelligent engineering platform designed to assist with generating and validating programs for Delta robot applications.',
    problem:
      'Generating and validating programs for Delta robot applications is a specialized, time-consuming engineering task that benefits from intelligent assistance to reduce iteration cycles and catch errors early.',
    analysis:
      'The platform needed to accept natural-language engineering requirements, produce a valid robot program representation, validate it against robot-specific logic, detect errors and repair them, and finally output a program ready for simulation or execution.',
    solution:
      'An AI-assisted engineering platform that takes an engineering requirement, uses an LLM for planning and program generation, validates the generated program, detects and repairs errors, and produces a robot program representation for simulation or execution.',
    architecture:
      'Engineering Requirement → AI Planning (LLM) → Program Representation → Validation → Robot Program → Simulation / Execution',
    result:
      'Provided an intelligent assistant for generating and validating Delta robot programs from engineering requirements.',
    technologies: ['C#', 'Python', 'AI', 'LLM', 'Ollama', 'Robot Programming'],
    features: [
      'Natural language engineering input',
      'Program generation',
      'Validation',
      'Error detection',
      'Program repair',
      'Robot-specific logic',
    ],
    challenges: [
      'Mapping natural-language requirements to valid robot logic',
      'Ensuring generated programs satisfy robot-specific constraints',
      'Detecting and repairing invalid program structures',
      'Keeping the AI pipeline reliable and reproducible',
    ],
    confidentialityNote:
      'This is an engineering software concept; no real-world production deployment is claimed unless explicitly provided.',
    flow: [
      { label: 'Requirement', sub: 'Natural Language' },
      { label: 'AI Planning', sub: 'LLM' },
      { label: 'Program', sub: 'Representation' },
      { label: 'Validation', sub: 'Check' },
      { label: 'Robot', sub: 'Simulation' },
    ],
  },
];
