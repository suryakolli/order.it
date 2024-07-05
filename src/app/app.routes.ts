import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent,
  // },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
  },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
