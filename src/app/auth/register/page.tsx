"use client";
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerFormDefaultValues, registerFormField, registerFormSchema, TRegisterFormSchema } from '@/app/model/register.model';
import classes from "./page.module.css";

type Props = {};

const RegisterPage = (props: Props) => {
  const form = useForm<TRegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: registerFormDefaultValues,
  });

  async function onSubmit(values: TRegisterFormSchema) {
    console.log(values);
  }

  return (
    <main className='container py-10 '>
      <section className='flex justify-center'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/4 space-y-6 border-2 border-black p-6 rounded-xl backdrop-blur-md bg-opacity-10">
            <h2 className="text-center font-bold font-sans bg-[#F97316] text-white rounded-md p-2 capitalize">Register your account</h2>
            {registerFormField.map(formField => (
              <FormField
                key={formField.name}
                control={form.control}
                name={formField.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{formField.label}</FormLabel>
                    <FormControl>
                      <Input placeholder={formField.placeholder} required={formField.required} {...field} className='focus:outline-none'/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button type="submit" variant="default">Register</Button>
          </form>
        </Form>
      </section>
    </main>
  );
};

export default RegisterPage;
