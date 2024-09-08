import { getScopedI18n } from "@/locales/server"

export default async function ManifestPage() {
    const t = await getScopedI18n("manifest")

    return (
      <div className="max-w-2xl mx-auto p-5 space-y-10 mt-11">
        <h2 className="text-4xl text-foreground font-bold text-center mb-10">{t("title")}</h2>
        <ManifestoItem ind={1} title={t("enfoqueTitle")} content={t("enfoqueDescription")}/>
        <ManifestoItem ind={2} title={t("prioridadTitle")} content={t("prioridadDescription")}/>
        <ManifestoItem ind={3} title={t("solucionesTitle")} content={t("solucionesDescription")}/>
        <ManifestoItem ind={4} title={t("simplificacionTitle")} content={t("simplificacionDescription")}/>
        <ManifestoItem ind={5} title={t("relacionesTitle")} content={t("relacionesDescription")}/>
        <ManifestoItem ind={6} title={t("confianzaTitle")} content={t("confianzaDescription")}/>
        <ManifestoItem ind={7} title={t("potenciarTitle")} content={t("potenciarDescription")}/>
        <ManifestoItem ind={8} title={t("eficienciaTitle")} content={t("eficienciaDescription")}/>
        <ManifestoItem ind={9} title={t("agilidadTitle")} content={t("agilidadDescription")}/>
        <ManifestoItem ind={10} title={t("sostenibilidadTitle")} content={t("sostenibilidadDescription")}/>        
      </div>
    )
}


type ManifestoItemProps = {
  ind: number
  title: string
  content: string
}
function ManifestoItem({ ind, title, content }: ManifestoItemProps) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-foreground">
        {ind}. {title}
      </h3>
      <p className="text-lg">{content}</p>
    </div>
  )
}
