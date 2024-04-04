import { ReactNode } from "react"
import Logged from "./logged"
import Logo from "./logo"

interface Props {  
    children: ReactNode
}
  
export default async function Header({ children }: Props) {

    return (
        <div className="fixed h-20 inset-0 z-50 flex items-center bg-background">
            <div>
                <Logo />
            </div>

            <div className="flex-1">                                
                {children}
            </div>
            
            <div>
                <Logged />
            </div>
        </div>
    )
}
