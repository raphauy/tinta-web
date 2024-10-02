import { Button } from "@/components/ui/button"
import { getScopedI18n } from "@/locales/server"
import Image from "next/image"
import Link from "next/link"

export default async function AcademyPage() {
    const t = await getScopedI18n("academy")

    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl text-foreground mt-11">
        <h1 className="text-4xl font-semibold text-center text-tinta-verde mb-8 dark:text-white">{t("title")}</h1>
        <p className="container text-center text-lg mb-8">{t("paragraph1")}</p>
        <p className="container text-center text-lg mb-8">{t("paragraph2")}</p>

        <div className="flex items-center justify-center gap-8 mt-32 ml-5">
          <div>
            <Image src="/WSET_N.png" alt={t("logoText")} width={300} height={100} className="dark:hidden"/>
            <Image src="/WSET_B.png" alt={t("logoText")} width={300} height={100} className="hidden dark:block"/>
          </div>
          <p className="text-lg">{t("logoText")}</p>
        </div>

        <Link href="https://academy.tinta.wine/cursos" target="_blank">
          <Button className="mt-10 w-full">{"👉🏼 " + t("buttonText") + " 👈🏼"}</Button>
        </Link>

      </div>
    )
}
