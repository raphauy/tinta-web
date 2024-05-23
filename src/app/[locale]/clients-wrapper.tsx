"use client"

import { I18nProviderClient, useCurrentLocale } from "@/locales/client"
import { Clients } from "./clients"

export default function ClientsWrapper() {
    const locale= useCurrentLocale()

    return (
        <I18nProviderClient locale={locale}>
            <Clients />
        </I18nProviderClient>
    )
}
