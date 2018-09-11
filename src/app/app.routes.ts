
import { PagesComponent } from './pages/pages.component';


import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { Component } from '@angular/core';




const appRoutes:  Routes = [

    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', component: NopagefoundComponent},
];

export const APP_RUTES = RouterModule.forRoot (appRoutes, {useHash: true});
