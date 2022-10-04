
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllModulesRoutingModule } from './all-modules-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LayoutComponent } from '../shared/layout/layout.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
// import { DataTablesModule } from 'angular-datatables';




@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    AllModulesRoutingModule,
    NzLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NzPageHeaderModule,
    NzMenuModule,
    NzIconModule,
    NzButtonModule,
    NzTabsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
    // DataTablesModule 
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
 ],
})
export class AllModulesModule { }
