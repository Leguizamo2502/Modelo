export interface module{
    id:number;
    name:string;
    description:string;
    active:boolean;
    is_delete:boolean;
}

export interface moduleCreate{
    // id:number;
    name:string;
    description:string;
    active:boolean;
}