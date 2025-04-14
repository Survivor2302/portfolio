import { notFound } from "next/navigation";

// Interface pour la structure d'une réalisation
interface RealisationData {
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
    techniques: CompetenceKey[];
    humaines: CompetenceKey[];
  };
}

interface RealisationsData {
  [id: string]: RealisationData;
}

import realisationsData from "@/data/realisations.json";
const typedRealisationsData = realisationsData as RealisationsData;
import Realisations from "@/components/realisations";
import { CompetenceKey } from "@/components/CompetenceSection";

export function generateStaticParams() {
  return Object.keys(realisationsData).map((id) => ({ id }));
}

export default async function RealisationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  if (!typedRealisationsData[id]) {
    return notFound();
  }

  const realisation = typedRealisationsData[id] as RealisationData;

  return (
    <main className="scroll-smooth overflow-auto mb-28">
      <section className="pt-36 pb-24 md:px-28 px-8 ">
        <Realisations
          img={realisation.img}
          title={realisation.titre}
          content={realisation.content}
          associatedCompetences={realisation.associatedCompetences}
        />
      </section>
    </main>
  );
}
