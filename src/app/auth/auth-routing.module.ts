import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { RegisterComponent } from '@auth/pages/register/register.component';
import { LoginComponent } from '@auth/pages/login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
    children: [
     {
      path: '',
      children: [
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'register',
          component: RegisterComponent
        },
        {
          path: '**',
          redirectTo: 'login',
          pathMatch: 'full'
        }
      ]
     }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
