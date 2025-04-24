import { Routes } from '@angular/router';
import { RegisterUserComponent } from './components/user/register-user/register-user.component';
import { RegisterRolComponent } from './components/rol/register-rol/register-rol.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { RegisterFormComponent } from './components/form/register-form/register-form.component';
import { UpdateFormComponent } from './components/form/update-form/update-form.component';
import { UpdateRolComponent } from './components/rol/update-rol/update-rol.component';
import { RegisterModuleComponent } from './components/module/register-module/register-module.component';
import { UpdateModuleComponent } from './components/module/update-module/update-module.component';
import { RegisterPermissionComponent } from './components/permission/register-permission/register-permission.component';
import { UpdatePermissionComponent } from './components/permission/update-permission/update-permission.component';
import { RegisterPersonComponent } from './components/person/register-person/register-person.component';
import { UpdatePersonComponent } from './components/person/update-person/update-person.component';
import { RegisterRolUserComponent } from './components/rolUser/register-rol-user/register-rol-user.component';
import { UpdateRolUserComponent } from './components/rolUser/update-rol-user/update-rol-user.component';
import { RegisterFormModuleComponent } from './components/formModule/register-form-module/register-form-module.component';
import { UpdateFormModuleComponent } from './components/formModule/update-form-module/update-form-module.component';
import { RegisterRolFormPermissionComponent } from './components/rolFormPermission/register-rol-form-permission/register-rol-form-permission.component';
import { UpdateRolFormPermissionComponent } from './components/rolFormPermission/update-rol-form-permission/update-rol-form-permission.component';
import { LoginComponent } from './login/login.component';
import { GetDeletesModuleComponent } from './components/module/get-deletes-module/get-deletes-module.component';

export const routes: Routes = [
    {path:'register-user',component:RegisterUserComponent},
    {path:'register-user/update/:id',component:UpdateUserComponent},

    {path:'register-rol',component:RegisterRolComponent},
    {path:'register-rol/update/:id', component:UpdateRolComponent},

    {path:'register-form',component:RegisterFormComponent},
    {path:'register-form/update/:id',component:UpdateFormComponent},

    {path:'register-module',component:RegisterModuleComponent},
    {path:'register-module/update/:id',component:UpdateModuleComponent},
    {path:'register-module/restaure',component:GetDeletesModuleComponent},

    {path:'register-permission',component:RegisterPermissionComponent},
    {path:'register-permission/update/:id',component:UpdatePermissionComponent},

    {path:'register-person',component:RegisterPersonComponent},
    {path:'register-person/update/:id',component:UpdatePersonComponent},

    {path:'register-rolUser',component:RegisterRolUserComponent},
    {path:'register-rolUser/update/:id',component:UpdateRolUserComponent},

    {path:'register-formModule',component:RegisterFormModuleComponent},
    {path:'register-formModule/update/:id',component:UpdateFormModuleComponent},

    {path:'register-rolFormPermission',component:RegisterRolFormPermissionComponent},
    {path:'register-rolFormPermission/update/:id',component:UpdateRolFormPermissionComponent},

    {path:'login',component:LoginComponent},
    { path: '', redirectTo: 'login', pathMatch: 'full' },



];
