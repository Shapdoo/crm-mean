
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddClientComponent } from '@crm/pages/add-client/add-client.component';
import { ChartsComponent } from '@crm/pages/charts/charts.component';
import { HomeComponent } from '@crm/pages/home/home.component';
import { ProfileComponent } from '@crm/pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'charts',
        component: ChartsComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'add-client',
        component: AddClientComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
