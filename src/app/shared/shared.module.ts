import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import {MatTabsModule} from '@angular/material/tabs';
import { NzCardModule } from 'ng-zorro-antd/card';
import { HomeComponent } from './home/home.component';





@NgModule({
  declarations: [
  
    HomeComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzIconModule,
    NzTabsModule,
    MatTabsModule,
    NzCardModule,
  ],

  exports: [

  ]
})
export class SharedModule { }
