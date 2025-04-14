// Types pour les compétences
export interface Competence {
  logo: string;
  title: string;
  level: number;
  associatedRealisations: string[];
  content: {
    definition: string;
    exemplesConcrets: Record<string, string>;
    autocritique: string;
    evolution: string;
  };
}

export interface CompetencesData {
  techniques: Record<string, Competence>;
  humaines: Record<string, Competence>;
}

// Types pour les réalisations
export interface Realisation {
  titre: string;
  img: string;
  previewPicture: string;
  preview: string;
  description: string;
  content: {
    missions: string;
    role: string;
    technologies: string;
    client: string;
    objectif: string;
    galerie: string;
    processus: string;
    conclusions: string;
  };
  associatedCompetences: {
    techniques: string[];
    humaines: string[];
  };
}

export interface RealisationsData {
  [key: string]: Realisation;
}

// Enums pour les compétences
export enum CompetenceType {
  Techniques = "techniques",
  Humaines = "humaines",
}

export enum CompetenceName {
  Docker = "docker",
  Git = "git",
  Java = "java",
  Kubernetes = "kubernetes",
  TypeScript = "typescript",
  Adaptabilite = "adaptabilite",
  Anglais = "anglais",
  Autonomie = "autonomie",
  Flexibilite = "flexibilite",
  Pensee = "pensee",
} 