import {
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  Megaphone,
  Presentation,
  Rocket,
  SquareDashedMousePointer,
} from "lucide-react";
import Image from "next/image";

type Props = {
  title: string;
  presentation: string[];
  utilisations: string[];
  maitrise: string[];
  formation: string[];
  conseils: string[];
  projet: string[];
  importance: string[];
  logo: string;
};

export default function Competences({
  title,
  presentation,
  utilisations,
  maitrise,
  formation,
  conseils,
  projet,
  importance,
  logo,
}: Props) {
  return (
    <section className="my-36">
      <div className="w-full flex flex-col items-center">
        <h1 className=" text-center text-4xl bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent font-bold">
          {title}
        </h1>

        <Image
          src={logo}
          alt="logo"
          width={100}
          height={100}
          className="max-w-20 w-full mt-2"
        />
      </div>

      <section className="justify-center items-start  relative">
        <section className=" flex flex-col gap-24 mt-24">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-gray-100 rounded-md w-full max-w-full min-h-32" />
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <Presentation className="w-4" />
                <h2 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text font-bold  text-transparent">
                  Présentation
                </h2>
              </div>

              {presentation.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <SquareDashedMousePointer className="w-4" />
                <h2 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent font-bold ">
                  Utilisation
                </h2>
              </div>
              {utilisations.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
            <div className="bg-gray-100 rounded-md w-full max-w-full min-h-32" />
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-gray-100 rounded-md w-full max-w-full min-h-32" />
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <GraduationCap className="w-4" />
                <h2 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent font-bold ">
                  Maîtrise
                </h2>
              </div>
              {maitrise.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <BookOpen className="w-4" />
                <h2 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text font-bold text-transparent">
                  Formation en cours
                </h2>
              </div>
              {formation.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
            <div className="bg-gray-100 rounded-md w-full max-w-full min-h-32" />
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-gray-100 rounded-md w-full max-w-full min-h-32" />
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <Megaphone className="w-4" />
                <h2 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent font-bold ">
                  Conseils
                </h2>
              </div>
              {conseils.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <BriefcaseBusiness className="w-5" />
                <h2 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text font-bold  text-transparent">
                  Projet personnel-professionnel
                </h2>
              </div>
              {projet.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
            <div className="bg-gray-100 rounded-md w-full max-w-full min-h-32" />
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-gray-100 rounded-md w-full max-w-full min-h-32" />
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <Rocket className="w-5" />
                <h2 className="text-xl w-fit whitespace-nowrap bg-gradient-to-r from-pink-light to-purple-light bg-clip-text font-bold  text-transparent">
                  Importance de cette compétence
                </h2>
              </div>
              {importance.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
