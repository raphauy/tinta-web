import Link from "next/link"
import DevelopmentCards from "./development-cards"

type Props= {
    title: string
    description: string
    href: string
}
export default function SectionBox({title, description, href}: Props) {
  return (
    <Link href={href}>
      <div className="container px-6 mt-10">
        <div className=" bg-white dark:bg-gray-800 sm:p-8 rounded-lg shadow-xl mt-20 border ">
            <h2 className="text-4xl font-semibold text-center text-tinta-verde mb-8 dark:text-white">{title}</h2>

            <p className="mt-4 text-gray-700 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </Link>
  )
}
