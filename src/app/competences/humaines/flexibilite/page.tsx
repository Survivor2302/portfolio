import Competences from "@/components/competences";

export default function Home() {
  return (
    <main className="md:px-28 px-8">
      <Competences
        logo="/images/flexibilite.png"
        title="Flexibilité"
        presentation={[
          "La flexibilité est une compétence clé dans le domaine du développement. Elle permet de s’adapter aux imprévus, de modifier ses approches en fonction des besoins d’un projet et d’ajuster ses méthodes de travail pour garantir un résultat optimal. Dans un environnement où les exigences évoluent rapidement, être flexible est essentiel pour assurer la réussite des projets.",
        ]}
        utilisations={[
          "J’ai développé une grande flexibilité tout au long de mes expériences, notamment dans des projets comme Gava, Optivex, Vidibio et Theseus-AI. Chaque projet a exigé une adaptation rapide aux technologies utilisées, aux attentes des clients et aux contraintes techniques.",
          "Dans mon auto-entreprise, la flexibilité est encore plus importante. Je dois souvent jongler entre plusieurs projets, m’adapter aux besoins spécifiques de chaque client et ajuster mes priorités en fonction des urgences. Cette capacité me permet de répondre efficacement aux défis du développement et de livrer des solutions adaptées aux exigences des différents environnements de travail.",
        ]}
        maitrise={[
          "Je considère que ma flexibilité est bien développée. J’ai appris à modifier rapidement mon approche face aux imprévus, à changer d’outil ou de technologie lorsque cela est nécessaire et à ajuster mes méthodes en fonction des contraintes d’un projet. Cette capacité d’adaptation me permet de travailler efficacement même dans des contextes en évolution constante.",
        ]}
        formation={[
          "Je continue d’améliorer ma flexibilité en expérimentant de nouvelles méthodologies et en explorant différentes manières de structurer mon travail. Être flexible implique de rester ouvert aux nouvelles idées, d’apprendre continuellement et de tester des solutions alternatives pour optimiser mon efficacité.",
        ]}
        conseils={[
          "Développer sa flexibilité demande d’apprendre à gérer les imprévus et à accepter le changement comme une opportunité d’évolution. Il est important d’adopter une approche agile, de rester à l’écoute des besoins du projet et d’être prêt à ajuster ses stratégies lorsque cela est nécessaire. La curiosité et l’ouverture d’esprit sont des éléments clés pour renforcer cette compétence.",
        ]}
        projet={[
          "La flexibilité est une compétence que je considère essentielle dans mon parcours. Mon objectif est de continuer à affiner ma capacité à m’adapter aux nouvelles situations, à gérer efficacement les changements et à optimiser ma manière de travailler en fonction des contextes. Que ce soit dans mon auto-entreprise ou dans mes collaborations professionnelles, cette compétence me permet d’aborder les défis avec sérénité et efficacité.",
        ]}
        importance={[
          "Pour moi, la flexibilité est indispensable pour un développeur. Elle permet de mieux gérer les évolutions technologiques, d’optimiser sa productivité et de s’adapter aux exigences des projets. Grâce à cette compétence, je peux naviguer entre différentes technologies, ajuster mes méthodes de travail et répondre aux attentes des clients avec agilité et réactivité.",
        ]}
      />
    </main>
  );
}
