import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(
      [
        {path:'register',component:UserRegisterComponent}
      ]
    )
  ]
})
export class UserModule { }
