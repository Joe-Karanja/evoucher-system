import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficiaryRoutingModule } from './beneficiary-routing.module';
import { MicroFinanceComponent } from './micro-finance/micro-finance.component';
import { SmallHouseholdsComponent } from './small-households/small-households.component';
import { FarmerComponent } from './farmer/farmer.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { DataTablesModule } from 'angular-datatables';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { MatCardModule } from '@angular/material/card';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { ManageBeneficiaryComponent } from './manage-beneficiary/manage-beneficiary.component';


@NgModule({
  declarations: [
    MicroFinanceComponent,
    SmallHouseholdsComponent,
    FarmerComponent,
    ManageBeneficiaryComponent
  ],
  imports: [
    CommonModule,
    BeneficiaryRoutingModule,
    NzCardModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    DataTablesModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NzCardModule,
    MatCardModule,
    NzStepsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    NzInputModule,
    NzGridModule,
    NzUploadModule,
    NzMessageModule,
    NzFormModule,
    NzTabsModule,
    NzTagModule,
    NzDescriptionsModule,
    NzMenuModule,
    MatMenuModule,
    NzDropDownModule,
  ]
})
export class BeneficiaryModule { }
