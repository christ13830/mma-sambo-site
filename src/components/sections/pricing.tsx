
"use client";
import React from "react";

export function Pricing() {
  const helloAssoUrl = "https://www.helloasso.com/associations/alliance-sambo-laciotat/adhesions/rejoignez-notre-club-de-sambo-mma-pour-la-saison-2025-2026/widget";

  return (
    <section id="tarifs" className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Tarifs et Adhésion</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
            Rejoignez notre club en remplissant le formulaire ci-dessous.
          </p>
        </div>
        <div className="flex justify-center mt-12 max-w-4xl mx-auto">
          <div className="w-full">
            <iframe
              id="haWidget"
              src={helloAssoUrl}
              style={{ width: "100%", height: "800px", border: "none" }}
              allowFullScreen
              title="Formulaire d'adhésion HelloAsso"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
