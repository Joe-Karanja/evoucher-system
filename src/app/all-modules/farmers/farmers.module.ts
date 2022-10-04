import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmersRoutingModule } from './farmers-routing.module';
import { RegisterFarmersComponent } from './register-farmers/register-farmers.component';
import { ManageFarmersComponent } from './manage-farmers/manage-farmers.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { MatCardModule } from '@angular/material/card';
import { DataTablesModule } from 'angular-datatables';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ViewFarmerComponent } from './view-farmer/view-farmer.component';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { MatMenuModule } from '@angular/material/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
// import { IgxStepperModule, IgxButtonModule, IgxButtonGroupModule} from "igniteui-angular";



@NgModule({
  declarations: [
    RegisterFarmersComponent,
    ManageFarmersComponent,
    ViewFarmerComponent,
  ],
  imports: [
    CommonModule,
    FarmersRoutingModule,
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
export class FarmersModule { }
