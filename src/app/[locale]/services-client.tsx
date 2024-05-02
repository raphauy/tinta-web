"use client"

import { useScopedI18n } from "@/locales/client"
import { motion } from 'framer-motion'
import { Service } from "./services"

type Props = {
  data: Service[]
}
export default function ServicesClient({ data }: Props) {
  const t= useScopedI18n("landing")

  return (

    <section className="w-full py-6 md:py-12 text-gray-800 dark:text-white mt-10">
      <h2 className="text-4xl font-semibold text-center text-tinta-verde mb-8 dark:text-white">{t("queHacemosTitle")}</h2>
      <p className="container text-center text-lg mb-8">{t("queHacemosDescription")}</p>
      <div className="container flex items-center justify-center px-8 text-center md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {
            data.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    type: 'spring',
                    bounce: 0.7,
                  }}
                  key={index} 
                  className="mt-5"
                >
                  <div className="flex flex-col items-center space-y-6 border border-gray-300 rounded-xl p-4 md:p-6 shadow-sm dark:border-gray-800 h-full">
                    <div className="flex items-center justify-center w-24 h-24 rounded-full border border-gray-400 p-3 dark:border-gray-800">
                      <Icon className="w-16 h-16" />
                    </div>
                    <div className="space-y-6">
                      <h3 className="text-3xl font-semibold">{t(item.title)}</h3>
                      <p className=" text-gray-500 md:text-base dark:text-gray-400">
                        {t(item.description)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

