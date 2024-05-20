"use client"

import { ThemeToggle } from "../shadcn/theme-toggle";
import MenuAdmin from "./menu-admin";
import PublicMenu from "../../app/[locale]/public-menu";
import LanguageToggle from "./locale-toggle";
import { useSession } from "next-auth/react";
import { I18nProviderClient, useCurrentLocale } from "@/locales/client";

export default function Menu() {
    
    const user= useSession().data?.user
    const locale= useCurrentLocale()

    return (
        <div className="flex flex-col sm:flex-row items-center sm:justify-between">
            <div className="">
                {
                    user?.role === "admin" &&
                    <MenuAdmin />
                }                
            </div>
            
            <div>
                <I18nProviderClient locale={locale}>
                    <PublicMenu />
                </I18nProviderClient>
            </div>

            <div className="items-center hidden sm:flex">
                <LanguageToggle />
                <ThemeToggle />
            </div>
        </div>
    )
    
}
