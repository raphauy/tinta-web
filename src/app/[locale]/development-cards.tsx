import { getScopedI18n } from "@/locales/server"
import { Clapperboard, Megaphone, ThumbsUp } from "lucide-react"

export default async function DevelopmentCards() {
  const t = await getScopedI18n("landing.development.services")

  return (
    <section className="w-full py-6 md:py-12 text-gray-800 dark:text-white">
      <div className="container flex items-center justify-center px-8 text-center md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col items-center space-y-6 border border-gray-300 rounded-xl p-4 md:p-6 shadow-sm dark:border-gray-800">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold">{t("tintaLink.title")}</h3>
              <p className=" text-gray-500 md:text-base dark:text-gray-400">
                {t("tintaLink.description")}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-6 border border-gray-300 rounded-xl p-4 md:p-6 shadow-sm dark:border-gray-800">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold">{t("tintaPlanner.title")}</h3>
              <p className=" text-gray-500 md:text-base dark:text-gray-400">
                {t("tintaPlanner.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

