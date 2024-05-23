import { getCurrentLocale, getScopedI18n } from "@/locales/server";
import Hero from "./hero";
import Services from "./services";
import { Testimonials } from "./testimonials";
import { Clients } from "./clients";
import { I18nProviderClient } from "@/locales/client";
import ClientsWrapper from "./clients-wrapper";

export default async function LanguagePage() {

  const tLastSection = await getScopedI18n("landing.lastSection")
  const locale = await getCurrentLocale()

  return (
    <div className="flex flex-col items-center">

      <Hero />

      <div className="w-full max-w-[1000px] mx-auto">
        <Services />

        <section className="w-full py-6 md:py-12 text-gray-800 dark:text-white mt-10">
          <h2 className="text-4xl font-semibold text-center text-tinta-verde mb-8 dark:text-white">{tLastSection("title")}</h2>
          <p className="container text-center text-lg mb-8">{tLastSection("description")}</p>
        </section>

        <ClientsWrapper />


        {/* <Testimonials /> */}

      </div>

    </div>
  )
}
