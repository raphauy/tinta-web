import { Button } from "@/components/ui/button";
import { getScopedI18n } from "@/locales/server";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Hero() {
  const t = await getScopedI18n("landing.hero")
    return (
      <section className="h-full text-gray-800 dark:text-white">
        <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 h-[calc(60vh-80px)]">
          <h1 className="text-5xl text-center text-tinta-verde font-bold mb-4 dark:text-white">{t("title")}</h1>
          <p className="mt-4 text-xl text-center max-w-2xl">
            {t("description")}
          </p>
          <Link href="https://wa.me/59892265737" prefetch={false} target="_blank">
            <Button className="mt-8 gap-2 animate-buttonheartbeat"><MessageCircle /> {t("charlemosButton")}</Button>
          </Link>
        </div>
        <Image src="/Tinta_Hero.png" alt="uvas" width={1920} height={1080} className="object-cover h-[calc(40vh)]"/>
      </section>
    )
  }
  
  