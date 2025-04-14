import Competences from "@/components/competences";
import { notFound } from "next/navigation";

// Define the structure of a single competence
interface Competence {
  logo: string;
  title: string;
  level: number;
  content: {
    presentation: string;
    utilisations: string;
    maitrise: string;
    formation: string;
    conseils: string;
    projet: string;
    importance: string;
  };
}

// Define the structure of the competences data
interface CompetencesData {
  techniques: Record<string, Competence>;
  humaines: Record<string, Competence>;
}

import competencesData from "@/data/competences.json";

// Define enums for competence types and names
enum CompetenceType {
  Techniques = "techniques",
  Humaines = "humaines",
}

enum CompetenceName {
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

export function generateStaticParams() {
  const params = [];
  const competencesDataTyped = competencesData as unknown as CompetencesData;

  for (const type in competencesDataTyped) {
    for (const name in competencesDataTyped[type as keyof CompetencesData]) {
      params.push({ type, name });
    }
  }

  return params;
}

export default async function CompetencePage({
  params,
}: {
  params: Promise<{ type: CompetenceType; name: CompetenceName }>;
}) {
  const resolvedParams = await params;
  const { type, name } = resolvedParams;

  const competencesDataTyped = competencesData as unknown as CompetencesData;

  if (!competencesDataTyped[type] || !competencesDataTyped[type][name]) {
    return notFound();
  }

  const competence = competencesDataTyped[type][name];

  return (
    <main className="md:px-28 px-8">
      <Competences competence={competence} />
    </main>
  );
}
