import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  href: string;
  text: string;
  titre: string;
  img: string;
  position: "left" | "right";
  showDivider: boolean;
};

export default function RealisationPreview({
  href,
  text,
  titre,
  img,
  position,
  showDivider,
}: Props) {
  const router = useRouter();
  return (
    <>
      <section className="px-2 py-2 flex flex-col md:flex-row items-start gap-12 w-full">
        {position === "left" && (
          <div className="w-[260px] h-[195px] flex items-center justify-center">
            <Image
              src={img}
              alt=""
              width={260}
              height={195}
              className="max-w-[260px] max-h-[195px] object-contain rounded-lg"
            />
          </div>
        )}
        <div
          className={`flex flex-col gap-2 w-full ${
            position === "right" ? "items-start" : "items-end"
          }`}
        >
          <h3 className="mt-2 font-bold truncate text-xl w-full">{titre}</h3>
          <p className=" text-gray-500 ">{text}</p>
          <button
            onClick={() => {
              router.push(href);
            }}
            className="px-6 items-center py-2 flex gap-2 bg-gradient-to-r from-pink-light to-purple-light  text-white  font-bold rounded-md w-fit "
          >
            En savoir plus
            <MoveRight className="w-5" />
          </button>
        </div>
        {position === "right" && (
          <div className="w-[260px] h-[195px] flex items-center justify-center">
            <Image
              src={img}
              alt=""
              width={260}
              height={195}
              className="max-w-[260px] max-h-[195px] object-contain rounded-lg"
            />
          </div>
        )}
      </section>
      {showDivider && <div className="w-full h-[1px] bg-gray-300 my-2" />}
    </>
  );
}
