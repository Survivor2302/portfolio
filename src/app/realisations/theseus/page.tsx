import Card from "@/components/card";
import Realisations from "@/components/realisations";

export default function Realisation() {
  return (
    <main className="scroll-smooth overflow-auto mb-28">
      <section className="pt-36 pb-24 md:px-28 px-8 ">
        <Realisations
          img="/images/veigar.jpg"
          title="Theseus"
          missions={[
            "Vidibio, une startup avant-gardiste dans le domaine de la technologie agricole, se consacre à révolutionner les pratiques agricoles par le biais de solutions technologiques innovantes. Notre mission était de concevoir et développer une application mobile et une API qui permettraient aux agriculteurs et aux techniciens agricoles de scanner des haies, de collecter des données détaillées sur la biomasse et la biodiversité, et de fournir des analyses précises pour une gestion optimale des ressources naturelles. Cette initiative visait à promouvoir une agriculture plus durable et écologiquement responsable, en utilisant la technologie pour améliorer la qualité et la précision des informations environnementales disponibles.",
          ]}
          role={[
            "En tant que Développeur Full-Stack, j'étais responsable de la conception, du développement et de l'implémentation de l'ensemble de la solution, couvrant à la fois le backend et le frontend de l'application. Mon rôle impliquait également la gestion de la base de données, l'assurance de la sécurité des données, et l'intégration de diverses technologies de pointe pour assurer une expérience utilisateur fluide et efficace.",
          ]}
          technologies={[
            "Le projet a été développé en utilisant une combinaison de technologies modernes et robustes. Pour le backend, nous avons utilisé Python avec Django et FastAPI pour une gestion efficace des requêtes et une intégration facile avec d'autres services. Le frontend a été développé avec React Native pour l'application mobile et React pour l'application web, permettant une expérience utilisateur cohérente et réactive sur divers appareils. Docker et Kubernetes ont été utilisés pour le déploiement et la gestion de l'infrastructure, assurant une scalabilité et une maintenance aisée. ",
            "ARCore et Mapbox ont été intégrés pour enrichir l'application mobile avec des fonctionnalités de réalité augmentée et de cartographie interactive.",
          ]}
          client={[
            "Vidibio est une entreprise innovante dans le secteur de l'agrotechnologie, dédiée à l'amélioration des pratiques agricoles à travers la technologie. Leur engagement envers la durabilité et l'innovation a guidé le développement de l'application, visant à fournir aux agriculteurs des outils précis pour la gestion de l'environnement.",
          ]}
          objectif={[
            "Le projet avait pour objectif de fournir une solution technologique qui non seulement facilite la collecte de données environnementales par les utilisateurs mais aussi améliore la précision et la fiabilité de ces données. Les enjeux étaient de taille, notamment en termes de précision des données, de facilité d'utilisation de l'application, et de sécurité des données collectées. L'application devait être capable de fonctionner dans diverses conditions environnementales et être accessible à un large éventail d'utilisateurs, nécessitant une conception robuste et adaptable.",
          ]}
          galerie={[
            "La fonctionnalité clé de l'application était sa carte interactive, développée avec Mapbox, qui affichait les haies scannées avec des détails enrichis pour chaque point. Cette carte permettait non seulement de visualiser les données mais aussi d'interagir avec elles, offrant aux utilisateurs la possibilité de zoomer sur des zones spécifiques, d'obtenir des informations détaillées sur la biodiversité et la biomasse, et de visualiser des modèles 3D des haies. Cette interactivité améliorait l'engagement des utilisateurs et leur permettait de comprendre mieux l'impact de leurs pratiques agricoles sur l'environnement.",
          ]}
          processus={[
            "Le développement de l'application Vidibio a été un processus exhaustif qui a commencé par une phase de planification détaillée, où les besoins du client et les spécifications techniques ont été soigneusement analysés. Cette phase a été suivie par le développement de prototypes, permettant de tester différentes approches et technologies avant de finaliser la conception. Une fois les prototypes approuvés, le développement complet a commencé, avec une attention particulière portée à l'expérience utilisateur, à la sécurité des données, et à l'intégration des fonctionnalités de réalité augmentée et de cartographie. Le processus incluait des tests réguliers pour s'assurer que chaque aspect de l'application répondait aux attentes en termes de performance et de fiabilité.",
          ]}
          conclusions={[
            "Le projet Vidibio a été une aventure technologique et professionnelle extrêmement enrichissante. Il a non seulement permis de mettre en œuvre des solutions technologiques avancées pour répondre à des défis environnementaux complexes mais a aussi offert une plateforme pour affiner mes compétences en développement full-stack. La collaboration étroite avec Vidibio et leur engagement envers l'innovation ont été cruciaux pour le succès du projet. Ce projet a démontré l'importance cruciale de la technologie dans la transformation des pratiques agricoles et a renforcé mon engagement envers le développement de solutions technologiques qui favorisent la durabilité et l'efficacité.",
          ]}
        />
      </section>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-8 mt-2 pb-12">
        <Card
          img="/images/autonomie.png"
          titre="Autonomie"
          href="/competences/humaines/autonomie"
          text="Git est un système de contrôle..."
        />
        <Card
          img="/images/flexibilite.png"
          titre="Flexibilité"
          href="/competences/humaines/flexibilite"
          text="Git est un système de contrôle..."
        />
        <Card
          img="/images/git.png"
          titre="Git"
          href="/competences/techniques/git"
          text="Git est un système de contrôle..."
        />
        <Card
          img="/images/typescript.png"
          titre="Typescript"
          href="/competences/techniques/typescript"
          text="Git est un système de contrôle..."
        />
        <Card
          img="/images/docker.png"
          titre="Docker"
          href="/competences/techniques/docker"
          text="Git est un système de contrôle..."
        />
      </div>
    </main>
  );
}
