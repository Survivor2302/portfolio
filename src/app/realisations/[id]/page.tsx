import { notFound } from "next/navigation";
import { RealisationsData } from "@/types";
import realisationsData from "@/data/realisations.json";
import RealisationDetails from "@/components/realisations/RealisationDetails";

export function generateStaticParams() {
  const realisationsDataTyped = realisationsData as unknown as RealisationsData;
  return Object.keys(realisationsDataTyped).map((id) => ({ id }));
}

export default async function RealisationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const realisationsDataTyped = realisationsData as unknown as RealisationsData;
  const realisation = realisationsDataTyped[resolvedParams.id];

  if (!realisation) {
    return notFound();
  }

  return (
    <main className="md:px-28 px-8">
      <RealisationDetails realisation={realisation} />
    </main>
  );
}
