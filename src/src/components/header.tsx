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
