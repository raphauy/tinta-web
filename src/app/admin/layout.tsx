import { getCurrentUser } from "@/lib/auth";
import NotAlowedPage from "@/app/(auth)/unauthorized/page";
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
    return <NotAlowedPage message="Only admin role allowed." />
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
