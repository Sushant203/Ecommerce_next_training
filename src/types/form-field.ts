export enum EInputType{
    TEXT='text',
    PASSWORD='password',
    EMAIL='email',
    CHECKBOX='checkbox',
    RADIO='radio',
    DATE='date',
    FILE='file',
    TEL='tel',
    TEXTAREA='textarea',
    SELECT='select',
}
type TInputType= 'text'|'email'|'password'|'file' |'checkbox' |'radio'|'date' |'number'
export type TFormField<T>=({
    type: TInputType;
    
} | {
    type: EInputType.SELECT;
    option?:{
        label: string;
        value: string;
    }[]
})&{
    required: boolean;
    label:string,
    placeholder?:string;
    name:keyof T; //jun schema pass grinxa tesko key 
}