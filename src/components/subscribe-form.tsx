"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Loader } from "lucide-react"
import { APIResponse, sendContact } from "@/services/planner-services"
import { z } from "zod"


const schema = z.object({
	name: z.string().optional(),
	email: z.string({required_error: "el email es obligatorio.", invalid_type_error: "el email no es válido"}).email(),
})

type ContactFormValues = z.infer<typeof schema>

type Props = {
  clientId: string
}
export function SubscribeForm({ clientId }: Props) {

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
    },
    mode: "onChange",
  })
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<APIResponse | null>(null)

  const onSubmit = async (data: ContactFormValues) => {
    
    setLoading(true)
    console.log('data', data)
    const res= await sendContact(clientId, data.name, data.email)
    setLoading(false)
    console.log('res', res)
    setResponse(res)
    // wait 10 seconds and reset the response
    setTimeout(() => {
      setResponse(null)
    }, 10000)
  }

  return (
    <div className="mx-auto space-y-12 dark:bg-white dark:text-black bg-black text-white w-full border rounded-2xl max-w-3xl p-20 ">
      <div className="space-y-2 text-center">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-none">Suscríbete a nuestro Newsletter</h3>
      </div>
      {response ? <ResponseBox response={response} /> :
        <div className="space-y-2 sm:px-12 md:px-28 text-black dark:text-white">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" noValidate>

              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input className="rounded-lg" placeholder="Ingresa tu nombre" type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input className="rounded-lg" placeholder="Ingresa tu correo" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                
              </div>
              <Button type="submit" className="w-full bg-gray-300 text-black hover:bg-gray-400">
                {loading ? (
                  <Loader className="w-5 h-5 animate-spin" />
                ) : (
                  <p>Suscribirse</p>
                )}
              </Button>

            </form>
          </Form>
        </div>
      }
      </div>
  )
}

function ResponseBox({ response }: { response: APIResponse }) {
  return (
    <div className="p-4 bg-white border rounded-lg shadow-lg">
      {
        response.ok ? (
          <p className="text-green-600">{response.message}</p>
        ) : (
          <p className="text-red-600">{response.message}</p>
        )
      }
    </div>
  )
  
}