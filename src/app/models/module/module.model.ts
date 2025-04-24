export interface module{
    id:number;
    name:string;
    description:string;
    active:boolean;
    is_deleted:boolean;
}

export interface moduleCreate{
    // id:number;
    name:string;
    description:string;
    active:boolean;
}