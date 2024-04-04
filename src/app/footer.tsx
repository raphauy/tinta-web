import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-10 pb-1 flex flex-col items-center">
      <div className="flex items-center justify-center h-4">
          <Link href="https://instagram.com/tinta.wine" target="_blank">
            <Button variant="ghost" className="px-1">
              <Instagram size={20}/>
            </Button>
          </Link>
          <Link href="https://www.facebook.com/tintawineagencia" target="_blank">
          <Button variant="ghost" className="px-1">
              <Facebook size={20}/>
            </Button>
          </Link>
          <Link href="https://linkedin.com/company/tintawine" target="_blank">
          <Button variant="ghost" className="px-1">
              <Linkedin size={20}/>
            </Button>
          </Link>
          <Link href="https://tiktok.com/@tinta.wine" target="_blank">
          <Button variant="ghost" className="px-1">
            <Image src="/tiktok.svg" alt="tiktok" width={20} height={20} className="opacity-70"/>
          </Button>
          </Link>
      </div>

      <Link href="mailto:hola@tinta.wine" className="-mt-3">
        <Button variant="link" className="mt-2">
          hola@tinta.wine
        </Button>
      </Link>

    </div>
  )
}

