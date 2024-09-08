"use client"

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import * as LucideIcons from "lucide-react"
import Link from 'next/link'
import React from "react"

type Props = {
  title: string
  description: string
  data: {
    title: string
    description: string
    icon: string
    link?: string
  }[]
  spanFirst?: boolean
}
export default function ServicesClient({ title, description, data, spanFirst }: Props) {
  const isMultipleOf3= data.length % 3 === 0

  return (

    <section className="w-full py-6 md:py-12 text-gray-800 dark:text-white mt-10">
      <h1 className="text-4xl font-semibold text-center text-tinta-verde mb-8 dark:text-white">{title}</h1>
      <p className="container text-center text-lg mb-8">{description}</p>
      <div className="container flex items-center justify-center px-8 text-center md:px-6">
        <div className={cn("grid gap-6 lg:gap-8", isMultipleOf3 ? "lg:grid-cols-3" : "lg:grid-cols-2")}>
          {
            data.map((item, index) => {
              // @ts-ignore
              const icon = LucideIcons[item.icon]
              return (
                <motion.div
                  whileHover={{y: -8,}}
                  transition={{type: 'spring',bounce: 0.7,}}
                  key={index} 
                  className={cn("mt-5", index === 0 && spanFirst && "lg:col-span-2", index === 0 && isMultipleOf3 && spanFirst && "lg:col-span-3")}
                >
                  {
                    item.link ?
                    <Link href={item.link} >
                      <div className="flex flex-col items-center space-y-6 border border-gray-300 rounded-xl p-4 md:p-6 shadow-sm dark:border-gray-800 h-full">
                        <div className="flex items-center justify-center w-24 h-24 rounded-full border border-gray-400 p-3 dark:border-gray-800">
                        {React.createElement(icon, { className: "w-16 h-16"})}
                        </div>
                        <div className="space-y-6">
                          <h2 className="text-3xl font-semibold">{item.title}</h2>
                          <p className=" text-gray-500 md:text-base dark:text-gray-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                    :
                    <div className="flex flex-col items-center space-y-6 border border-gray-300 rounded-xl p-4 md:p-6 shadow-sm dark:border-gray-800 h-full">
                      <div className="flex items-center justify-center w-24 h-24 rounded-full border border-gray-400 p-3 dark:border-gray-800">
                      {React.createElement(icon, { className: "w-16 h-16"})}
                      </div>
                      <div className="space-y-6">
                        <h2 className="text-3xl font-semibold">{item.title}</h2>
                        <p className=" text-gray-500 md:text-base dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                  }
                </motion.div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

