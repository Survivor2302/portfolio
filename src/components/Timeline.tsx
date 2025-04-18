import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

export type TimelineItem = {
  logo: string;
  alt: string;
  years: string;
  title: string;
  job: string;
  localisation: string;
  link: string;
  details?: string;
};

export default function Timeline({
  items,
  selectedIndex,
  onSelect,
}: {
  items: TimelineItem[];
  selectedIndex: number | null;
  onSelect: (idx: number | null) => void;
}) {
  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center gap-12 w-full">
      {items.map((item, idx) => (
        <div
          className="flex flex-col items-center relative w-full md:w-auto"
          key={idx}
        >
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <Image
              src={item.logo}
              alt={item.alt}
              width={100}
              height={100}
              className="h-12 mb-4 object-contain"
            />
          </a>
          <div className="relative flex flex-col items-center">
            <div
              className={`bg-gradient-to-r from-pink-light/80 to-purple-light/80 text-white px-4 py-1 rounded-full mb-2 relative z-10 ${
                selectedIndex === idx
                  ? "ring-2 ring-offset-2 ring-purple-light"
                  : ""
              }`}
            >
              {item.years}
            </div>
            <div className="absolute top-1/2 -left-40 -right-40 h-1 bg-gray-300"></div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-bold underline hover:text-purple-light transition-colors ${
                selectedIndex === idx ? "text-purple-light" : "text-primary"
              }`}
            >
              {item.title}
            </a>
            <button
              aria-label="Afficher plus"
              onClick={() => onSelect(selectedIndex === idx ? null : idx)}
              className={`ml-1 p-1 rounded transition-colors ${
                selectedIndex === idx
                  ? "bg-pink-light/10 hover:bg-pink-light/20"
                  : "hover:bg-gray-100"
              }`}
              type="button"
            >
              {selectedIndex === idx ? (
                <ChevronUp size={18} className="text-purple-light" />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>
          </div>
          <div className="flex flex-col items-center relative">
            <p className="text-center text-sm max-w-[200px] font-medium text-gray-700 mt-1 whitespace-nowrap">
              {item.job}
            </p>
            <p className="text-center text-sm max-w-[200px] text-gray-500">
              {item.localisation}
            </p>

            {/* Indicateur visuel pour l'élément sélectionné (placé sous le texte) */}
            {selectedIndex === idx && (
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-11">
                <div className="w-1 h-6 bg-gradient-to-b from-pink-light to-purple-light"></div>
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-light to-purple-light mt-1"></div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
