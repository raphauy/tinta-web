import { getScopedI18n } from "@/locales/server"

export default async function ManifestPage() {
    const t = await getScopedI18n("manifest")

    return (
      <div>{t("title")}</div>
    )
}
  