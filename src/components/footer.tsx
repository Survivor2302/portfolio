import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full px-16 py-2 border-t border-black  bg-white">
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <Link href="https://www.linkedin.com/in/leo-bournizien-0a75a3209/">
            LinkedIn
          </Link>
          <Link href="https://github.com/Survivor2302">Github</Link>
        </div>
        ©{new Date().getFullYear()} Léo Bournizien - Tous droits réservés
      </div>
    </div>
  );
}
