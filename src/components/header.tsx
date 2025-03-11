"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isCompetencesVisible, setCompetencesVisible] = useState(false);
  const [isTechVisible, setTechVisible] = useState(false);
  const [isHumainesVisible, setHumainesVisible] = useState(false);
  const [isRealisationsVisible, setRealisationsVisible] = useState(false);

  return (
    <div className="w-full md:px-28 px-8 py-2 flex flex-col md:flex-row justify-between fixed top-0 bg-white z-50 drop-shadow-sm">
      <Link
        className="text-center md:text-start w-full md:w-fit font-bold"
        href="/"
      >
        Léo Bournizien
      </Link>
      <div className="flex md:space-x-4 space-x-2 mt-2 md:mt-0">
        <div
          className="relative"
          onMouseEnter={() => setCompetencesVisible(true)}
          onMouseLeave={() => setCompetencesVisible(false)}
        >
          <Link href="#" className="">
            Compétences
          </Link>
          {isCompetencesVisible && (
            <div className="absolute top-6 left-0 bg-white  rounded-lg shadow-lg w-40">
              <ul>
                <li
                  className="px-4 py-2 hover:bg-gray-100 rounded-t-lg cursor-pointer flex gap-1 bg-gradient-to-r from-pink-light to-purple-light bg-clip-text group"
                  onMouseEnter={() => setTechVisible(true)}
                  onMouseLeave={() => setTechVisible(false)}
                >
                  <p className="group-hover:text-transparent group-hover:font-bold">
                    Techniques
                  </p>
                  <ChevronRight className="w-4" />

                  {isTechVisible && (
                    <div className="absolute left-full top-0 bg-white shadow-lg w-36 rounded-lg">
                      <ul className="flex flex-col bg-gradient-to-r from-pink-light to-purple-light bg-clip-text">
                        <Link
                          className="px-4 py-2 rounded-t-lg hover:text-transparent hover:font-bold"
                          href="/competences/techniques/docker"
                        >
                          Docker
                        </Link>

                        <Link
                          className="px-4 py-2 rounded-t-lg hover:text-transparent hover:font-bold"
                          href="/competences/techniques/git"
                        >
                          Git
                        </Link>

                        <Link
                          className="px-4 py-2 rounded-t-lg hover:text-transparent hover:font-bold"
                          href="/competences/techniques/java"
                        >
                          Java
                        </Link>

                        <Link
                          className="px-4 py-2 rounded-t-lg hover:text-transparent hover:font-bold"
                          href="/competences/techniques/kubernetes"
                        >
                          Kubernetes
                        </Link>

                        <Link
                          className="px-4 py-2 hover:text-transparent hover:font-bold  rounded-b-lg"
                          href="/competences/techniques/typescript"
                        >
                          TypeScript
                        </Link>
                      </ul>
                    </div>
                  )}
                </li>

                <li
                  className="px-4 py-2 hover:bg-gray-100 rounded-t-lg cursor-pointer flex gap-1 bg-gradient-to-r from-pink-light to-purple-light bg-clip-text group"
                  onMouseEnter={() => setHumainesVisible(true)}
                  onMouseLeave={() => setHumainesVisible(false)}
                >
                  <p className="group-hover:text-transparent group-hover:font-bold">
                    Humaines
                  </p>
                  <ChevronRight className="w-4" />
                  {isHumainesVisible && (
                    <div className="absolute left-full top-0 bg-white shadow-lg w-36 rounded-lg ">
                      <ul className="flex flex-col bg-gradient-to-r from-pink-light to-purple-light bg-clip-text">
                        <Link
                          className="px-4 py-2  rounded-t-lg hover:text-transparent hover:font-bold"
                          href="/competences/humaines/adaptabilite"
                        >
                          Adaptabilité
                        </Link>

                        <Link
                          className="px-4 py-2 rounded-t-lg hover:text-transparent hover:font-bold"
                          href="/competences/humaines/anglais"
                        >
                          Anglais
                        </Link>

                        <Link
                          className="px-4 py-2 rounded-t-lg hover:text-transparent hover:font-bold"
                          href="/competences/humaines/autonomie"
                        >
                          Autonomie
                        </Link>

                        <Link
                          className="px-4 py-2 rounded-t-lg hover:text-transparent hover:font-bold"
                          href="/competences/humaines/flexibilite"
                        >
                          Flexibilité
                        </Link>

                        <Link
                          className="px-4 py-2  rounded-b-lg hover:text-transparent hover:font-bold"
                          href="/competences/humaines/pensee"
                        >
                          Pensée critique
                        </Link>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={() => setRealisationsVisible(true)}
          onMouseLeave={() => setRealisationsVisible(false)}
        >
          <Link href="#" className="">
            Réalisations
          </Link>
          {isRealisationsVisible && (
            <div className="absolute left-0 top-6 bg-white shadow-lg w-36 rounded-lg">
              <ul className="flex flex-col bg-gradient-to-r from-pink-light to-purple-light bg-clip-text">
                <Link
                  className="px-4 py-2 rounded-t-lg hover:text-transparent hover:font-bold"
                  href="/realisations/vidibio"
                >
                  Vidibio
                </Link>
                <Link
                  className="px-4 py-2 rounded-t-lg hover:text-transparent hover:font-bold"
                  href="/realisations/theseus"
                >
                  Theseus
                </Link>
                <Link
                  className="px-4 py-2 rounded-t-lg hover:text-transparent hover:font-bold"
                  href="/realisations/gava"
                >
                  Gava
                </Link>
                <Link
                  className="px-4 py-2 rounded-t-lg hover:text-transparent hover:font-bold"
                  href="/realisations/optivex"
                >
                  Optivex
                </Link>
                <Link
                  className="px-4 py-2 rounded-t-lg hover:text-transparent hover:font-bold"
                  href="/realisations/random"
                >
                  RANDOM
                </Link>
              </ul>
            </div>
          )}
        </div>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}
