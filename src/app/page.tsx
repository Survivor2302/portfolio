"use client";
import { useRouter } from "next/navigation";
import RealisationPreview from "@/components/realisations/RealisationPreview";
import CompetenceSection from "@/components/competences/CompetenceSection";
import { Code, FolderOpen } from "lucide-react";
import realisationsData from "@/data/realisations.json";
import { CompetenceType } from "@/types";
import Timeline from "@/components/Timeline";
import timelineData from "@/data/timeline.json";
import { useState } from "react";
import About from "@/components/About";

export default function Home() {
  const router = useRouter();
  const [selectedTimeline, setSelectedTimeline] = useState<number | null>(null);

  return (
    <main className="scroll-smooth overflow-auto mb-28">
      <section className="pt-36 pb-24 md:px-28 px-8 bg-gray-50 relative overflow-hidden">
        {/* Formes décoratives */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Cercle rose en haut à gauche */}
          <div className="absolute top-20 -left-10 w-64 h-64 rounded-full bg-gradient-to-r from-pink-light/20 to-purple-light/20 blur-2xl" />

          {/* Cercle violet en bas à droite */}
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gradient-to-r from-purple-light/20 to-pink-light/20 blur-2xl" />

          {/* Cercle central */}
          <div className="absolute top-40 right-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-pink-light/15 to-purple-light/15 blur-2xl" />

          {/* Formes supplémentaires */}
          <div className="absolute top-1/2 left-1/4 w-48 h-48 rotate-45 bg-gradient-to-tr from-pink-light/10 to-purple-light/10 blur-2xl" />

          {/* Forme ondulée */}
          <div className="absolute bottom-20 left-1/3 w-96 h-32 bg-gradient-to-r from-purple-light/15 to-pink-light/15 blur-2xl transform -rotate-12" />
        </div>

        {/* Contenu existant */}
        <div className="relative z-10">
          <h1 className="text-center text-4xl bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent font-bold">
            Étudiant et développeur freelance
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <button
              className="px-6 py-2 flex gap-2 bg-gradient-to-r from-pink-light to-purple-light  text-white  font-bold rounded-md hover:scale-105 transition-all duration-100"
              onClick={() => router.push("/#qui-suis-je")}
            >
              <Code className="w-4" />
              Présentation
            </button>
            <button
              className="px-6 py-2 flex gap-2 bg-gradient-to-r from-pink-light to-purple-light  text-white  font-bold rounded-md hover:scale-105 transition-all duration-100"
              onClick={() => router.push("/#parcours")}
            >
              <Code className="w-4" />
              Parcours
            </button>
            <button
              className="px-6 py-2 flex gap-2 bg-gradient-to-r from-pink-light to-purple-light  text-white  font-bold rounded-md hover:scale-105 transition-all duration-100"
              onClick={() => router.push("/#realisations")}
            >
              <FolderOpen className="w-4" />
              Réalisations
            </button>
            <button
              className="px-6 py-2 flex gap-2 bg-gradient-to-r from-pink-light to-purple-light  text-white  font-bold rounded-md hover:scale-105 transition-all duration-100"
              onClick={() => router.push("/#competences")}
            >
              <Code className="w-4" />
              Compétences
            </button>
          </div>
        </div>
      </section>
      <section id="qui-suis-je" className="mb-24 md:px-28 px-8 pt-24">
        <About />
      </section>

      <hr className="border-0 h-1 bg-gradient-to-r from-pink-light to-purple-light mx-28" />

      <section id="parcours" className="mb-24 md:px-28 px-8 pt-24">
        <h2 className="text-2xl text-center mb-8 font-bold bg-gradient-to-r from-pink-light/80 to-purple-light/80 bg-clip-text text-transparent">
          Parcours
        </h2>
        <Timeline
          items={timelineData}
          selectedIndex={selectedTimeline}
          onSelect={setSelectedTimeline}
        />
        {selectedTimeline !== null &&
          timelineData[selectedTimeline]?.details && (
            <div className="w-full flex justify-center mt-9 animate-fadeIn relative">
              <div className="relative max-w-4xl w-full overflow-hidden rounded-lg">
                {/* Arrière-plan avec motif subtil */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-95"></div>

                {/* Points décoratifs */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #9C27B0 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                ></div>

                {/* Bordure gradient */}
                <div className="p-[2px] bg-gradient-to-r from-pink-light to-purple-light rounded-lg">
                  <div className="bg-white backdrop-blur-sm rounded-lg p-8 text-gray-800 text-base whitespace-pre-line shadow-inner relative z-10">
                    {/* Titre du point timeline */}
                    <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent">
                      {timelineData[selectedTimeline].title}
                    </h3>

                    {/* Contenu des détails */}
                    <div className="prose prose-sm max-w-none">
                      {timelineData[selectedTimeline].details}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
      </section>

      <hr className="border-0 h-1 bg-gradient-to-r from-pink-light to-purple-light mx-28" />

      <section id="realisations" className="mb-24 md:px-28 px-8 pt-24">
        <h1 className="text-center text-3xl font-bold bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent">
          Réalisations
        </h1>
        <div className="mt-20 flex flex-col gap-8">
          {Object.entries(realisationsData).map(([key, project], index) => (
            <RealisationPreview
              key={key}
              img={project.previewPicture}
              titre={project.titre}
              href={`/realisations/${key}`}
              text={project.preview}
              position={index % 2 === 0 ? "left" : "right"}
              showDivider={index !== Object.keys(realisationsData).length - 1}
            />
          ))}
        </div>
      </section>

      <hr className="border-0 h-1 bg-gradient-to-r from-pink-light to-purple-light mx-28" />

      <section id="competences" className="mb-24 md:px-28 px-8 pt-24">
        <h1 className="text-center text-3xl font-bold bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent">
          Compétences
        </h1>
        <CompetenceSection
          title="Techniques"
          competenceType={CompetenceType.Techniques}
        />
        <CompetenceSection
          title="Humaines"
          competenceType={CompetenceType.Humaines}
        />
      </section>
    </main>
  );
}
