"use client";

import { fontNunito, fontRubik, fontSans  } from "@/lib/fonts"
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";


export default function Logo() {

  return (
    <Link href="/">
      <div className="flex flex-col items-center mt-3 sm:mt-0 sm:ml-3 mb-3">
        <Image src="/Tinta_N.png" width={90} height={50} alt="Tinta logo" className="dark:hidden"/>        
        <Image src="/Tinta_B.png" width={90} height={50} alt="Tinta logo" className="hidden dark:block"/>        
      </div>
    </Link>
  )
}
