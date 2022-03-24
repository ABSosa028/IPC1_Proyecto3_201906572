import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActUsComponent } from './act-us/act-us.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TotalpubComponent } from './totalpub/totalpub.component';
import { TotalusComponent } from './totalus/totalus.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard/admin',
    component: DashboardAdminComponent
  },
  {
    path:'dashboard/admin/listus',
    component: TotalusComponent
  },
  {
    path:'dashboard/admin/listpub',
    component: TotalpubComponent
  },
  {
    path:'dashboard/user',
    component: DashboardUserComponent
  },
  {
    path:'prueba',
    component: ActUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
