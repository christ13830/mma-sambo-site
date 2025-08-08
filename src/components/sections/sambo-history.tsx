
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookMarked } from "lucide-react";

const historyData = [
    {
        period: "Origines (années 1920)",
        points: [
            "Création : Le sambo a été développé dans les années 1920 en Union soviétique. Son nom est un acronyme pour 'SAMozashchita Bez Oruzhiya', qui signifie 'auto-défense sans arme'.",
            "But : Le sambo a été conçu pour améliorer les compétences des militaires soviétiques en combat rapproché.",
        ],
    },
    {
        period: "Développement (années 1930-1940)",
        points: [
            "Inspiration : Il s'inspire de différentes luttes traditionnelles russes et de disciplines étrangères, notamment le judo japonais.",
            "Système de formation : Un système de formation structuré a été mis en place pour enseigner les techniques de combat.",
        ],
    },
    {
        period: "Reconnaissance officielle (années 1950)",
        points: [
            "Compétitions : Le sambo a commencé à être pratiqué dans des compétitions officielles, d'abord en Union soviétique, puis à l'international.",
            "Fédération : En 1938, la première fédération de sambo a été fondée en URSS.",
        ],
    },
    {
        period: "Expansion mondiale (années 1960-1980)",
        points: [
            "Popularité : Le sambo s'est répandu dans d'autres pays, notamment en Europe de l'Est et en Asie.",
            "Compétitions internationales : Des championnats mondiaux de sambo ont été organisés, permettant aux meilleurs combattants de se mesurer.",
        ],
    },
    {
        period: "Évolution moderne (années 1990 à aujourd'hui)",
        points: [
            "Styles : Le sambo se divise principalement en deux styles : le sambo sportif (similaire au judo) et le sambo de combat (avec des techniques de frappe).",
            "MMA : De nombreux pratiquants de sambo se sont illustrés dans les arts martiaux mixtes (MMA), en raison de la polyvalence des techniques.",
        ],
    },
     {
        period: "Impact culturel",
        points: [
            "Identité russe : Le sambo est devenu un symbole de la culture russe et de l'identité nationale, souvent associé à la force et à la discipline.",
            "Le sambo continue de croître en popularité à travers le monde, avec un nombre croissant de clubs et de compétitions.",
        ],
    },
];

export function SamboHistory() {
  return (
    <section id="historique" className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <BookMarked className="h-12 w-12 text-primary" />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Historique du Sambo</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
            Un art martial et un sport de combat d'origine russe, qui combine des éléments de judo, de lutte et d'autres disciplines.
          </p>
        </div>
        <div className="grid gap-8 mt-12 max-w-4xl mx-auto">
          {historyData.map((era, index) => (
             <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                    <CardTitle className="font-headline text-xl">{era.period}</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                    {era.points.map((point, pIndex) => (
                        <li key={pIndex} className="text-muted-foreground font-body">{point}</li>
                    ))}
                    </ul>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
