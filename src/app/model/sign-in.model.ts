import { EInputType, TFormField } from "@/types/form-field"
import { z } from "zod"

export const singInFormSchema = z.object({
  email: z.string().email({message:'please enter valid email'}),
  password: z.string({required_error:'please enter something'}).min(1,{message:"enter your password"}),
})

export type TSingInFormSchema= z.infer<typeof singInFormSchema> //form field ma generic field use vayeko
export const SignInFormDefaultValues:Partial<TSingInFormSchema>={
    email:"",
    password:"",
}
export const signInFormField: TFormField<TSingInFormSchema>[]=[

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
    }
]
