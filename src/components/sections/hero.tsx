
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section id="club" className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center">
      <Image
        src="https://firebasestudio-hosting.web.app/projects/EUn5YGe4X1l9tqnDNYA9/images/2b73a628-868e-4a64-9a74-d02f5e3e2646.png"
        alt="Logo Alliance Sambo MMA"
        fill
        className="absolute inset-0 z-0 object-contain opacity-30"
        data-ai-hint="mma logo"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
      <div className="container relative z-20 flex flex-col items-center gap-6">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          <span className="text-primary">Alliance Sambo MMA:</span> La Référence Sambo & MMA
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl font-body">
          Rejoignez notre club de Sambo et MMA pour développer votre force, votre technique et votre discipline. Que vous soyez débutant ou compétiteur aguerri, nos entraîneurs experts vous guideront vers l'excellence.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#tarifs">Nos Tarifs</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#contact">Nous Contacter</Link>
          </Button>
           <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#essai-gratuit">Cours d'essai gratuit</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
