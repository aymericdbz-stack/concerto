"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MAIN_EVENT } from "@/lib/constants";

export function DashboardClient() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16">
      <section className="grid gap-10 md:grid-cols-[1fr_0.95fr] md:items-start">
        <Card className="flex h-full flex-col border-[#eadacf] bg-white/95 shadow-xl shadow-[#7a1c1a]/10">
          <CardHeader className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7a1c1a]">
              Concert
            </span>
            <CardTitle className="text-3xl leading-tight text-[#401f18]">{MAIN_EVENT.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col space-y-6">
            <div className="overflow-hidden rounded-[24px] border border-[#eadacf]/70">
              <Image
                src={MAIN_EVENT.heroImage}
                alt={MAIN_EVENT.title}
                width={880}
                height={600}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="grid gap-4 text-sm text-neutral-600 md:grid-cols-2">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a1c1a]">
                  Date
                </p>
                <p>{MAIN_EVENT.date}</p>
                <p>{MAIN_EVENT.time}</p>
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a1c1a]">
                  Lieu
                </p>
                <p>{MAIN_EVENT.venue}</p>
                <p>{MAIN_EVENT.address}</p>
              </div>
            </div>
            <Button
              asChild
              variant="ghost"
              className="mt-auto px-0 text-[#7a1c1a] hover:bg-transparent"
            >
              <a href={MAIN_EVENT.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                Voir l&apos;itinéraire sur Google Maps →
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="flex h-full flex-col border-[#eadacf] bg-white/95 shadow-xl shadow-[#7a1c1a]/10">
          <CardHeader className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
              Réserver ma place
            </span>
            <CardTitle className="text-2xl text-[#401f18]">
              Choisis ton montant de participation
            </CardTitle>
            <p className="text-sm text-neutral-600">
              Les contributions sont libres et reversées intégralement pour rémunérer les artistes et l&apos;équipe
              de production. Une fois prêt(e), poursuis sur notre page OnParticipe pour finaliser ta place.
            </p>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col space-y-6">
            <div className="space-y-3 rounded-2xl border border-[#eadacf] bg-[#fff8f1] p-5 text-sm text-neutral-700">
              <p>
                Le formulaire de réservation se déroule désormais via la plateforme sécurisée OnParticipe. Tu y
                retrouveras toutes les informations pour confirmer ta présence et soutenir le concert.
              </p>
              <p className="text-neutral-500">
                Tu seras redirigé(e) vers une nouvelle page ; n&apos;hésite pas à revenir ici pour consulter les
                détails de l&apos;événement.
              </p>
            </div>
            <div className="mt-auto" />
            <Button asChild className="w-full bg-[#7a1c1a] text-white transition hover:bg-[#651815]">
              <a href="https://www.onparticipe.fr/c/EaStWtGi" target="_blank" rel="noopener noreferrer">
                Prendre sa place
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
