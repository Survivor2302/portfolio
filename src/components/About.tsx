import Image from "next/image";
import aboutData from "@/data/about.json";
import { Book, Brain, Briefcase, Lightbulb, Rocket } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl text-center mb-12 font-bold bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent">
        {aboutData.title}
      </h2>

      {/* Section introduction avec photo */}
      <div className="flex flex-col md:flex-row gap-10 items-start mb-16">
        <div className="relative w-full md:w-1/3 aspect-[3/4] overflow-hidden rounded-xl border-4 border-transparent p-[2px] bg-gradient-to-r from-pink-light to-purple-light">
          <Image
            src={aboutData.profilePicture.src}
            fill
            className="object-cover rounded-lg"
            alt={aboutData.profilePicture.alt}
          />
        </div>

        <div className="flex flex-col w-full md:w-2/3">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="text-pink-light" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent">
                {aboutData.sections[0].title}
              </h3>
            </div>
            <div className="rounded-xl">
              <p className="text-gray-700">{aboutData.sections[0].content}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Deuxième section en dessous */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-4">
          <Brain className="text-pink-light" />
          <h3 className="text-xl font-bold bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent">
            {aboutData.sections[1].title}
          </h3>
        </div>
        <div className="rounded-xl">
          <p className="text-gray-700">{aboutData.sections[1].content}</p>
        </div>
      </div>

      {/* Sections supplémentaires */}
      <div className="space-y-12">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-4">
            <Rocket className="text-pink-light" />
            <h3 className="text-xl font-bold bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent">
              {aboutData.sections[2].title}
            </h3>
          </div>
          <div className="bg-gradient-to-br from-pink-light/5 to-purple-light/5 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-pink-light/10">
            <p className="text-gray-700">{aboutData.sections[2].content}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="text-pink-light" />
            <h3 className="text-xl font-bold bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent">
              {aboutData.sections[3].title}
            </h3>
          </div>
          <div className="bg-gradient-to-br from-pink-light/5 to-purple-light/5 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-pink-light/10">
            <p className="text-gray-700">{aboutData.sections[3].content}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-4">
            <Book className="text-pink-light" />
            <h3 className="text-xl font-bold bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent">
              {aboutData.sections[4].title}
            </h3>
          </div>
          <div className="bg-gradient-to-br from-pink-light/5 to-purple-light/5 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-pink-light/10">
            <p className="text-gray-700">{aboutData.sections[4].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
