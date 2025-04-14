"use client";

import realisationsData from "@/data/realisations.json";
import RealisationCard from "./RealisationCard";
import { RealisationsData } from "@/types";

type Props = {
  realisationIds: string[];
};

export default function AssociatedRealisations({ realisationIds }: Props) {
  const realisations = Object.entries(realisationsData as RealisationsData)
    .filter(([id]) => realisationIds.includes(id))
    .map(([id, data]) => ({ id, ...data }));

  if (realisations.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Réalisations associées
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {realisations.map((realisation) => (
          <RealisationCard key={realisation.id} realisation={realisation} />
        ))}
      </div>
    </div>
  );
}
