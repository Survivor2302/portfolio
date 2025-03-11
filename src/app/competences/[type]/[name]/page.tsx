import Competences from "@/components/competences";
import { notFound } from "next/navigation";

// Define the structure of a single competence
interface Competence {
  logo: string;
  title: string;
  presentation: string[];
  utilisations: string[];
  maitrise: string[];
  formation: string[];
  conseils: string[];
  projet: string[];
  importance: string[];
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
  const competencesDataTyped = competencesData as CompetencesData;

  for (const type in competencesDataTyped) {
    for (const name in competencesDataTyped[type as keyof CompetencesData]) {
      params.push({ type, name });
    }
  }

  return params;
}

export default function CompetencePage({
  params,
}: {
  params: { type: CompetenceType; name: CompetenceName };
}) {
  const { type, name } = params;

  if (
    !competencesData[type] ||
    !(competencesData[type] as Record<string, Competence>)[name]
  ) {
    return notFound();
  }

  const competence = (competencesData[type] as Record<string, Competence>)[
    name
  ];

  return (
    <main className="md:px-28 px-8">
      <Competences
        logo={competence.logo}
        title={competence.title}
        presentation={competence.presentation}
        utilisations={competence.utilisations}
        maitrise={competence.maitrise}
        formation={competence.formation}
        conseils={competence.conseils}
        projet={competence.projet}
        importance={competence.importance}
      />
    </main>
  );
}
