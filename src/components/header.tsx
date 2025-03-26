"use client";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import competences from "@/data/competences.json";
import realisations from "@/data/realisations.json";

export default function Header() {
  const router = useRouter();
  const [isCompetencesVisible, setCompetencesVisible] = useState(false);
  const [isTechVisible, setTechVisible] = useState(false);
  const [isHumainesVisible, setHumainesVisible] = useState(false);
  const [isRealisationsVisible, setRealisationsVisible] = useState(false);

  // Fonction helper pour capitaliser la première lettre
  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className="w-full md:px-28 px-8 py-2 flex flex-col md:flex-row justify-between fixed top-0 bg-white z-50 drop-shadow-sm">
      <button
        className="text-center md:text-start w-full md:w-fit font-bold"
        onClick={() => router.push("/")}
      >
        Léo Bournizien
      </button>
      <div className="flex md:space-x-4 space-x-2 mt-2 md:mt-0">
        <div
          className="relative"
          onMouseEnter={() => setCompetencesVisible(true)}
          onMouseLeave={() => setCompetencesVisible(false)}
        >
          <button onClick={() => router.push("/#competences")}>
            Compétences
          </button>
          {isCompetencesVisible && (
            <div className="absolute top-6 left-0 bg-white rounded-lg shadow-lg w-40">
              <ul>
                {Object.entries(competences).map(([type, items]) => (
                  <li
                    key={type}
                    className="px-4 py-2 hover:bg-gray-100 rounded-t-lg cursor-pointer flex gap-1 bg-gradient-to-r from-pink-light to-purple-light bg-clip-text group"
                    onMouseEnter={() =>
                      type === "techniques"
                        ? setTechVisible(true)
                        : setHumainesVisible(true)
                    }
                    onMouseLeave={() =>
                      type === "techniques"
                        ? setTechVisible(false)
                        : setHumainesVisible(false)
                    }
                  >
                    <p className="group-hover:text-transparent group-hover:font-bold">
                      {capitalize(type)}
                    </p>
                    <ChevronRight className="w-4" />

                    {((type === "techniques" && isTechVisible) ||
                      (type === "humaines" && isHumainesVisible)) && (
                      <div className="absolute left-full top-0 bg-white shadow-lg w-36 rounded-lg">
                        <ul className="flex flex-col bg-gradient-to-r from-pink-light to-purple-light bg-clip-text">
                          {Object.entries(items).map(([key, value]) => (
                            <button
                              key={key}
                              className="px-4 py-2 hover:text-transparent hover:font-bold text-left"
                              onClick={() =>
                                router.push(`/competences/${type}/${key}`)
                              }
                            >
                              {value.title}
                            </button>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={() => setRealisationsVisible(true)}
          onMouseLeave={() => setRealisationsVisible(false)}
        >
          <button onClick={() => router.push("/#realisations")}>
            Réalisations
          </button>
          {isRealisationsVisible && (
            <div className="absolute left-0 top-6 bg-white shadow-lg w-36 rounded-lg">
              <ul className="flex flex-col bg-gradient-to-r from-pink-light to-purple-light bg-clip-text">
                {Object.entries(realisations).map(([key, value]) => (
                  <button
                    key={key}
                    className="px-4 py-2 hover:text-transparent hover:font-bold text-left"
                    onClick={() => router.push(`/realisations/${key}`)}
                  >
                    {value.titre}
                  </button>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button onClick={() => router.push("/contact")}>Contact</button>
      </div>
    </div>
  );
}
