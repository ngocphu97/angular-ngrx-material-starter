import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent, AdminToolbarComponent, AdminSidebarComponent } from './layout';
const MAT_MODULES = [
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatListModule
];

@NgModule({
  imports: [
    CommonModule,
    MAT_MODULES,
    TranslateModule.forChild(),
    AdminRoutingModule
  ],
  declarations: [
    AdminLayoutComponent,
    AdminToolbarComponent,
    AdminSidebarComponent
  ]
})
export class AdminModule { }
