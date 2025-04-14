import { FileText, Code2, Brain, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import AssociatedRealisations from "../realisations/AssociatedRealisations";
import { Competence } from "@/types";

type Props = {
  competence: Competence;
};

export default function CompetenceDetails({ competence }: Props) {
  return (
    <section className="my-36">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-center text-5xl bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent font-bold">
          {competence.title}
        </h1>

        <Image
          src={competence.logo}
          alt="logo"
          width={100}
          height={100}
          className="max-w-20 w-full mt-2"
        />
      </div>

      <section className="justify-center items-start relative">
        <section className="flex flex-col gap-10 mt-24">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col gap-2 md:w-1/2">
                <div className="flex gap-2 items-center">
                  <FileText className="w-4" />
                  <h3 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent font-bold">
                    Définition
                  </h3>
                </div>
                <p className="">{competence.content.definition}</p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src={"/images/design/definition.jpg"}
                  alt="Description de l'image"
                  width={1920}
                  height={1080}
                  className="w-full h-auto rounded-lg object-cover"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex gap-2 items-center">
                <Code2 className="w-4" />
                <h3 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent font-bold">
                  Exemples concrets
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(competence.content.exemplesConcrets).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      className="flex flex-col gap-4 p-6 rounded-lg bg-gradient-to-br from-pink-light/10 to-purple-light/10"
                    >
                      <h4 className="text-lg font-semibold text-pink-light">
                        {key}
                      </h4>
                      <p className="">{value}</p>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <Image
                  src={"/images/design/autocritique.jpg"}
                  alt="Description de l'image"
                  width={1920}
                  height={1080}
                  className="w-full h-auto rounded-lg object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col gap-2 md:w-1/2">
                <div className="flex gap-2 items-center">
                  <Brain className="w-4" />
                  <h3 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent font-bold">
                    Autocritique
                  </h3>
                </div>
                <p className="">{competence.content.autocritique}</p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex gap-2 items-center">
                <ArrowUpRight className="w-4" />
                <h3 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent font-bold">
                  Évolution
                </h3>
              </div>
              <div className="p-6 rounded-lg bg-gradient-to-br from-pink-light/10 to-purple-light/10">
                <p className="">{competence.content.evolution}</p>
              </div>
            </div>
          </div>

          <hr className="border-0 h-1 bg-gradient-to-r from-pink-light to-purple-light " />

          <AssociatedRealisations
            realisationIds={competence.associatedRealisations}
          />
        </section>
      </section>
    </section>
  );
}
