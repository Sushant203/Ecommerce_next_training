import { EInputType, TFormField } from "@/types/form-field"
import { z } from "zod"



export const registerFormSchema = z.object({
    username: z.string({required_error:'please enter your valid username'}).min(4,{message:"enter your username"}).max(20),
  email: z.string().email({message:'please enter valid email'}),
  password: z.string({required_error:'please enter something'}).min(1,{message:"enter your password"}),
  confirmPassword: z.string().min(1) 
}).refine((data)=>data.password===data.confirmPassword,{path:["confirmPassword"],message:"password does not match"})

export type TRegisterFormSchema= z.infer<typeof registerFormSchema> //form field ma generic field use vayeko
export const registerFormDefaultValues:Partial<TRegisterFormSchema>={
    username:"",
    email:"",
    password:"",
    confirmPassword:""
}
export const registerFormField: TFormField<TRegisterFormSchema>[]=[
     {
        label:'Username',
        name:'username',
        placeholder:'Eg. enter your username',
        type: EInputType.TEXT,
        required: true,
    },
    {
        label:'Email',
        name:'email',
        placeholder:'Eg. enter your email',
        type: EInputType.EMAIL,
        required: true,
    },
    {
        label:'Password',
        name: 'password',
        placeholder:'********',
        required:true,
        type: EInputType.PASSWORD,
    },
     {
        label:'ConfirmPassword',
        name:'confirmPassword',
        placeholder:'*******',
        type: EInputType.PASSWORD,
        required: true,
    }
]
