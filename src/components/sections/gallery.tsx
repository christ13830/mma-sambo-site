
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const galleryItems = [
  { src: "https://lh3.googleusercontent.com/p/AF1QipPwkUA0oNrrEBesJwYWQIS6AVqmI0sgdbbcvY3M=w600-h485-p-k-no", alt: "MMA sparring session", hint: "mma sparring" },
  { src: "https://lh3.googleusercontent.com/p/AF1QipPy_rXNBs9xU1l9Y5WIQA4eFhM2l7rmJUeAfTA9=s680-w680-h510-rw", alt: "Training area", hint: "gym dojo" },
  { src: "https://lh3.googleusercontent.com/p/AF1QipOmilC_jPKOh6jULl5XbKu2ba6ILXR9iMaJ-pce=s680-w680-h510-rw", alt: "Training session", hint: "gym training" },
  { src: "https://lh3.googleusercontent.com/p/AF1QipPDuiSGMooxh3fU2cVT3iZ-WMbvHteob9y53LH5=s680-w680-h510-rw", alt: "Club members", hint: "team photo" },
];

export function Gallery() {
  return (
    <section id="galerie" className="py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Galerie Photos & Vidéos</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
            Plongez dans l'action et l'ambiance de notre club.
          </p>
        </div>
        <div className="mt-12 flex justify-center">
            <Carousel className="w-full max-w-4xl" opts={{ loop: true }}>
              <CarouselContent>
                {galleryItems.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="overflow-hidden">
                        <CardContent className="flex aspect-video items-center justify-center p-0">
                           <Image
                              src={item.src}
                              alt={item.alt}
                              width={1200}
                              height={800}
                              className="w-full h-full object-cover"
                              data-ai-hint={item.hint}
                            />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>
      </div>
    </section>
  );
}
