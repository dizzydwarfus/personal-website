export interface Education {
  school: string;
  degree: string;
  started: string;
  graduated: string;
  description?: string;
  logo?: string;
}

export interface Role {
  title: string;
  years: string;
  bulletPoints: string[];
}

export interface Experience {
  company: string;
  roles: Role[];
  location: string;
  logo?: string;
}

export interface Skill {
  name: string;
  roles?: string[];
  projects?: string[];
  logo?: string;
}

export interface Language {
  name: string;
  level: string;
  countryCode: string;
}

export interface Project {
  name: string;
  timeframe?: string;
  techStack?: string[];
  bulletPoints: string[];
  imageUrl?: string;
  repoLink?: string;
  liveLink?: string;
}

export interface Hobby {
  name: string;
  icon?: string;
  level?: string;
  description?: string;
}

export interface Value {
  name: string;
  icon?: string;
  description?: string;
}

export interface Milestone {
  year: string;
  title: string;
  lessons?: string[];
}

export interface ResumeData {
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  languages: Language[];
  projects: Project[];
}

export interface Details {
  experience?: Experience[];
  education?: Education[];
  projects?: Project[];
  hobbies?: Hobby[];
  values?: Value[];
  milestones?: Milestone[];
}

export interface Segment {
  id: string;
  title: string;
  image: string;
  width: number;
  height: number;
  description: string;
  details?: Details;
  resumeKey?: string;
}

// Anecdotes Section
export interface StarCategory {
  category: string;
  details: StarAnecdote[];
}
export interface StarAnecdote {
  title: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  reflection: string;
  type?: string;
}
