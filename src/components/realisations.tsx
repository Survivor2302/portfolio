import {
  Camera,
  Goal,
  HeartHandshake,
  Laptop,
  PencilLine,
  ShieldEllipsis,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import CompetenceSection from "./CompetenceSection";
import { CompetenceType, CompetenceKey } from "./CompetenceSection";

type Props = {
  title: string;
  missions: string[];
  role: string[];
  technologies: string[];
  client: string[];
  objectif: string[];
  galerie: string[];
  processus: string[];
  conclusions: string[];
  associatedCompetences: {
    techniques: CompetenceKey[];
    humaines: CompetenceKey[];
  };
  img: string;
};

export default function Realisations({
  title,
  missions,
  role,
  technologies,
  client,
  objectif,
  galerie,
  processus,
  conclusions,
  associatedCompetences,
  img,
}: Props) {
  return (
    <section className="">
      <div className="w-full flex flex-col items-center">
        <h1 className=" text-center text-4xl bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent font-bold">
          {title}
        </h1>

        <Image
          src={img}
          alt="img"
          width={100}
          height={100}
          className="max-w-20 w-full mt-2"
        />
      </div>

      <section className="justify-center items-start  relative">
        <section className=" flex flex-col gap-24 mt-24">
          <div className="flex flex-col  gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <Goal className="w-5" />
                <h2 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text font-bold  text-transparent">
                  Mission
                </h2>
              </div>

              {missions.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col  gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <ShieldEllipsis className="w-5" />
                <h2 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent font-bold ">
                  Rôle
                </h2>
              </div>
              {role.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col  gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <Laptop className="w-5" />
                <h2 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent font-bold ">
                  Technologies
                </h2>
              </div>
              {technologies.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col  gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <ShoppingCart className="w-5" />
                <h2 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text font-bold text-transparent">
                  Client
                </h2>
              </div>
              {client.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col  gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <Goal className="w-5" />
                <h2 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent font-bold ">
                  Objectifs, contexte et enjeux
                </h2>
              </div>
              {objectif.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col  gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <Camera className="w-5" />
                <h2 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text font-bold  text-transparent">
                  La galerie de travaux
                </h2>
              </div>
              {galerie.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col  gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <PencilLine className="w-5" />
                <h2 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text font-bold  text-transparent">
                  Processus de développement
                </h2>
              </div>
              {processus.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col  gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <HeartHandshake className="w-5" />
                <h2 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text font-bold  text-transparent">
                  Conclusion
                </h2>
              </div>
              {conclusions.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <CompetenceSection
              title="Compétences associées"
              competences={[
                ...associatedCompetences.techniques.map((key) => ({
                  key: key as CompetenceKey,
                  type: CompetenceType.TECHNIQUES,
                })),
                ...associatedCompetences.humaines.map((key) => ({
                  key: key as CompetenceKey,
                  type: CompetenceType.HUMAINES,
                })),
              ]}
            />
          </div>
        </section>
      </section>
    </section>
  );
}
