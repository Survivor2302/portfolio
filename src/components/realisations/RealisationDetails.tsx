"use client";

import Image from "next/image";
import { CompetenceName, CompetenceType, Realisation } from "@/types";
import CompetenceSection from "../competences/CompetenceSection";

type Props = {
  realisation: Realisation;
};

export default function RealisationDetails({ realisation }: Props) {
  return (
    <div className="flex flex-col items-center gap-8 mb-24">
      <div className="w-32 h-32 relative">
        <Image
          src={realisation.img}
          alt={realisation.titre}
          fill
          className="object-contain"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4">{realisation.titre}</h1>
      <div className="w-full max-w-3xl">
        {Object.entries(realisation.content).map(([key, value]) => (
          <div key={key} className="mb-6">
            <h2 className="text-xl font-semibold mb-2 capitalize">{key}</h2>
            <p className="text-gray-700">{value}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-8">
        <CompetenceSection
          title="Compétences associées"
          competences={[
            ...realisation.associatedCompetences.techniques.map((key) => ({
              key: key as CompetenceName,
              type: CompetenceType.Techniques,
            })),
            ...realisation.associatedCompetences.humaines.map((key) => ({
              key: key as CompetenceName,
              type: CompetenceType.Humaines,
            })),
          ]}
        />
      </div>
    </div>
  );
}
