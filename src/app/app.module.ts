import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { InventoryComponent } from './inventory/inventory.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import{ MaterialModule} from './material/material.module';
import {FormsModule} from '@angular/forms'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginComponent } from './login/login.component';
import { KingslandingComponent } from './kingslanding/kingslanding.component';



;


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TabsComponent,
    InventoryComponent,
    ProfileComponent,
    LoginComponent,
    KingslandingComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    MaterialModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
