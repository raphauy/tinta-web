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
            text: t('about')
        },
        {
            href: `/agency`,
            text: t('agency')
        },
        {
            href: `/academy`,
            text: t('academy')
        },
        {
            href: `/manifest`,
            text: t('manifest')
        },
    ]


    return (
        <nav>
            <ul className="flex items-center">
                {data.map((item, index) => {
                    return (
                        <li key={index} className={cn("border-b-primary", path === item.href && "border-b-2")}>
                            <Link href={item.href}>
                                <Button variant="link" className="text-base">
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

