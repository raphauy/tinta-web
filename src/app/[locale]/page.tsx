import { getScopedI18n } from "@/locales/server";
import DevelopmentBox from "./development-box";
import Hero from "./hero";
import SectionBox from "./section-box";
import Services from "./services";
import { Testimonials } from "./testimonials";

export default async function LanguagePage() {

  const tLastSection = await getScopedI18n("landing.lastSection")

  return (
    <div className="flex flex-col items-center">

      <Hero />

      <Services />

      <section className="w-full py-6 md:py-12 text-gray-800 dark:text-white mt-10">
        <h2 className="text-4xl font-semibold text-center text-tinta-verde mb-8 dark:text-white">{tLastSection("title")}</h2>
        <p className="container text-center text-lg mb-8">{tLastSection("description")}</p>
      </section>

      {/* <Testimonials /> */}

    </div>
  )
}
