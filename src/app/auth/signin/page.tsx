"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"


import {signIn} from "next-auth/react";



import { Input } from "@/components/ui/input"
import { SignInFormDefaultValues, signInFormField, singInFormSchema, TSingInFormSchema } from "@/app/model/sign-in.model"


type Props = {
  callbackUrl:string;
}

const Signin = (props: Props) => {
  const form = useForm<TSingInFormSchema>({
    resolver: zodResolver(singInFormSchema),
    defaultValues: SignInFormDefaultValues,
  })

  async function onSubmit(values: TSingInFormSchema) {
     await signIn("credentials",{
      redirect:true,
      email:values.email,
      password:values.password,
      callbackUrl:props.callbackUrl??"http://localhost:3000/customer/cart",
    })
   console.log(values);
  }

  return (
    <section className="container py-10">
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} action="" className="w-1/4 space-y-6 border-2 border-black p-4 rounded-xl">
      <h2 className="text-center font-bold font-sans bg-[#F97316] text-white rounded-md">SignUp Form</h2>
         {signInFormField.map(formField=>(
           <FormField
           key={formField.name}
            control={form.control}
            name={formField.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{formField.label}</FormLabel>
                <FormControl>
                  <Input placeholder={formField.placeholder} required={formField.required} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
         ))}
          <Button type="submit" variant={"default"} >Login</Button>
        </form>
      </Form>
    </section>
  )
}

export default Signin
