import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login2Component } from './login2.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
 
const routes = [
  {
      path     : '',
      component: Login2Component
  }
];

@NgModule({
  declarations: [
    Login2Component
  ],
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
      MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
      FuseSharedModule
  ]
})
export class Login2Module { }
