"use client";
import { useRouter } from "next/navigation";
import RealisationPreview from "@/components/realisations/RealisationPreview";
import CompetenceSection from "@/components/competences/CompetenceSection";
import { Code, FolderOpen } from "lucide-react";
import Image from "next/image";
import realisationsData from "@/data/realisations.json";
import { CompetenceType } from "@/types";

export default function Home() {
  const router = useRouter();

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
        <div className=" px-8 md:px-24">
          <h2 className="text-2xl text-center mb-8 font-bold bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent">
            Qui suis-je ?
          </h2>
          <section className=" flex flex-col gap-8 ">
            <div className="flex gap-8 items-center flex-col md:flex-row">
              <Image
                src={"/images/profile_picture.jpg"}
                width={2316}
                height={3088}
                className="h-fit max-w-82 w-full overflow-hidden rounded-lg border-4 border-transparent bg-gradient-to-r from-pink-light to-purple-light p-1"
                alt="Profile picture"
              />
              <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col gap-2 w-full">
                  <h3 className="text-xl bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent font-bold">
                    Étudiant et développeur freelance
                  </h3>
                  <p>
                    {
                      "Actuellement en cinquième année à l'ESIEA, je mets à profit les compétences développées au cours de mon parcours académique pour m'adapter rapidement aux nouvelles technologies et répondre efficacement aux exigences de mes clients. Mon objectif principal est d'accroître la valeur des marques en créant des applications, sites et/ou logiciel afin de leurs permettre d'accroitre et améliorer leurs productivités."
                    }
                  </p>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <h3 className="text-xl bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent font-bold">
                    Futur Expert en Ingénierie Logicielle
                  </h3>
                  <p>
                    {
                      "Je suis profondément conscient de mes responsabilités envers la société et l'environnement. Je m'investis activement dans le développement de projets qui sont à la fois humains, éthiques et durables, en intégrant ces principes à chaque étape de mon parcours professionnel. Cela me permet de générer un impact positif sur la société tout en respectant les ressources naturelles et les normes environnementales."
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xl bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent font-bold">
                Projets Professionnels et Personnels
              </h3>
              <p>
                {
                  "Mon ambition professionnelle est étroitement liée à mes aspirations personnelles, qui visent à développer des solutions technologiques accessibles et inclusives pour améliorer la qualité de vie des individus. Mes qualités humaines telles que mon adaptabilité et ma pensée critique sont essentielles pour collaborer efficacement avec mes collaborateurs et répondre aux besoins des utilisateurs."
                }
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent font-bold">
                {"Passion pour le Développement d'Applications et de Logiciels"}
              </h3>
              <p>
                {
                  "Je suis passionné par les innovations dans le domaine du développement d'applications et de logiciels, ce qui constitue l'un de mes principaux centres d'intérêts. Cette passion me permet de concevoir des solutions logicielles avancées et intuitives, visant à simplifier et optimiser les processus professionnels et l'analyse de données. Mon objectif est de rendre ces outils accessibles et efficaces, afin d'aider les professionnels à améliorer leur efficacité et à prendre des décisions éclairées basées sur des données précises et pertinentes."
                }
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent font-bold">
                {"Toujours à l'Avant-Garde Technologique"}
              </h3>
              <p>
                {
                  "Je m'engage à rester constamment à l'avant-garde des avancées technologiques en suivant régulièrement des formations, en découvrant de nouveaux outils et en me tenant informé des derniers langages de programmation. Cette approche proactive me permet de proposer des solutions innovantes et parfaitement adaptées aux besoins uniques de chaque client."
                }
              </p>
            </div>
          </section>
        </div>
      </section>

      <hr className="border-0 h-1 bg-gradient-to-r from-pink-light to-purple-light mx-28" />

      <section id="parcours" className="mb-24 md:px-28 px-8 pt-24">
        <h2 className="text-2xl text-center mb-8 font-bold bg-gradient-to-r from-pink-light/80 to-purple-light/80 bg-clip-text text-transparent">
          Parcours
        </h2>
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex flex-col items-center relative">
            <Image
              src="/images/logo/theseus.png"
              alt="Logo 1"
              width={100}
              height={100}
              className="h-12 mb-4 object-contain"
            />
            <div className="relative flex flex-col items-center">
              <div className="bg-gradient-to-r from-pink-light/80 to-purple-light/80 text-white px-4 py-1 rounded-full mb-2 relative z-10">
                2023-2025
              </div>
              <div className="absolute top-1/2 -left-32 -right-32 h-1 bg-gray-300"></div>
            </div>
            <h3 className="font-bold">Theseus-ai</h3>
            <p className="text-center">Développeur fullstack – Bordeaux</p>
          </div>

          <div className="flex flex-col items-center relative">
            <Image
              src="/images/logo/inria.jpg"
              alt="Logo 2"
              width={100}
              height={100}
              className="h-12 mb-4 object-contain"
            />
            <div className="relative flex flex-col items-center">
              <div className="bg-gradient-to-r from-pink-light/80 to-purple-light/80 text-white px-4 py-1 rounded-full mb-2 relative z-10">
                2023
              </div>
              <div className="absolute top-1/2 -left-32 -right-32 h-1 bg-gray-300"></div>
            </div>
            <h3 className="font-bold">Vidibio, Inria start-up studio</h3>
            <p className="text-center">Développeur fullstack – Bordeaux</p>
          </div>

          <div className="flex flex-col items-center relative">
            <Image
              src="/images/logo/esiea.png"
              alt="Logo 3"
              width={100}
              height={100}
              className="h-12 mb-4 object-contain"
            />
            <div className="relative flex flex-col items-center">
              <div className="bg-gradient-to-r from-pink-light/80 to-purple-light/80 text-white px-4 py-1 rounded-full mb-2 relative z-10">
                2020-2025
              </div>
              <div className="absolute top-1/2 -left-32 -right-32 h-1 bg-gray-300"></div>
            </div>
            <h3 className="font-bold">ESIEA</h3>
            <p className="text-center">RNCP 1, ingénierie logicielle – Agen</p>
          </div>

          <div className="flex flex-col items-center relative">
            <Image
              src="/images/logo/stcap.png"
              alt="Logo 4"
              width={100}
              height={100}
              className="h-12 mb-4 object-contain"
            />
            <div className="relative flex flex-col items-center">
              <div className="bg-gradient-to-r from-pink-light/80 to-purple-light/80 text-white px-4 py-1 rounded-full mb-2 relative z-10">
                2017-2020
              </div>
              <div className="absolute top-1/2 -left-32 -right-32 h-1 bg-gray-300"></div>
            </div>
            <h3 className="font-bold">Lycée Saint-Caprais</h3>
            <p className="text-center">Baccalauréat Scientifique – Agen</p>
          </div>
        </div>
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
