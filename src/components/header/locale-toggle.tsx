"use client"

import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import Link from "next/link"
import { useChangeLocale, useCurrentLocale } from '@/locales/client'

export default function LanguageToggle() {
    const changeLocale = useChangeLocale()
    const currentLocale = useCurrentLocale()
    return (
        <div className="flex items-center text-black dark:text-white">
                <Button
                    variant="outline"
                    size="icon"
                    className="border-none h-8 w-8 p-2 text-lg"
                    onClick={() => changeLocale("es")}
                >
                    <p className={cn(currentLocale === 'es' ? "opacity-100" : "opacity-40")}>ES</p>
                </Button>
            <Link href="/en">
                <Button
                    variant="outline"
                    size="icon"
                    className="border-none h-8 w-8 p-2 text-lg"
                    onClick={() => changeLocale("en")}
                >
                    <p className={cn(currentLocale === 'en' ? "opacity-100" : "opacity-40")}>EN</p>
                </Button>
            </Link>


        </div>
  )
}
