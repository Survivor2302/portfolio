import Competences from "@/components/competences";

export default function Home() {
  return (
    <main className="md:px-28 px-8">
      <Competences
        logo="/images/kubernetes.png"
        title="Kubernetes"
        presentation={[
          "Kubernetes est une plateforme open-source conçue pour automatiser le déploiement, la mise à l’échelle et la gestion des applications conteneurisées. Créée par Google, Kubernetes est devenue une référence incontournable pour orchestrer des conteneurs à grande échelle. Elle permet de répartir les charges, de surveiller les applications et de garantir leur disponibilité, tout en simplifiant la gestion des infrastructures complexes.",
        ]}
        utilisations={[
          "J’ai utilisé Kubernetes dans plusieurs projets significatifs pour optimiser la gestion et l’orchestration des conteneurs. Dans le cadre du projet Vidibio, j’ai géré un cluster Kubernetes comprenant plusieurs nœuds. J’ai orchestré différents pods, notamment pour la base de données, des serveurs de sauvegarde, l’API principale et un service de traitement d’images. Ce projet m’a permis de configurer et gérer des ressources essentielles comme les load balancers et les volumes, garantissant ainsi une répartition efficace des charges et une disponibilité optimale des services.",
          "Dans le projet Theseus-AI, j’ai utilisé Kubernetes de manière plus ciblée pour configurer un load balancer capable de gérer efficacement les requêtes envoyées au serveur de bots. Cette configuration permettait d’ouvrir ou de fermer dynamiquement des serveurs en fonction de l’utilisation, offrant une solution flexible et adaptée aux besoins fluctuants de l’application.",
        ]}
        maitrise={[
          "Je situe mon niveau de compétence en Kubernetes à 'autonome'. Au cours de mes expériences précédentes, j’ai mis un effort particulier à comprendre en profondeur le fonctionnement de Kubernetes, ce qui m’a permis de maîtriser les concepts fondamentaux comme la gestion des pods, des services, des volumes et des load balancers. Bien que je maîtrise le sujet et sois capable de gérer des clusters et des infrastructures de manière indépendante, je continue de me former pour explorer davantage les aspects avancés et perfectionner mes compétences.",
        ]}
        formation={[
          "Je continue d’approfondir mes connaissances en Kubernetes, car j’apprécie particulièrement cette technologie et la trouve extrêmement pratique. J’aime découvrir de nouvelles configurations et cas d’usage, ce qui me permet de mieux comprendre son fonctionnement et de perfectionner mes compétences. Mon objectif est d’améliorer ma maîtrise pour gérer des environnements encore plus complexes et proposer des solutions toujours plus efficaces.",
        ]}
        conseils={[
          "Pour débuter avec Kubernetes, je recommande de se familiariser avec ses concepts de base comme les pods, les services et les déploiements. Une fois ces fondamentaux maîtrisés, il est utile de travailler sur des projets réels pour comprendre comment orchestrer des conteneurs et gérer les ressources. L’utilisation d’outils complémentaires comme Helm pour gérer les configurations et Minikube pour tester localement peut également accélérer l’apprentissage.",
        ]}
        projet={[
          "Kubernetes est une technologie que je trouve fascinante, car elle offre des solutions puissantes pour gérer des infrastructures complexes. Mon objectif est de continuer à l’utiliser dans mes futurs projets, qu’ils soient personnels ou professionnels, pour garantir la scalabilité, la disponibilité et la robustesse des applications. En approfondissant mes connaissances, je souhaite devenir une référence dans l’orchestration de conteneurs et aider à concevoir des systèmes modernes et résilients.",
        ]}
        importance={[
          "Pour moi, Kubernetes est une compétence essentielle dans le développement et la gestion d’infrastructures modernes. Il simplifie l’orchestration des conteneurs et offre des outils puissants pour garantir la fiabilité et la scalabilité des applications. Que ce soit pour gérer un cluster complet dans Vidibio ou pour configurer un load balancer dans Theseus-AI, Kubernetes m’a permis d’optimiser l’utilisation des ressources et de garantir des performances élevées. C’est un outil indispensable pour tout développeur ou architecte travaillant avec des environnements distribués.",
        ]}
      />
    </main>
  );
}
