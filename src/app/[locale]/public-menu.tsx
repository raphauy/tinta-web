"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useScopedI18n } from "@/locales/client"
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function PublicMenu() {
    
    const path= usePathname()

    const t= useScopedI18n('menu')

    const data= [
        {
            href: "/about",
            text: t('about'),
            disabled: true
        },
        {
            href: `/agency`,
            text: t('agency'),
            disabled: false
        },
        {
            href: `/academy`,
            text: t('academy'),
            disabled: false
        },
        {
            href: `/manifesto`,
            text: t('manifest'),
            disabled: false
        },
    ]


    return (
        <nav>
            <ul className="flex items-center">
                {data.map((item, index) => {
                    return (
                        <li key={index} className={cn("border-b-primary", path === item.href && "border-b-2")}>
                            <Link href={item.disabled ? "#" : item.href}>
                                <Button variant="ghost" className="text-base dark:text-white" disabled={item.disabled}>
                                    {item.text}
                                </Button>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

