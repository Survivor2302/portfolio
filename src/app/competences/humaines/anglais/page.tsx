import Competences from "@/components/competences";

export default function Home() {
  return (
    <main className="md:px-28 px-8">
      <Competences
        logo="/images/anglais.png"
        title="Adaptabilité"
        presentation={[
          "L’adaptabilité est une compétence essentielle pour tout développeur. Elle consiste à s’adapter rapidement aux nouvelles technologies, aux méthodologies de travail et aux environnements techniques variés. Dans un domaine en constante évolution comme l’informatique, savoir apprendre de nouveaux langages, outils ou frameworks est indispensable pour rester pertinent et efficace.",
        ]}
        utilisations={[
          "Tout au long de mon cursus scolaire et de mes expériences professionnelles, j’ai été amené à faire preuve d’une grande adaptabilité. Dans mes projets comme Gava et Optivex, j’ai dû passer d’un langage à un autre, m’adapter à différentes technologies et apprendre rapidement de nouvelles méthodologies de développement.",
          "Dans un cadre plus professionnel, à travers des expériences comme Vidibio et Theseus-AI, j’ai travaillé sur des infrastructures variées, passant de React Native à Kubernetes, en gérant des API, des systèmes de traitement d’images et même des serveurs. Mon auto-entreprise m’a également poussé à naviguer entre plusieurs domaines, du développement pur à la gestion de systèmes et à l’intégration continue. Cette capacité d’adaptation me permet aujourd’hui d’aborder de nouveaux projets sans difficulté, quelle que soit la stack technologique ou l’environnement de travail.",
        ]}
        maitrise={[
          "Je considère mon niveau d’adaptabilité comme 'élevé'. J’ai développé la capacité de m’immerger rapidement dans de nouveaux environnements, d’apprendre de nouveaux langages et outils en fonction des besoins des projets, et de passer d’un système d’exploitation à un autre sans difficulté. Mon expérience dans des contextes variés m’a permis de renforcer cette flexibilité et de répondre efficacement aux exigences techniques, même lorsque celles-ci évoluent en cours de projet.",
        ]}
        formation={[
          "Je continue d’améliorer mon adaptabilité en explorant régulièrement de nouvelles technologies et en me tenant informé des évolutions du secteur. Que ce soit par des projets personnels, des formations en ligne ou des défis techniques, je cherche en permanence à élargir mon champ de compétences pour être capable de répondre aux besoins changeants du développement logiciel.",
        ]}
        conseils={[
          "Pour développer son adaptabilité, il est essentiel d’avoir une ouverture d’esprit face aux nouvelles technologies et de ne pas craindre de sortir de sa zone de confort. Tester régulièrement de nouveaux langages ou frameworks, comprendre les bases des différents systèmes d’exploitation et être curieux des évolutions technologiques sont des habitudes qui permettent de progresser rapidement.",
        ]}
        projet={[
          "L’adaptabilité est une compétence que je considère comme centrale dans mon parcours. Mon objectif est de continuer à renforcer ma capacité à apprendre et à m’adapter rapidement aux nouvelles tendances du développement. Dans mon auto-entreprise, cette compétence me permet d’accepter une grande variété de projets et d’y apporter des solutions optimales, quel que soit l’environnement technique ou le domaine concerné.",
        ]}
        importance={[
          "Pour moi, l’adaptabilité est une qualité essentielle pour un développeur. Elle permet de faire face aux évolutions constantes du secteur et d’être efficace sur des projets aux exigences variées. Grâce à cette compétence, j’ai pu travailler sur des technologies très différentes et mener à bien des missions qui demandaient une montée en compétence rapide. Être adaptable, c’est garantir sa progression et sa réussite dans un domaine en perpétuelle mutation.",
        ]}
      />
    </main>
  );
}
