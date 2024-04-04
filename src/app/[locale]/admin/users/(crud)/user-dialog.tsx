"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { User } from "@prisma/client"
import { useState } from "react"
import { UserForm, UserFormValues } from "./userForm"

interface Props{
  title: string
  trigger: React.ReactNode
  id?: string
  create: (json: UserFormValues) => Promise<User | null>
  update: (userId: string, json: UserFormValues) => Promise<User | null>
}

export function UserDialog({ title, trigger, id, create, update }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <UserForm create={create} update={update} closeDialog={() => setOpen(false)} id={id} />
      </DialogContent>
    </Dialog>
  )
}
