import Card from "./card";
import competencesData from "@/data/competences.json";

export enum CompetenceType {
  TECHNIQUES = "techniques",
  HUMAINES = "humaines",
}

export enum CompetenceKey {
  // Techniques
  DOCKER = "docker",
  GIT = "git",
  JAVA = "java",
  KUBERNETES = "kubernetes",
  TYPESCRIPT = "typescript",
  // Humaines
  ADAPTABILITE = "adaptabilite",
  ANGLAIS = "anglais",
  AUTONOMIE = "autonomie",
  FLEXIBILITE = "flexibilite",
  PENSEE = "pensee",
}

type CompetenceItem = {
  key: CompetenceKey;
  type: CompetenceType;
};

type Props = {
  title: string;
  competenceType?: CompetenceType;
  competences?: CompetenceItem[];
};

type CompetenceData = {
  [key in CompetenceKey]: {
    logo: string;
    title: string;
    level: number;
    presentation: string[];
    utilisations: string[];
    maitrise: string[];
    formation: string[];
    conseils: string[];
    projet: string[];
    importance: string[];
  };
};

type CompetencesData = {
  [key in CompetenceType]: CompetenceData;
};

export default function CompetenceSection({
  title,
  competenceType,
  competences,
}: Props) {
  const itemsToRender =
    competences ??
    Object.keys(competencesData[competenceType!]).map((key) => ({
      key: key as CompetenceKey,
      type: competenceType!,
    }));

  return (
    <div className="flex flex-col items-center gap-8 mt-12">
      <h2 className="text-xl text-start font-bold mt-8">{title}</h2>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-8 mt-2">
        {itemsToRender.map(({ key, type }) => {
          const competence = (competencesData as CompetencesData)[type][key];
          return (
            <Card
              key={key}
              img={competence.logo}
              titre={competence.title}
              href={`/competences/${type}/${key}`}
              level={competence.level}
            />
          );
        })}
      </div>
    </div>
  );
}
