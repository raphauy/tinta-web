import { getScopedI18n } from "@/locales/server"

export default async function ManifestPage() {
    const t = await getScopedI18n("manifest")

    // manifest: {
    //   title: "Manifiesto Tinta",
    //   enfoqueTitle: "Enfoque en lo esencial",
    //   enfoqueDescription: "En un mundo saturado de información, nos centramos en lo verdaderamente importante para alcanzar nuestros objetivos. Aplicamos el principio de Pareto (regla 80-20) en todo lo que hacemos, creyendo que el 80% de los resultados proviene del 20% de las acciones.",
    //   prioridadTitle: "Prioridad a las personas",
    //   prioridadDescription: "Colocamos a las personas en el corazón de nuestras acciones. Somos una empresa de servicios, creada por personas y para personas.",
    //   solucionesTitle: "Soluciones efectivas",
    //   solucionesDescription: "Identificamos problemas a través de la escucha activa de nuestros clientes y proponemos soluciones eficientes. Conocemos el mundo del vino, sus desafíos y oportunidades, manteniendo siempre los pies en la tierra.",
    //   simplificacionTitle: "Simplificación",
    //   simplificacionDescription: "Convertimos lo complejo en simple y accesible.",
    //   relacionesTitle: "Relaciones duraderas",
    //   relacionesDescription: "Buscamos crecer junto a nuestros clientes, pensando en el largo plazo y no sacrificando la calidad del trabajo profesional, ético y consciente por resultados inmediatos.",
    //   confianzaTitle: "Confianza y responsabilidad",
    //   confianzaDescription: "Valoramos la confianza y la responsabilidad, eligiendo cuidadosamente en quién depositar nuestra fe.",
    //   potenciarTitle: "Potenciar el talento",
    //   potenciarDescription: "Reconocemos y estimulamos los talentos individuales, permitiendo a cada persona maximizar su desempeño y encontrar motivación para desarrollarse profesionalmente.",
    //   eficienciaTitle: "Eficiencia y creatividad",
    //   eficienciaDescription: "Nos esforzamos por hacer más con menos, utilizando la creatividad y la innovación para diseñar soluciones con los recursos disponibles. Nos apasiona la tecnología aplicada a la optimización de procesos.",
    //   agilidadTitle: "Agilidad y paciencia",
    //   agilidadDescription: "Entendemos que la rapidez es crucial en los negocios. Somos proactivos y actuamos con determinación, pero también tenemos paciencia con los resultados, sabiendo que lo valioso requiere tiempo y dedicación.",
    //   sostenibilidadTitle: "Sostenibilidad",
    //   sostenibilidadDescription: "Nos comprometemos con prácticas sostenibles, pensando en el cuidado de nuestro planeta y en dejarlo mejor de lo que lo encontramos.",    
    // },
  
    return (
      <div className="max-w-2xl mx-auto p-5 space-y-10">
        <h2 className="text-4xl text-tinta-verde font-bold text-center mb-10">{t("title")}</h2>
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
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {ind}. {title}
      </h3>
      <p className="text-lg">{content}</p>
    </div>
  )
}
