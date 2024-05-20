import { ReactNode } from "react"
import Logged from "./logged"
import Logo from "./logo"
import LanguageToggle from "./locale-toggle"
import { ThemeToggle } from "../shadcn/theme-toggle"

interface Props {  
    children: ReactNode
}
  
export default async function Header({ children }: Props) {

    return (
        <div className="fixed h-24 sm:h-20 inset-0 z-50 sm:flex items-center bg-background">
            <Logo />

            <div className="flex-1">                                
                {children}
            </div>
            
            <div>
                <Logged />
            </div>
        </div>
    )
}
