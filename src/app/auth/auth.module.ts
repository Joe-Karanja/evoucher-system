import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { OtpComponent } from './otp/otp.component';
import {MatCardModule} from '@angular/material/card';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    LockscreenComponent,
    OtpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatCardModule,
    NzCardModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
