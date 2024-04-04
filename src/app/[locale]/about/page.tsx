import { getScopedI18n } from "@/locales/server"

export default async function AboutPage() {
    const t = await getScopedI18n("about")

    return (
      <div>{t("title")}</div>
    )
}
  