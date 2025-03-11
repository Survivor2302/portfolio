import Competences from "@/components/competences";

export default function Home() {
  return (
    <main className="md:px-28 px-8">
      <Competences
        logo="/images/pensee.png"
        title="Pensée critique"
        presentation={[
          "La pensée critique est une compétence essentielle pour un développeur. Elle permet d’analyser un problème, d’évaluer différentes solutions et de prendre des décisions éclairées. Dans un domaine où la résolution de problèmes est au cœur du travail, savoir remettre en question ses choix, identifier des failles potentielles et optimiser des solutions est primordial.",
        ]}
        utilisations={[
          "Tout au long de mon parcours, j’ai développé ma pensée critique en travaillant sur divers projets. Que ce soit dans Gava, Optivex, Vidibio ou Theseus-AI, chaque projet a nécessité une réflexion approfondie sur la meilleure manière d’implémenter des fonctionnalités, d’optimiser les performances et de garantir la fiabilité du code.",
          "Dans mon auto-entreprise, cette compétence est d’autant plus précieuse que je suis souvent amené à évaluer seul des solutions techniques et à anticiper les problèmes potentiels. J’ai appris à ne pas prendre les solutions toutes faites pour acquises, mais à analyser leurs avantages et inconvénients avant de les appliquer.",
        ]}
        maitrise={[
          "e considère que ma pensée critique est bien développée. J’ai acquis l’habitude de questionner les choix techniques, d’effectuer des revues de code approfondies et d’adopter une approche analytique face aux problèmes rencontrés. Mon expérience m’a appris à ne pas me contenter de la première solution venue, mais à comparer différentes approches avant de prendre une décision.",
        ]}
        formation={[
          "Je continue d’affiner ma pensée critique en étudiant des méthodologies de résolution de problèmes et en analysant des architectures logicielles avancées. J’aime aussi échanger avec d’autres développeurs pour confronter mes idées et découvrir de nouvelles perspectives sur les problèmes que je rencontre.",
        ]}
        conseils={[
          "Développer sa pensée critique passe par l’apprentissage de la remise en question et la curiosité intellectuelle. Il est important de ne pas accepter une solution sans en avoir compris les implications et d’apprendre à évaluer ses décisions avec recul. Lire des articles techniques, débattre avec d’autres professionnels et expérimenter différentes approches permettent d’affiner cette compétence.",
        ]}
        projet={[
          "La pensée critique est un atout majeur dans mon travail, et je souhaite continuer à la développer. Mon objectif est de perfectionner ma capacité à anticiper les problèmes et à concevoir des solutions robustes et évolutives. Dans mon auto-entreprise comme dans mes projets professionnels, cette compétence me permet de proposer des solutions réfléchies et optimisées.",
        ]}
        importance={[
          "Pour moi, la pensée critique est indispensable pour un développeur. Elle permet de faire des choix techniques pertinents, d’éviter les erreurs coûteuses et d’améliorer continuellement son approche du développement. Grâce à cette compétence, je suis en mesure d’analyser les besoins d’un projet avec rigueur et d’apporter des solutions adaptées et efficaces.",
        ]}
      />
    </main>
  );
}
