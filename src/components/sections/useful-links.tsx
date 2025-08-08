
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ExternalLink, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const links = [
  {
    category: "Fédérations et Comités",
    items: [
      { name: "Fédération Française de Lutte", url: "https://www.fflutte.com/", description: "Le site officiel de la Fédération Française de Lutte et Disciplines Associées." },
      { name: "Fédération Internationale de Sambo (FIAS)", url: "https://sambo.sport/", description: "Toutes les informations sur le Sambo au niveau mondial." },
    ]
  },
  {
    category: "Informations et Actualités MMA",
    items: [
      { name: "Sherdog", url: "https://www.sherdog.com/", description: "Une base de données complète sur les combattants, les événements et l'actualité du MMA." },
      { name: "UFC", url: "https://www.ufc.com/", description: "Le site officiel de l'Ultimate Fighting Championship (UFC)." },
      { name: "Fédération Française de Boxe (FFBoxe) / FMMAF", url: "https://www.ffboxe.com/connectez-vous-au-mma-francais/", description: "La structuration et le développement du MMA français passent par la FMMAF, organe rattaché à la Fédération Française de Boxe." },
      { name: "Fédération de MMA Français (FMMAF)", url: "https://www.fmmaf.fr", description: "Site officiel dédié à la fédération qui encadre la pratique et les clubs de MMA en France." },
      { name: "Fédération Française de Kickboxing, Muaythaï et Disciplines Associées (FFKMDA)", url: "https://www.ffkmda.com", description: "Autre structure officielle qui propose l’encadrement de sports et disciplines proches du MMA." },
      { name: "Fédération de Sports de Combat & Arts Martiaux (FSC France)", url: "https://www.fscfrance.fr", description: "Fédération multisports regroupant différentes disciplines de combat dont le MMA." },
      { name: "IMMAF (International Mixed Martial Arts Federation)", url: "https://immaf.org", description: "Fédération internationale de MMA, qui chapeaute la FMMAF et le développement du MMA en France." },
    ]
  },
  {
    category: "La Ciotat",
    items: [
       { name: "Site officiel de la Ville de La Ciotat", url: "https://www.laciotat.com", description: "Retrouvez toutes les démarches administratives, actualités, services municipaux, et informations pratiques de la commune." },
       { name: "Rubrique \"Actualités\" de la Ville de La Ciotat", url: "https://www.laciotat.com/actualite/les-actualites", description: "Toutes les dernières nouvelles, événements et informations pertinentes sur la vie de la commune." },
       { name: "Office de Tourisme de La Ciotat", url: "https://www.destinationlaciotat.com", description: "Idéal pour valoriser les activités, commerces et lieux touristiques auprès des habitants et visiteurs." },
       { name: "Annuaire de l’administration : Mairie de La Ciotat (Service-Public.fr)", url: "https://lannuaire.service-public.fr/provence-alpes-cote-d-azur/bouches-du-rhone/7edeab62-1657-4fd4-b1c0-0942cfec4e42", description: "Fiche officielle de l’établissement public avec coordonnées et liens utiles." },
       { name: "Services municipaux de La Ciotat", url: "https://www.laciotat.com/component/adirectory/adirectory/blog/3-services-municipaux", description: "Liste détaillée des services administratifs et culturels, contacts et adresses utiles de la ville." },
       { name: "Guichet Unique Associations", url: "https://www.laciotat.com/loisirs-et-sports/espace-association/1080-le-guichet-unique-associations", description: "Le portail pour les associations de la ville de La Ciotat." },
    ]
  },
  {
    category: "Roquefort-la-Bédoule",
    items: [
      { name: "Site officiel de la Mairie de Roquefort-la-Bédoule", url: "https://www.roquefort-labedoule.fr/fr/mairie", description: "Informations municipales, démarches administratives, actualités et contact direct avec les services de la ville." },
      { name: "Page d’accueil de la Mairie de Roquefort-la-Bédoule", url: "https://www.roquefort-labedoule.fr/fr/", description: "Accueil, agenda local, événements, vie municipale et informations pratiques pour habitants et entreprises." },
      { name: "Annuaire Service-Public.fr – Fiche Mairie de Roquefort-la-Bédoule", url: "https://lannuaire.service-public.fr/provence-alpes-cote-d-azur/bouches-du-rhone/a0ca5a0f-4208-46c2-9e9b-5cfcca101260", description: "Coordonnées officielles, horaires, services proposés et informations institutionnelles." },
      { name: "Annuaire-Mairie.fr – Mairie et commune de Roquefort-la-Bédoule", url: "https://www.annuaire-mairie.fr/ville-roquefort-la-bedoule.html", description: "Présentation détaillée de la commune, coordonnées, élus municipaux, démarches courantes et données administratives." },
      { name: "Wikipédia – Roquefort-la-Bédoule", url: "https://fr.wikipedia.org/wiki/Roquefort-la-B%C3%A9doule", description: "Contexte géographique, historique, démographique et institutionnel de la commune." },
    ]
  }
];

export function UsefulLinks() {
  return (
    <section id="liens-divers" className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <LinkIcon className="h-12 w-12 text-primary" />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Liens Divers</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
            Découvrez une sélection de ressources utiles pour les passionnés de Sambo et de MMA.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-12">
          <Accordion type="single" collapsible className="w-full">
            {links.map((linkCategory, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-xl font-headline hover:no-underline">{linkCategory.category}</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-4 pl-4">
                    {linkCategory.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Button asChild variant="link" className="p-0 h-auto text-base text-accent font-semibold">
                          <Link href={item.url} target="_blank" rel="noopener noreferrer">
                            {item.name}
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
