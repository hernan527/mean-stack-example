import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BaseLayoutComponent } from './components/layouts/base-layout.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

const commonModules = [
  HttpClientModule,
  FormsModule,
  CommonModule,
  MaterialModule
]

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BaseLayoutComponent,
    LoaderComponent,
    SidenavComponent
  ],
  imports: [CommonModule, RouterModule, ...commonModules],
  exports: [
    HeaderComponent,
    FooterComponent,
    BaseLayoutComponent,
    LoaderComponent,
    SidenavComponent,
    ...commonModules
  ]
})
export class SharedModule {}