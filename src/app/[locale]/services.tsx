"use client"

import { I18nProviderClient, useCurrentLocale, useScopedI18n } from "@/locales/client"
import { motion } from 'framer-motion'
import { Clapperboard, LucideIcon, Megaphone, Palette, ThumbsUp } from "lucide-react"
import ServicesClient from "./services-client"

export type Service = {
  title: "services.strategy.Title" | "services.content.Title" | "services.advertising.Title" | "services.customDesign.Title"
  description: "services.strategy.description" | "services.content.description" | "services.advertising.description" | "services.customDesign.description"
  icon: LucideIcon
}
const data: Service[] = [
  {
    title: "services.strategy.Title",
    description: "services.strategy.description",
    icon: ThumbsUp
  },
  {
    title: "services.content.Title",
    description: "services.content.description",
    icon: Clapperboard
  },
  {
    title: "services.advertising.Title",
    description: "services.advertising.description",
    icon: Megaphone
  },
  {
    title: "services.customDesign.Title",
    description: "services.customDesign.description",
    icon: Palette
  }
]
export default function Services() {
  const locale= useCurrentLocale()

  return (
    <I18nProviderClient locale={locale}>

      <ServicesClient data={data} />

    </I18nProviderClient>
  )
}

