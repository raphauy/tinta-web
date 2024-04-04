import { getCurrentUser } from "@/lib/auth";
import NotAlowedPage from "@/app/[locale]/(auth)/unauthorized/page";
import SideBar from "./sideBar";
import { redirect } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default async function AdminLayout({ children }: Props) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return redirect("/login")
  }

  if (currentUser?.role !== "admin") {
    return <div>Only admin role allowed.</div>
  }

  return (
    <>
      <div className="flex flex-grow w-full">
        <SideBar />
        <div className="flex flex-col items-center flex-grow p-1">{children}</div>
      </div>
    </>
  )
}
