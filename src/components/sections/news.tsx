
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const newsData = [
  {
    title: "Comprendre l'Approche Pédagogique Ecological Constraints Led",
    date: "20 Juin 2024",
    excerpt: "L’éducation moderne évolue constamment, cherchant des méthodes d’enseignement qui répondent aux besoins diversifiés des apprenants. Parmi les approches innovantes, l'Ecological Constraints Led (ECL) se distingue...",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.zjCGWTQDM4R_m5pkFrWj7wHaCq%3Fpid%3DApi&f=1&ipt=ba2dec5a86aa8d5866fad31f3b37ec6b358bc235adadfd18bbc63ef49b2df416&ipo=images",
    aiHint: "diagram learning",
    slug: "/news/ecological-constraints-led"
  },
  {
    title: "Pourquoi les Combattants Daghestanais Sont-Ils Si Forts en MMA ?",
    date: "25 Juin 2024",
    excerpt: "Le MMA a vu émerger des combattants exceptionnels, mais rares sont ceux qui ont eu un impact aussi significatif que les athlètes daghestanais...",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.osPlngcC5SylG5J_2Krh2AHaE6%3Fr%3D0%26pid%3DApi&f=1&ipt=a568fa33b05511ae5df91cb9021646ae93a5cd35488f226d76994ffa2b1b94f7&ipo=images",
    aiHint: "dagestan fighter",
    slug: "/news/daghestan-fighters"
  },
  {
    title: "L'Ascension du MMA : Un Voyage à Travers l'Histoire",
    date: "1 Juillet 2024",
    excerpt: "Le Mixed Martial Arts (MMA) a connu une croissance explosive ces dernières décennies, captivant des millions de fans à travers le monde. Mais d'où vient ce sport fascinant ?",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP._1x8ZIkhDOqRxztQXFyasAHaEO%3Fpid%3DApi&f=1&ipt=15078da50b484ae343bc9ff5ebcca6089bcf565dec2a5aa9ef7a316ee3c240fd&ipo=images",
    aiHint: "mma history",
    slug: "/news/mma-history"
  },
];

export function News() {
  return (
    <section id="actualites" className="py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Actualités du Club</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
            Restez informé des derniers événements, conseils et nouvelles du club.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {newsData.map((article, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href={article.slug}>
                <Image src={article.image} alt={article.title} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={article.aiHint} />
              </Link>
              <CardHeader>
                <CardTitle className="font-headline">
                   <Link href={article.slug} className="hover:text-primary transition-colors">
                    {article.title}
                   </Link>
                </CardTitle>
                <CardDescription>{article.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground font-body">{article.excerpt}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild variant="link" className="p-0 text-primary">
                  <Link href={article.slug}>
                    Lire la suite <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
