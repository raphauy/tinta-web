"use client"

import { Card } from "@/components/ui/card"
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import { useTheme } from "next-themes";
import Image from "next/image"
import { useEffect, useState } from "react";

const clients = [
  {
    name: "BdC",
  },
  {
    name: "BdM",
  },
  {
    name: "Bizarra",
  },
  {
    name: "CerroChapeu",
  },
  {
    name: "Deicas",
  },
  {
    name: "El_Capricho",
  },
  {
    name: "Jomi",
  },
  {
    name: "Marichal",
  },
  {
    name: "Nakkal",
  },
  {
    name: "Narbona",
  },
  {
    name: "Pisano",
  },
  {
    name: "Spinoglio",
  },
  {
    name: "Traversa",
  },
  {
    name: "WoU",
  },
];

export function Clients() {

  const [imageColor, setimageColor] = useState("N")
  const theme= useTheme()

  const t= useScopedI18n("landing.clients")

  useEffect(() => {
    console.log("setting image color")
    
    if (theme.resolvedTheme === "dark") {
      setimageColor("B")
    } else {
      setimageColor("N")
    }
  }, [theme])

  return (    
    <div className="w-full flex flex-col items-center">
      <h2 className="text-4xl font-semibold text-center text-tinta-verde mb-14 dark:text-white">{t("Title")}</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
      {
        clients.map((client) => (
          <Card key={client.name} className="p-4 flex flex-col items-center justify-center w-32 h-32">
            <Image src={`/clients/${client.name}_${imageColor}.png`} alt={client.name} width={200} height={200} />
          </Card>
        ))
      }
      </div>
    </div>
  );
}