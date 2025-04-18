"use client";

import {
  Briefcase,
  Lightbulb,
  LineChart,
  Target,
  GitBranch,
} from "lucide-react";
import Image from "next/image";
import { CompetenceName, CompetenceType, Realisation } from "@/types";
import CompetenceSection from "../competences/CompetenceSection";

type Props = {
  realisation: Realisation;
};

export default function RealisationDetails({ realisation }: Props) {
  return (
    <section className="my-24">
      {/* Hero section */}
      <div className="relative w-full h-64 md:h-96 mb-16 rounded-xl overflow-hidden">
        <Image
          src={realisation.previewPicture || realisation.img}
          alt={realisation.titre}
          fill
          className="object-contain"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
          <div className="p-6 md:p-10 w-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 md:w-20 md:h-20 relative bg-white rounded-full p-2">
                <Image
                  src={realisation.img}
                  alt={realisation.titre}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                {realisation.titre}
              </h1>
            </div>
            <p className="text-white/90 text-lg max-w-3xl">
              {realisation.description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Définition */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="text-pink-light" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent">
              Vue d&apos;ensemble
            </h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>{realisation.content.definition}</p>
          </div>
        </div>

        {/* Exemples concrets */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Lightbulb className="text-pink-light" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent">
              Fonctionnalités clés
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            {Object.entries(realisation.content.exemplesConcrets).map(
              ([key, value], index) => (
                <div
                  key={key}
                  className="bg-gradient-to-br from-pink-light/5 to-purple-light/5 rounded-xl p-6 hover:shadow-lg transition-shadow border border-pink-light/10"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-pink-light to-purple-light rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-center leading-none">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-pink-light">
                      {key}
                    </h3>
                  </div>
                  <p className="text-gray-700">{value}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Autocritique */}
        <div className="mb-16 bg-gradient-to-r from-pink-light/10 to-purple-light/10 rounded-xl p-8">
          <div className="flex items-center gap-2 mb-6">
            <LineChart className="text-pink-light" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent">
              Rétrospective technique
            </h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>{realisation.content.autocritique}</p>
          </div>
        </div>

        {/* Évolution */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <GitBranch className="text-pink-light" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent">
              Perspectives d&apos;évolution
            </h2>
          </div>
          <div className="bg-gradient-to-br from-purple-light/5 to-pink-light/5 rounded-xl p-8 border-l-4 border-purple-light">
            <p className="text-gray-700">{realisation.content.evolution}</p>
          </div>
        </div>

        {/* Compétences */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Target className="text-pink-light" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent">
              Compétences mobilisées
            </h2>
          </div>
          <CompetenceSection
            title=""
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
    </section>
  );
}
