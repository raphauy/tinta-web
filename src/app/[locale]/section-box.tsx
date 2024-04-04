
type Props= {
    title: string
    description: string    
}
export default function SectionBox({title, description}: Props) {
  return (
    <div className="container px-6">
      <div className=" bg-white dark:bg-gray-800 sm:p-8 rounded-lg shadow-xl mt-20 border ">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h3>
          <p className="mt-4 text-gray-700 dark:text-gray-300">{description}</p>
      </div>

    </div>
  )
}
