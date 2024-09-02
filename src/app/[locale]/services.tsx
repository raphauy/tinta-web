import ServicesClient from "./services-client"
import { getScopedI18n } from "@/locales/server"

type LandingServiceText = {
  title: "services.agency.Title" | "services.academy.Title" | "services.software.Title" | "services.editorial.Title"
  description: "services.agency.description" | "services.academy.description" | "services.software.description" | "services.editorial.description"
  icon: string
  link?: string
}

export type SectionData = {
  title: string
  description: string
  data: {
    title: string
    description: string
    icon: string
    link?: string
  }[]
}

const data: LandingServiceText[] = [
  {
    title: "services.agency.Title",
    description: "services.agency.description",
    icon: "ThumbsUp",
    link: "/agency"
  },
  {
    title: "services.academy.Title",
    description: "services.academy.description",
    icon: "GraduationCap"
  },
  {
    title: "services.software.Title",
    description: "services.software.description",
    icon: "Laptop"
  },
  {
    title: "services.editorial.Title",
    description: "services.editorial.description",
    icon: "Pencil"
  }
]
export default async function Services() {
  const t = await getScopedI18n("landing")
  const title= t("queHacemosTitle")
  const description= t("queHacemosDescription")

  const dataWithText= data.map((item) => {
    return {
      ...item,
      title: t(item.title),
      description: t(item.description)
    }
  })

  const sectionData= {
    title,
    description,
    data: dataWithText
  }
  console.log(sectionData)
  

  return (
    <ServicesClient title={title} description={description} data={dataWithText} />
  )
}

