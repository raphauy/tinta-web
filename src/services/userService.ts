import { UserFormValues } from "@/app/[locale]/admin/users/(crud)/userForm";
import { prisma } from "@/lib/db";

export default async function getUsers() {

  const found = await prisma.user.findMany({
    orderBy: {
      email: 'asc',
    },
  })

  return found;
}


export async function getUser(id: string) {

  const found = await prisma.user.findUnique({
    where: {
      id
    },
  })

  return found
}

export async function createUser(data: UserFormValues) {
  
  const created= await prisma.user.create({
    data: {
      name: data.nombre,
      email: data.email,
      role: data.rol,
    },
  })

  return created
}

export async function editUser(id: string, data: UserFormValues) {
  console.log(data);
  
  const created= await prisma.user.update({
    where: {
      id
    },
    data: {
      name: data.nombre,
      email: data.email,
      role: data.rol,
    },
  })

  return created
}

export async function deleteUser(id: string) {
  
  const deleted= await prisma.user.delete({
    where: {
      id
    },
  })

  return deleted
}