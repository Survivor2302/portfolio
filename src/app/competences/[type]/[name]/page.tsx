import { notFound } from "next/navigation";
import { CompetenceType, CompetenceName, CompetencesData } from "@/types";
import competencesData from "@/data/competences.json";
import CompetenceDetails from "@/components/competences/CompetenceDetails";

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
      <CompetenceDetails competence={competence} />
    </main>
  );
}
