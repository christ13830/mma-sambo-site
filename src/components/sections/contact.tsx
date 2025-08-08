
"use client";

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ExternalLink, Loader2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useToast } from '@/hooks/use-toast';
import { sendContactEmail } from '@/ai/flows/sendContactEmail';
import { SendContactEmailInputSchema, type SendContactEmailInput } from '@/ai/schemas/contactEmailSchema';

const formSchema = SendContactEmailInputSchema;

type FormValues = SendContactEmailInput;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitting(true);
    try {
      const result = await sendContactEmail(data);
      if (result.success) {
        toast({
          title: "Message envoyé !",
          description: "Nous avons bien reçu votre message et vous répondrons bientôt.",
        });
        reset();
      } else {
        throw new Error(result.message || "Une erreur est survenue.");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: error instanceof Error ? error.message : "Impossible d'envoyer le message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Contactez-nous</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
            Une question ? Une demande d'inscription ? Nous sommes là pour vous répondre.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mt-12 max-w-6xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Envoyer un message</CardTitle>
              <CardDescription>Remplissez le formulaire et nous vous recontacterons rapidement.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="Votre nom" {...register('name')} />
                    {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <Input type="email" placeholder="Votre email" {...register('email')} />
                    {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
                  </div>
                </div>
                <div>
                  <Input placeholder="Sujet" {...register('subject')} />
                  {errors.subject && <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>}
                </div>
                <div>
                  <Textarea placeholder="Votre message" rows={5} {...register('message')} />
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isSubmitting}>
                  {isSubmitting ? <Loader2 className="animate-spin" /> : "Envoyer"}
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-6 flex flex-col justify-center">
            <Tabs defaultValue="la-bedoule" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="la-bedoule">La Bédoule</TabsTrigger>
                <TabsTrigger value="la-ciotat">La Ciotat</TabsTrigger>
              </TabsList>
              <TabsContent value="la-bedoule">
                <div className="relative w-full h-64 md:h-80 mt-4 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.160448980139!2d5.585898999999998!3d43.248059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9a4ebb0a2df29%3A0x9add1427fb18e252!2sAlliance%20Sambo%20MMA!5e0!3m2!1sfr!2sfr!4v1752843394197!5m2!1sfr!2sfr"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
                <div className="flex items-start gap-4 mt-4">
                  <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full p-3">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold">Adresse (La Bédoule)</h4>
                    <p className="text-muted-foreground">Gymnase de la Bedoule, 13830 Roquefort-la-Bédoule, France</p>
                     <Button asChild variant="link" className="p-0 h-auto mt-2 text-accent">
                        <Link href="https://share.google/x6gPO7b1RZ8lbqDHw" target="_blank" rel="noopener noreferrer">
                          Voir sur Google Maps <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="la-ciotat">
                <div className="relative w-full h-64 md:h-80 mt-4 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5819.211037012321!2d5.600121!3d43.175804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9af9ef36767d7%3A0x60424315f3866d1e!2sAlliance%20Sambo%20MMA%20(%20Arts%20martiaux%20-%20Sport%20de%20combat)!5e0!3m2!1sfr!2sfr!4v1752843470413!5m2!1sfr!2sfr"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
                 <div className="flex items-start gap-4 mt-4">
                  <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full p-3">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold">Adresse (La Ciotat)</h4>
                    <p className="text-muted-foreground">Complexe Etienne Masse, Av. de la Pétanque, 13600 La Ciotat</p>
                    <Button asChild variant="link" className="p-0 h-auto mt-2 text-accent">
                        <Link href="https://share.google/JmxRuejnafVohRQ9N" target="_blank" rel="noopener noreferrer">
                          Voir sur Google Maps <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full p-3">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold">Téléphone</h4>
                <p className="text-muted-foreground">+33 6 09 45 46 66 ou +33 6 12 51 47 35</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full p-3">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-muted-foreground">alliancesambo@outlook.fr</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
