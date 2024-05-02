import { getScopedI18n } from "@/locales/server";
import DevelopmentBox from "./development-box";
import Hero from "./hero";
import SectionBox from "./section-box";
import Services from "./services";

export default async function LanguagePage() {

  const tDev = await getScopedI18n("landing.development")
  const tAcademy = await getScopedI18n("landing.academy")

  return (
    <div className="flex flex-col items-center">

      <Hero />

      <Services />

      <SectionBox 
        href="/academy"
        title={tAcademy("title")} 
        description={tAcademy("description")} 
      />

      <DevelopmentBox title={tDev("title")} description={tDev("description")} />

      
    </div>
  )
}
