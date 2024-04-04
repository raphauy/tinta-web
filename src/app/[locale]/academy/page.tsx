import { getScopedI18n } from "@/locales/server"

export default async function AcademyPage() {
    const t = await getScopedI18n("academy")

    return (
      <div>
        <p>{t("title")}</p>
        <p>hola hola lorem ipsum más grande que el título</p>
      </div>
    )
}
  