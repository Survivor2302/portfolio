import Competences from "@/components/competences";

export default function Home() {
  return (
    <main className="md:px-28 px-8">
      <Competences
        logo="/images/git.png"
        title="Git"
        presentation={[
          "Git est un système de contrôle de version distribué largement utilisé pour suivre les modifications de fichiers dans le développement de logiciels. Il a été créé par Linus Torvalds en 2005 pour gérer le développement du noyau Linux. Git permet à plusieurs développeurs de collaborer sur des projets, de fusionner des modifications et de suivre l'historique des versions.",
          "Grâce à son modèle distribué, chaque développeur possède une copie complète du dépôt, ce qui améliore la résilience et la flexibilité du développement. Git offre également des fonctionnalités comme les branches, les fusions et les remises, qui facilitent la gestion des différentes versions du code.",
        ]}
        utilisations={[
          "J'ai commencé à utiliser Git dès mes premiers projets professionnels pour assurer le suivi des modifications et faciliter la collaboration en équipe. Lors du projet Gava, Git a été essentiel pour gérer les différentes fonctionnalités en parallèle grâce aux branches. Dans le cadre de Vidibio, j'ai utilisé Git pour synchroniser les développements avec l'équipe backend, tout en assurant une intégration continue grâce à des pipelines automatisés. Enfin, pour Theseus-AI, j'ai contribué à la mise en place de workflows Git avancés pour gérer les versions, les revues de code et les déploiements sur différentes environnements.",
        ]}
        maitrise={[
          "Je me considère comme «confirmé» en Git, à l'aise avec les commandes de base comme commit, merge, rebase, ainsi que les fonctionnalités avancées telles que les branches distantes, les workflows Gitflow et la gestion des conflits. J'ai également une bonne maîtrise des outils associés comme GitHub, GitLab et Bitbucket.",
        ]}
        formation={[
          "Je continue à approfondir mes connaissances en Git, notamment sur les fonctionnalités avancées comme les hooks, la gestion des sous-modules et l'automatisation des processus de révision de code grâce à GitHub Actions.",
        ]}
        conseils={[
          "Pour bien débuter avec Git, il est crucial de comprendre les concepts fondamentaux comme les commits, les branches et les fusions. Utiliser des plateformes comme GitHub pour collaborer sur des projets open-source permet de se familiariser avec les pratiques courantes. La lecture de la documentation officielle et la pratique régulière sur des projets concrets sont des moyens efficaces pour progresser.",
        ]}
        projet={[
          "Mon objectif est de continuer à perfectionner mes compétences en Git en automatisant davantage les workflows de développement. Je souhaite intégrer des pipelines CI/CD complexes et exploiter au maximum les fonctionnalités de gestion de version pour améliorer la qualité et la rapidité des livrables.",
        ]}
        importance={[
          "Git est une compétence essentielle pour tout développeur moderne, car il facilite la collaboration, la gestion des versions et la qualité du code. Il permet de maintenir un historique clair des modifications et de coordonner efficacement le travail entre plusieurs contributeurs, ce qui améliore la productivité et la fiabilité des projets.",
        ]}
      />
    </main>
  );
}
