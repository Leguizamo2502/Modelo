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
import { GetDeletesUserComponent } from './components/user/get-deletes-user/get-deletes-user.component';
import { GetDeletesRolComponent } from './components/rol/get-deletes-rol/get-deletes-rol.component';
import { GetDeletesFormComponent } from './components/form/get-deletes-form/get-deletes-form.component';
import { GetDeletesPermissionComponent } from './components/permission/get-deletes-permission/get-deletes-permission.component';
import { GetDeletesPersonComponent } from './components/person/get-deletes-person/get-deletes-person.component';
import { GetDeletesFormModuleComponent } from './components/formModule/get-deletes-form-module/get-deletes-form-module.component';
import { GetDeletesRolFormPermissionComponent } from './components/rolFormPermission/get-deletes-rol-form-permission/get-deletes-rol-form-permission.component';
import { GetDeletesRolUserComponent } from './components/rolUser/get-deletes-rol-user/get-deletes-rol-user.component';

export const routes: Routes = [
    {path:'register-user',component:RegisterUserComponent},
    {path:'register-user/update/:id',component:UpdateUserComponent},
    {path:'register-user/restaure',component:GetDeletesUserComponent},

    {path:'register-rol',component:RegisterRolComponent},
    {path:'register-rol/update/:id', component:UpdateRolComponent},
    {path:'register-rol/restaure', component:GetDeletesRolComponent},

    {path:'register-form',component:RegisterFormComponent},
    {path:'register-form/update/:id',component:UpdateFormComponent},
    {path:'register-form/restaure',component:GetDeletesFormComponent},

    {path:'register-module',component:RegisterModuleComponent},
    {path:'register-module/update/:id',component:UpdateModuleComponent},
    {path:'register-module/restaure',component:GetDeletesModuleComponent},

    {path:'register-permission',component:RegisterPermissionComponent},
    {path:'register-permission/update/:id',component:UpdatePermissionComponent},
    {path:'register-permission/restaure',component:GetDeletesPermissionComponent},

    {path:'register-person',component:RegisterPersonComponent},
    {path:'register-person/update/:id',component:UpdatePersonComponent},
    {path:'register-person/restaure',component:GetDeletesPersonComponent},

    {path:'register-rolUser',component:RegisterRolUserComponent},
    {path:'register-rolUser/update/:id',component:UpdateRolUserComponent},
    {path:'register-rolUser/restaure',component:GetDeletesRolUserComponent},

    {path:'register-formModule',component:RegisterFormModuleComponent},
    {path:'register-formModule/update/:id',component:UpdateFormModuleComponent},
    {path:'register-formModule/restaure',component:GetDeletesFormModuleComponent},

    {path:'register-rolFormPermission',component:RegisterRolFormPermissionComponent},
    {path:'register-rolFormPermission/update/:id',component:UpdateRolFormPermissionComponent},
    {path:'register-rolFormPermission/restaure',component:GetDeletesRolFormPermissionComponent},

    {path:'login',component:LoginComponent},
    { path: '', redirectTo: 'login', pathMatch: 'full' },



];
