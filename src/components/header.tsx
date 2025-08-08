
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Shield } from "lucide-react";
import React from "react";

const navLinks = [
  { href: "#club", label: "Le Club" },
  { href: "#cours", label: "Cours" },
  { href: "#historique", label: "Historique Sambo" },
  { href: "#champions-mma", label: "Champions MMA" },
  { href: "#horaires", label: "Horaires" },
  { href: "#entraineurs", label: "Entraîneurs" },
  { href: "#galerie", label: "Galerie" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#partenaires", label: "Partenaires" },
  { href: "#essai-gratuit", label: "Cours d'essai" },
  { href: "#contact", label: "Contact" },
  { href: "#liens-divers", label: "Liens divers" },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-lg font-headline">Alliance Sambo MMA</span>
          </Link>
        </div>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${link.href}`}
              className="transition-colors hover:text-foreground/80 text-foreground/60 font-body"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2 md:ml-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col h-full">
                <div className="mt-8 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={`/${link.href}`}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium transition-colors hover:text-primary font-body"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-auto">
                   <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/#tarifs" onClick={() => setIsOpen(false)}>S'inscrire</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
