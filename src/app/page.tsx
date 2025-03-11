import Card from "@/components/card";
import CardRealisations from "@/components/card-realisations";
import { Code, FolderOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="scroll-smooth overflow-auto mb-28">
      <section className="pt-36 pb-24 md:px-28 px-8 bg-gray-50">
        <h1 className=" text-center text-4xl bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent font-bold">
          Étudiant et développeur freelance
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <Link
            className="px-6 py-2 flex gap-2 bg-gradient-to-r from-pink-light to-purple-light  text-white  font-bold rounded-md hover:scale-105 transition-all duration-100"
            href="#competences"
          >
            <Code className="w-4" /> Compétences
          </Link>

          <Link
            className="px-6 py-2 flex gap-2 bg-gradient-to-r from-pink-light to-purple-light  text-white  font-bold rounded-md hover:scale-105 transition-all duration-100"
            href="#competences"
          >
            <FolderOpen className="w-4" />
            Réalisations
          </Link>
        </div>
      </section>
      <section className="mb-24  md:px-28 px-8 mt-24">
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

      <section className="mb-24 md:px-28 px-8 mt-24">
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
            <p className="text-center">Développeur fullstack – Agen</p>
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

      <section id="competences" className="mb-24 md:px-28 px-8 pt-24">
        <h1 className=" text-center text-3xl font-bold bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent">
          Réalisations
        </h1>
        <div className="mt-20 flex flex-col gap-8">
          <CardRealisations
            img="/images/mockup-leo.png"
            titre="Theseus"
            href="/realisations/theseus"
            text="In capital markets, every detail counts, and every second too. Yet, we are not machines and must be assisted by machines : Theseus refines data from your conversations to keep you focused, informed and relevant."
            position="left"
          />

          <CardRealisations
            img="/images/mockup-leo.png"
            titre="Theseus"
            href="/realisations/theseus"
            text="In capital markets, every detail counts, and every second too. Yet, we are not machines and must be assisted by machines : Theseus refines data from your conversations to keep you focused, informed and relevant."
            position="right"
          />
        </div>
      </section>

      <section id="competences" className="mb-24 md:px-28 px-8 pt-24">
        <h1 className=" text-center text-3xl font-bold bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent">
          Compétences
        </h1>
        <div className="flex flex-col items-center gap-8 mt-2">
          <h2 className="text-xl text-start font-bold mt-8 ">Techniques</h2>
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-8 mt-2">
            <Card
              img="/images/git.png"
              titre="Git"
              href="/competences/techniques/git"
              text="Git est un système de contrôle..."
            />
            <Card
              img="/images/typescript.png"
              titre="Typescript"
              href="/competences/techniques/typescript"
              text="Git est un système de contrôle..."
            />
            <Card
              img="/images/kubernetes.png"
              titre="Kubernetes"
              href="/competences/techniques/kubernetes"
              text="Git est un système de contrôle..."
            />
            <Card
              img="/images/java.png"
              titre="Java"
              href="/competences/techniques/java"
              text="Git est un système de contrôle..."
            />
            <Card
              img="/images/docker.png"
              titre="Docker"
              href="/competences/techniques/docker"
              text="Git est un système de contrôle..."
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 mt-12">
          <h2 className="text-xl text-start font-bold mt-8 ">Humaines</h2>
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-8 mt-2">
            <Card
              img="/images/adaptabilite.png"
              titre="Adaptabilité"
              href="/competences/humaines/adaptabilite"
              text="Git est un système de contrôle..."
            />
            <Card
              img="/images/anglais.png"
              titre="Anglais"
              href="/competences/humaines/anglais"
              text="Git est un système de contrôle..."
            />
            <Card
              img="/images/autonomie.png"
              titre="Autonomie"
              href="/competences/humaines/autonomie"
              text="Git est un système de contrôle..."
            />
            <Card
              img="/images/flexibilite.png"
              titre="Flexibilité"
              href="/competences/humaines/flexibilite"
              text="Git est un système de contrôle..."
            />
            <Card
              img="/images/pensee.png"
              titre="Pensée critique"
              href="/competences/humaines/pensee-critique"
              text="Git est un système de contrôle..."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
