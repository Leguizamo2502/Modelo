export interface rolFormPermission{
        id:number,
        rolid: number,
        formid: number,
        active: boolean,
        permissionid: number
      
      
}

export interface rolFormPermissionCreate{
    // id:number,
    // rol_name: string,
    // form_name: string,
    // permission_name: string,
    rolid:number,
    formid:number,
    active:boolean,
    permissionid:number
}