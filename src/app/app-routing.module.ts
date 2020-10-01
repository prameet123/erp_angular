import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeviceComponent} from './device/device.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {path:'device-registration', component:DeviceComponent},
  {path:'Add-device', component:RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
