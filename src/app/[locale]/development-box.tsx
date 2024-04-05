import DevelopmentCards from "./development-cards"

type Props= {
    title: string
    description: string    
}
export default function DevelopmentBox({title, description}: Props) {
  return (
    <div className="container px-6 mt-10">
      <div className=" bg-white dark:bg-gray-800 sm:p-8 rounded-lg shadow-xl mt-20 border ">
          <h2 className="text-4xl font-semibold text-center text-tinta-verde mb-8">{title}</h2>

          <p className="mt-4 text-gray-700 dark:text-gray-300">{description}</p>
          <DevelopmentCards />
      </div>


    </div>
  )
}
