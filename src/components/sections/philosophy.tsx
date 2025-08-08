
import { CheckCircle2 } from "lucide-react";

const principles = [
  "Progression personnalisée",
  "Respect et discipline",
  "Dépassement de soi",
  "Esprit d'équipe et entraide",
];

const eclPrinciples = [
    {
        title: "Contexte Écologique",
        description: "ECL considère que l'apprentissage est influencé par le contexte dans lequel il se produit. Cela inclut les caractéristiques de l'environnement, les contraintes de la tâche et les capacités de l'apprenant."
    },
    {
        title: "Contraintes",
        description: "L'approche se concentre sur les contraintes (physiques, sociales, cognitives) qui influencent la performance. Ces contraintes peuvent guider les apprenants vers des solutions créatives et adaptées."
    },
    {
        title: "Adaptation",
        description: "Les apprenants sont encouragés à s'adapter aux différentes situations et à développer des compétences en résolvant des problèmes dans des contextes variés."
    },
    {
        title: "Apprentissage Actif",
        description: "ECL favorise l'apprentissage actif, où les apprenants explorent et expérimentent plutôt que de recevoir des instructions passives."
    },
    {
        title: "Individualisation",
        description: "Chaque apprenant est unique, et l'approche ECL prend en compte les différences individuelles pour personnaliser l'apprentissage."
    },
    {
        title: "Transfert des Compétences",
        description: "L'objectif est de développer des compétences transférables, permettant aux apprenants de s'adapter à de nouveaux environnements et situations."
    }
]

export function Philosophy() {
  return (
    <section id="pedagogie" className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Notre Pédagogie</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
            Nous croyons en une approche qui allie excellence technique et développement personnel.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <h3 className="text-2xl font-bold font-headline">Une approche holistique</h3>
            <p className="text-muted-foreground font-body">
              Notre méthode d'enseignement vise à développer chaque membre dans sa globalité. Nous ne nous concentrons pas uniquement sur la technique de combat, mais aussi sur les valeurs fondamentales des arts martiaux. La confiance en soi, la gestion du stress et la persévérance sont au cœur de notre pédagogie.
            </p>
            <ul className="grid gap-4">
              {principles.map((principle, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-body">{principle}</span>
                </li>
              ))}
            </ul>
             <div className="pt-6 space-y-4">
                <h3 className="text-2xl font-bold font-headline">L'approche "Ecological Constraints Led" (ECL)</h3>
                 <p className="text-muted-foreground font-body">
                    C'est une méthode centrée sur l'apprenant, qui met l'accent sur l'interaction entre l'individu et son environnement. Voici les principaux éléments de cette approche :
                </p>
                 <ul className="grid gap-4">
                    {eclPrinciples.map((principle, index) => (
                        <li key={index} className="flex items-start gap-4">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <span className="font-semibold">{principle.title}</span>
                            <p className="text-sm text-muted-foreground">{principle.description}</p>
                        </div>
                        </li>
                    ))}
                </ul>
            </div>
          </div>
          <div className="w-full aspect-video rounded-xl overflow-hidden sticky top-24">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ADgiBUC0LQw?si=3POPMHfonBpiKFm1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
