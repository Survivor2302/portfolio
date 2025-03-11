import Competences from "@/components/competences";

export default function Home() {
  return (
    <main className="md:px-28 px-8">
      <Competences
        logo="/images/java.png"
        title="Java"
        presentation={[
          "Java est un langage de programmation orienté objet, robuste et polyvalent, créé par Sun Microsystems en 1995 et désormais maintenu par Oracle. Connu pour sa portabilité, Java fonctionne sur le principe du 'Write Once, Run Anywhere' (WORA), ce qui signifie qu’un programme écrit en Java peut s’exécuter sur n’importe quelle plateforme dotée de la machine virtuelle Java (JVM).",
          "Le langage est utilisé dans de nombreux domaines, allant des applications mobiles et web aux systèmes embarqués et logiciels d’entreprise. Grâce à sa richesse en bibliothèques et frameworks, Java permet aux développeurs de concevoir des applications fiables, sécurisées et performantes.",
        ]}
        utilisations={[
          "Java a été une compétence clé dans plusieurs de mes projets professionnels. Dans le cadre du projet Vidibio, une application mobile développée en React Native, j’ai créé un module natif pour Android en Java afin d’intégrer les fonctionnalités d'ARCore, permettant de scanner et d’analyser les haies bocagères avec précision. Ce module a été essentiel pour exploiter pleinement les capacités de réalité augmentée sur la plateforme Android.",
          "Dans le projet Gava, Java a été utilisé côté back-end pour développer une API Java EE qui gérait les données du site web, notamment l’authentification des utilisateurs, la gestion des joueurs et l’organisation des tournois. Cette API a permis d’assurer une communication fluide et sécurisée entre le front-end et le serveur, tout en garantissant la scalabilité du système.",
          "Enfin, pour le projet Optivex, j’ai contribué au développement d’une application mobile destinée à UPSA. Cette application a été conçue pour informatiser le suivi logistique des livraisons internes par camions et livreurs. L’implémentation en Java a permis de structurer efficacement le suivi des données et d’optimiser les processus logistiques en temps réel.",
        ]}
        maitrise={[
          "Je situe mon niveau de compétence en Java à « confirmé ». Je suis à l’aise avec la programmation orientée objet, les concepts avancés du langage, et l’utilisation de framework tel que Java EE. Mon expérience inclut la création de modules natifs pour Android, le développement d’API robustes et la gestion d’applications mobiles complexes. Ces compétences m’ont permis de répondre à des exigences variées tout en respectant les contraintes de performance et de sécurité.",
        ]}
        formation={[
          "Bien que j’aie quelque peu délaissé Java pour me concentrer sur d’autres technologies, je reste informé des nouveautés et continue à m’auto-former sur les outils et frameworks qui facilitent son développement. Je m’intéresse toujours à son utilisation dans le contexte des microservices, notamment avec Spring Boot, pour concevoir des systèmes modulaires, résilients et scalables.",
        ]}
        conseils={[
          "À mon avis, pour bien apprendre Java, il faut commencer par le faire de manière native, c’est-à-dire en travaillant uniquement avec le Java pur, sans frameworks ni outils supplémentaires. C’est vraiment important pour comprendre comment tout fonctionne en profondeur et pour poser des bases solides en programmation orientée objet. Une fois qu’on est à l’aise avec ça, on peut ajouter des outils comme Maven ou Gradle et explorer des frameworks comme Java EE ou Spring. Ça permet d’élargir ses compétences tout en ayant une meilleure compréhension de ce qu’on fait. Travailler sur des projets concrets est aussi une excellente façon de mettre en pratique et d’apprendre de manière progressive.",
        ]}
        projet={[
          "Pour l'instant, je préfère m'orienter vers d'autres technologies, que ce soit dans le cadre professionnel ou personnel. Cependant, si des opportunités liées à Java se présentent à moi, je les accepterais avec plaisir. Même si je n'y consacre pas autant de temps qu'avant, je garde un réel intérêt pour ce langage et continue de m'informer sur ses nouveautés, car je reste curieux des possibilités qu'il peut offrir.",
        ]}
        importance={[
          "Pour moi, Java est une compétence vraiment importante, car c’est grâce à ce langage que j’ai appris les principes fondamentaux de la programmation orientée objet ainsi que la gestion des données. J’ai beaucoup apprécié travailler avec cette technologie qui m’a permis de développer des solutions robustes et efficaces. Sa fiabilité, sa portabilité et sa richesse en bibliothèques en font un choix privilégié pour développer des applications critiques. Ma maîtrise de Java m’a aidé à apporter des solutions de qualité tout en optimisant mon efficacité sur les projets. Cette compétence reste un atout majeur pour concevoir des systèmes fiables et innovants.",
        ]}
      />
    </main>
  );
}
