"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  href: string;
  level: number;
  titre: string;
  img: string;
};

const getLevelLabel = (level: number) => {
  switch (level) {
    case 0:
      return "Débutant";
    case 1:
      return "Novice";
    case 2:
      return "Intermédiaire";
    case 3:
      return "Avancé";
    case 4:
      return "Confirmé";
    case 5:
      return "Expert";
    default:
      return "";
  }
};

export default function Card({ href, level, titre, img }: Props) {
  const router = useRouter();
  return (
    <button
      className="px-2 py-2 bg-white drop-shadow-lg rounded-md flex flex-col w-48 h-52 hover:scale-105 transition-all duration-100"
      onClick={() => {
        router.push(href);
      }}
    >
      <div className="w-full h-20 rounded-md flex justify-center items-center bg-gray-50">
        <Image
          src={img}
          alt=""
          width={100}
          height={100}
          className="max-w-14 w-full h-full max-h-14 object-contain"
        />
      </div>
      <div className="flex flex-col items-center flex-1 pt-2">
        <div className="font-semibold text-lg text-center line-clamp-2">
          {titre}
        </div>
        <div className="w-full h-[1px] bg-gray-200 my-2" />
        <div className="flex flex-col gap-1 w-full items-center">
          <span className="text-sm text-gray-600 font-medium text-center">
            {getLevelLabel(level)}
          </span>
          <div className="w-4/5 h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-gradient-to-r from-pink-light to-purple-light rounded-full transition-all duration-300"
              style={{ width: `${level * 20}%` }}
            />
          </div>
        </div>
      </div>
    </button>
  );
}
