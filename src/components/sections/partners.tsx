
import Image from "next/image";
import Link from "next/link";
import { Handshake } from "lucide-react";

const partnersData = [
  {
    name: "Mairie de La Ciotat",
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nacarat-design.com%2Fwp-content%2Fuploads%2F2021%2F01%2FVille-de-La-Ciotat.jpg&f=1&nofb=1&ipt=63e44e0def8653fc589bb489e63cd29a9a86069941199e6dfa2f329ec9376d99",
    url: "https://www.laciotat.com/",
    aiHint: "city logo"
  },
  {
    name: "Mairie de Roquefort-la-Bédoule",
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.roquefort-labedoule.fr%2F_8%2Fimages%2Flogo.png&f=1&nofb=1&ipt=31dd7ac473a1fa0578466ecd654b1ee5c63619c15055ff9cfa3b50e0701bd1d1",
    url: "https://www.roquefort-labedoule.fr/",
    aiHint: "city logo"
  },
];

export function Partners() {
  return (
    <section id="partenaires" className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Handshake className="h-12 w-12 text-primary" />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Nos Partenaires</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
            Ils nous soutiennent et nous font confiance. Un grand merci à eux.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-2 gap-8 items-center justify-items-center max-w-lg mx-auto">
          {partnersData.map((partner, index) => (
            <Link key={index} href={partner.url} target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={150}
                className="object-contain w-32 h-32 sm:w-40 sm:h-40"
                data-ai-hint={partner.aiHint}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
