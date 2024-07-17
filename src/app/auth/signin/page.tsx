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
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
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
     try {
      await signIn("credentials",{ ...values,
      callbackUrl:"/"
      })
   console.log(values);
  
     } catch (error) {
      toast.error("error occured!!");
     }
    }

  return (
    <section className="container py-10">
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} action="" className="w-1/4 space-y-6 border-2 border-black p-4 rounded-xl shadow-md">
      <h2 className="text-center font-bold font-sans bg-[#F97316] text-white rounded-md p-3">SignIn Form</h2>
         {signInFormField.map(formField=>(
           <FormField
           key={formField.name}
            control={form.control}
            name={formField.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{formField.label}</FormLabel>
                <FormControl>
                  <Input placeholder={formField.placeholder} required={formField.required} type={formField.type} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
         ))}
          <Button type="submit" variant={"default"} >Login</Button>
        </form>
      </Form>
          <ToastContainer/>
    </section>
  )
}

export default Signin
