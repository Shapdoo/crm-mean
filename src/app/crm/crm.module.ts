import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmRoutingModule } from './crm-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddClientComponent } from './pages/add-client/add-client.component';


@NgModule({
  declarations: [
    HomeComponent,
    ChartsComponent,
    ProfileComponent,
    AddClientComponent
  ],
  imports: [
    CommonModule,
    CrmRoutingModule
  ]
})
export class CrmModule { }
