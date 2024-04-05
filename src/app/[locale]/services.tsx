import { getScopedI18n } from "@/locales/server"
import { Clapperboard, Megaphone, ThumbsUp } from "lucide-react"

export default async function Services() {
  const t = await getScopedI18n("landing")

  return (
    <section className="w-full py-6 md:py-12 text-gray-800 dark:text-white mt-10">
      <h2 className="text-4xl font-semibold text-center text-tinta-verde mb-8">{t("queHacemosTitle")}</h2>
      <p className="container text-center text-lg mb-8">{t("queHacemosDescription")}</p>
      <div className="container flex items-center justify-center px-8 text-center md:px-6">
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col items-center space-y-6 border border-gray-300 rounded-xl p-4 md:p-6 shadow-sm dark:border-gray-800">
            <div className="flex items-center justify-center w-24 h-24 rounded-full border border-gray-400 p-3 dark:border-gray-800">
              <ThumbsUp className="w-16 h-16" />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold">{t("services.strategy.Title")}</h3>
              <p className=" text-gray-500 md:text-base dark:text-gray-400">
                {t("services.strategy.description")}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-6 border border-gray-300 rounded-xl p-4 md:p-6 shadow-sm dark:border-gray-800">
            <div className="flex items-center justify-center w-24 h-24 rounded-full border border-gray-400 p-3 dark:border-gray-800">
              <Clapperboard className="w-16 h-16" />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold">{t("services.content.Title")}</h3>
              <p className=" text-gray-500 md:text-base dark:text-gray-400">
                {t("services.content.description")}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-6 border border-gray-300 rounded-xl p-4 md:p-6 shadow-sm dark:border-gray-800">
            <div className="flex items-center justify-center w-24 h-24 rounded-full border border-gray-400 p-3 dark:border-gray-800">
              <Megaphone className="w-16 h-16" />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold">{t("services.advertising.Title")}</h3>
              <p className=" text-gray-500 md:text-base dark:text-gray-400">
                {t("services.advertising.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

