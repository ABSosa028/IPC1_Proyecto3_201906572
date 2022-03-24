import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { TotalusComponent } from './totalus/totalus.component';
import { TotalpubComponent } from './totalpub/totalpub.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { ActUsComponent } from './act-us/act-us.component';
import { RouterModule} from '@angular/router';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardAdminComponent,
    TotalusComponent,
    TotalpubComponent,
    DashboardUserComponent,
    ActUsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
