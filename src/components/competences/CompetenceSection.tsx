import competencesData from "@/data/competences.json";
import CompetenceCard from "./CompetenceCard";
import { CompetenceType, CompetenceName, CompetencesData } from "@/types";

type CompetenceItem = {
  key: CompetenceName;
  type: CompetenceType;
};

type Props = {
  title: string;
  competenceType?: CompetenceType;
  competences?: CompetenceItem[];
};

export default function CompetenceSection({
  title,
  competenceType,
  competences,
}: Props) {
  const itemsToRender =
    competences ??
    Object.keys(competencesData[competenceType!]).map((key) => ({
      key: key as CompetenceName,
      type: competenceType!,
    }));

  return (
    <div className="flex flex-col items-center gap-8 mt-12">
      <h2 className="text-xl text-start font-bold mt-8">{title}</h2>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-8 mt-2">
        {itemsToRender.map(({ key, type }) => {
          const competence = (competencesData as CompetencesData)[type][key];
          return (
            <CompetenceCard
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
