import Competences from "@/components/competences";

export default function Home() {
  return (
    <main className="md:px-28 px-8">
      <Competences
        logo="/images/autonomie.png"
        title="Autonomie"
        presentation={[
          "L’autonomie, dans le domaine du développement, est la capacité à apprendre, résoudre des problèmes et avancer sur un projet sans supervision constante. Elle est essentielle pour gagner en efficacité et en productivité, tout en restant adaptable aux défis rencontrés. Être autonome ne signifie pas travailler seul en permanence, mais savoir prendre des initiatives et rechercher des solutions par soi-même avant de solliciter de l’aide.",
        ]}
        utilisations={[
          "L’autonomie est une compétence clé dans mon travail quotidien de développeur. Dans mes projets, qu’ils soient personnels, professionnels ou dans le cadre de ma micro-entreprise de développement, je suis souvent amené à apprendre de nouvelles technologies et à résoudre des problématiques techniques sans assistance directe. Par exemple, dans des projets comme Vidibio et Theseus-AI, j’ai dû m’auto-former à Kubernetes et gérer seul l’infrastructure serveur. Cette capacité m’a également été précieuse dans Gava et Optivex, où j’ai dû développer et maintenir des solutions logicielles en totale autonomie.",
          "Gérer une micro-entreprise renforce encore cette autonomie, car je suis seul pour prendre des décisions techniques, organiser mon travail et assurer la qualité des livrables. Être capable de rechercher l’information, d’analyser les besoins et d’exécuter efficacement les tâches est indispensable pour mener à bien mes missions.",
        ]}
        maitrise={[
          'Je considère mon niveau en autonomie comme "maîtrisé". J’ai acquis une grande expérience en travaillant sur des projets variés qui m’ont poussé à apprendre et évoluer par moi-même. Je suis capable d’explorer des technologies inconnues, d’assimiler de la documentation technique et d’implémenter des solutions sans supervision directe. Cependant, je sais aussi reconnaître les moments où demander de l’aide ou collaborer avec d’autres experts peut accélérer la résolution de problèmes plus complexes.',
        ]}
        formation={[
          "Je continue de renforcer mon autonomie en m’auto-formant sur les nouvelles technologies et les meilleures pratiques du développement. Que ce soit par la lecture de documentation, la participation à des formations en ligne ou la réalisation de projets personnels, je cherche constamment à améliorer ma capacité à travailler de manière indépendante. Cette habitude d’apprentissage continu me permet d’être toujours à jour avec les évolutions du secteur.",
        ]}
        conseils={[
          "Pour développer son autonomie, il est essentiel d’apprendre à chercher l’information efficacement, à structurer son travail et à fixer des objectifs clairs. Travailler sur des projets personnels et se confronter à des défis techniques est un excellent moyen d’acquérir cette compétence. Il est aussi important de savoir quand persévérer seul et quand demander de l’aide pour ne pas perdre trop de temps sur une difficulté.",
        ]}
        projet={[
          "L’autonomie est une qualité que je souhaite continuer à développer dans ma carrière. Mon objectif est d’être capable de gérer des projets de plus en plus complexes, tout en conservant une organisation efficace et une capacité d’apprentissage rapide. Dans ma micro-entreprise, cette autonomie me permet de répondre aux demandes des clients de manière proactive et de garantir des solutions adaptées sans dépendre d’une équipe externe.",
        ]}
        importance={[
          "Pour moi, l’autonomie est une compétence fondamentale pour un développeur. Elle permet d’avancer efficacement sur des projets, d’apprendre continuellement et de s’adapter aux nouvelles technologies sans attendre une formation formelle. Dans un environnement en constante évolution, être autonome est un atout qui assure une progression rapide et une capacité à relever des défis techniques de manière efficace.",
        ]}
      />
    </main>
  );
}
