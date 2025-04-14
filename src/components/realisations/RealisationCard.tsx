"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Realisation } from "@/types";

type Props = {
  realisation: Realisation & { id: string };
};

export default function RealisationCard({ realisation }: Props) {
  const router = useRouter();

  return (
    <button
      className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center w-[300px]"
      onClick={() => router.push(`/realisations/${realisation.id}`)}
    >
      <div className="relative w-full aspect-[16/9] mb-4">
        <Image
          src={realisation.previewPicture}
          alt={realisation.titre}
          fill
          className="object-contain rounded-md"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-center">
        {realisation.titre}
      </h3>
      <p className="text-gray-600 line-clamp-2 text-center">
        {realisation.preview}
      </p>
    </button>
  );
}
