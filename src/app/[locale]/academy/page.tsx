import { getScopedI18n } from "@/locales/server"

export default async function AcademyPage() {
    const t = await getScopedI18n("academy")

    return (
      <div>
        <p>{t("title")}</p>
      </div>
    )
}
  