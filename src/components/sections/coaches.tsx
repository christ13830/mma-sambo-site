
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const coachesData = [
  {
    name: "Christophe",
    specialty: "Sambo, MMA & Préparation Physique",
    experience: "Fondateur du club, ceinture noire de Sambo et expert en MMA. Il est titulaire du BPJEPS APT, du DIF SAMBO et du Brevet du Moniteur Fédéral 3° « Sports de contact ». Avec plus de 20 ans d'expérience dans l'enseignement et la compétition, il est spécialisé dans le développement complet des combattants.",
    avatar: "https://lh3.googleusercontent.com/p/AF1QipOyzS-nfQdaKPy6avHplHB9KxRgkcHaSpWHg0YU=s680-w680-h510-rw",
    aiHint: "male coach"
  },
];

export function Coaches() {
  return (
    <section id="entraineurs" className="py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Notre Entraîneur</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
            Un expert passionné pour vous accompagner dans votre progression.
          </p>
        </div>
        <div className="flex justify-center mt-12">
          {coachesData.map((coach, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src={coach.avatar} alt={coach.name} data-ai-hint={coach.aiHint} />
                <AvatarFallback>{coach.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <CardHeader className="p-0">
                <CardTitle className="font-headline">{coach.name}</CardTitle>
                <CardDescription className="text-primary font-semibold">{coach.specialty}</CardDescription>
              </CardHeader>
              <CardContent className="p-0 mt-4">
                <p className="text-muted-foreground font-body">{coach.experience}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
