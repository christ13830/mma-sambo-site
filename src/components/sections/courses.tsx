
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Zap } from "lucide-react";

const coursesData = [
  {
    title: "SAMBO MMA tout niveaux",
    icon: <Users className="h-10 w-10 text-primary" />,
    subtitle: "Maîtrisez les techniques de combat debout et au sol, adaptées à tous les niveaux.",
    description: "Ce cours complet intègre les fondamentaux du Sambo (lutte, projections, soumissions) et du MMA (frappes, grappling). Que vous soyez débutant ou expérimenté, vous développerez votre technique, votre condition physique et votre stratégie de combat dans un environnement sécurisé et stimulant. L'accent est mis sur la polyvalence et l'efficacité en situation réelle."
  },
  {
    title: "Cross Training",
    icon: <Zap className="h-10 w-10 text-primary" />,
    subtitle: "Améliorez votre force, votre endurance et votre agilité pour optimiser vos performances.",
    description: "Nos séances de Cross Training sont conçues pour compléter votre entraînement en arts martiaux. Elles ciblent le développement de la force fonctionnelle, de l'endurance cardiovasculaire et de la puissance explosive, essentielles pour les sports de combat. Adapté à tous les niveaux, ce cours vous aidera à repousser vos limites physiques et à prévenir les blessures."
  }
];

export function Courses() {
  return (
    <section id="cours" className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Nos Cours</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
            Des programmes complets pour forger des combattants polyvalents et des athlètes accomplis.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
          {coursesData.map((course, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center text-center">
                {course.icon}
                <CardTitle className="font-headline text-2xl mt-4">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-semibold text-primary mb-4 font-body">{course.subtitle}</p>
                <p className="text-muted-foreground font-body">{course.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
