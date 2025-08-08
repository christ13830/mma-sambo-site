
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Download } from "lucide-react";
import Link from "next/link";

export function FreeTrial() {
  return (
    <section id="essai-gratuit" className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Cours d'essai gratuit</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
            Venez découvrir notre club, nos disciplines et notre ambiance. Votre premier cours est offert !
          </p>
        </div>
        <div className="flex justify-center mt-12">
           <Card className="max-w-2xl w-full shadow-lg text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary rounded-full text-primary-foreground">
                    <Dumbbell className="h-10 w-10" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-headline">Comment en profiter ?</CardTitle>
                <CardDescription>
                  C'est très simple. un certificat médical d'aptitude au Sambo , Téléchargez et remplissez le document correspondant à votre situation, puis contactez-nous pour nous prévenir de votre venue.
                </CardDescription>
                 <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                  <Button asChild variant="outline">
                    <Link href="https://drive.google.com/file/d/1-CbbUqY7W7sbS8RjmB8wEXjPHvHQ2vPo/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Document pour majeur
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="https://drive.google.com/file/d/1zbxjuZI8i3WdtYS8kOaCUtGO5oe70rko/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Document pour mineur
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-6">
                <p className="text-muted-foreground font-body">
                  Le cours d'essai est sans engagement et vous permettra de vous faire une idée précise de nos entraînements. C'est l'occasion idéale pour rencontrer notre entraîneur, poser vos questions et transpirer un bon coup. N'oubliez pas une tenue de sport et une bouteille d'eau !
                </p>
                <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="#contact">
                    Contacter le club pour mon essai
                  </Link>
                </Button>
              </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
