import { getScopedI18n } from "@/locales/server"

export default async function AgencyPage() {

  const t = await getScopedI18n("agency")

  return (
    <div>{t("title")}</div>
  )
}
