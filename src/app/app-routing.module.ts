import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'inventory', component: InventoryComponent },
  { path: 'Profile', component: ProfileComponent  },
  { path: 'Login', component: LoginComponent  },
  { path: 'App', component: AppComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
