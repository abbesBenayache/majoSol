"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import siteConfig from "@/data/site-config.json";

const contactSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  subject: z.string().min(1, "Le sujet est requis"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export default function ContactPage() {
  const config = siteConfig;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    setIsSubmitting(true);
    // Simuler un envoi (pas d'envoi réel en V0)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSuccess(true);
    form.reset();
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen">
        <section className="gradient-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{config.contact.successTitle}</h1>
            <p className="text-xl text-white/95 max-w-2xl mx-auto">
              {config.contact.successMessage}
            </p>
          </div>
        </section>
        <div className="container mx-auto px-4 py-12 text-center">
          <Button onClick={() => setIsSuccess(false)} size="lg" className="bg-primary hover:bg-primary/90">
            Envoyer un autre message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="gradient-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{config.contact.pageTitle}</h1>
          <p className="text-xl text-white/95 max-w-2xl mx-auto">
            {config.contact.pageSubtitle}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div>
            <h2 className="text-3xl font-bold mb-8">{config.contact.contactInfoTitle}</h2>

            <div className="space-y-4">
          <div className="p-4 rounded-lg bg-secondary/50 border border-primary/10">
            <p className="font-semibold text-foreground mb-1">Email</p>
            <a
              href={`mailto:${config.contact.email}`}
              className="text-primary hover:underline font-medium"
            >
              {config.contact.email}
            </a>
          </div>
          <div className="p-4 rounded-lg bg-secondary/50 border border-primary/10">
            <p className="font-semibold text-foreground mb-1">Téléphone</p>
            <a
              href={`tel:${config.contact.phoneFormatted}`}
              className="text-primary hover:underline font-medium"
            >
              {config.contact.phone}
            </a>
          </div>
          <div className="p-4 rounded-lg bg-secondary/50 border border-primary/10">
            <p className="font-semibold text-foreground mb-1">Adhésion</p>
            <p className="text-muted-foreground">{config.contact.annualFee}</p>
          </div>
          <div className="p-4 rounded-lg bg-secondary/50 border border-primary/10">
            <p className="font-semibold text-foreground mb-3">Localisation</p>
            <p className="text-muted-foreground mb-3">{config.contact.address}</p>
            <a
              href={config.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              📍 Voir sur Google Maps
            </a>
            <div className="mt-4 rounded-lg overflow-hidden border-2 border-primary/20 shadow-soft">
              <iframe
                src={config.contact.googleMapsEmbed}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title={`Carte de ${config.site.city}`}
              ></iframe>
              <div className="p-3 bg-secondary/30 text-center">
                <a
                  href={config.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium text-sm"
                >
                  Ouvrir dans Google Maps →
                </a>
              </div>
            </div>
            </div>
          </div>
          </div>

          {/* Formulaire */}
          <div>
            <h2 className="text-3xl font-bold mb-8">{config.contact.formTitle}</h2>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre nom" {...field} className="border-primary/20 focus:border-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="votre@email.com" {...field} className="border-primary/20 focus:border-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sujet</FormLabel>
                      <FormControl>
                        <Input placeholder="Sujet de votre message" {...field} className="border-primary/20 focus:border-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Votre message..."
                          className="min-h-[200px] border-primary/20 focus:border-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6">
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
