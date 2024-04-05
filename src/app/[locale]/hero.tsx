import { getScopedI18n } from "@/locales/server";
import Image from "next/image";

export default async function Hero() {
  const t = await getScopedI18n("landing.hero")
    return (
      <section className="h-full text-gray-800 dark:text-white">
        <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 h-[calc(60vh-80px)]">
          <h1 className="text-5xl text-cente text-tinta-verde font-bold mb-4">{t("title")}</h1>
          <p className="mt-4 text-xl text-center">
            {t("description")}
          </p>
        </div>
        <Image src="/uvas.jpg" alt="uvas" width={1920} height={1080} className="object-cover h-[calc(40vh)]"/>
      </section>
    )
  }
  
  