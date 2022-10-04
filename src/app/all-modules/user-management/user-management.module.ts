import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DataTablesModule } from 'angular-datatables';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { MatIconModule } from '@angular/material/icon';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { MatMenuModule } from '@angular/material/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { MatCardModule } from '@angular/material/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { MatSelectModule } from '@angular/material/select';
import { AssignProfileComponent } from './assign-profile/assign-profile.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';


@NgModule({
  declarations: [
    UserListComponent,
    UserProfileComponent,
    AssignProfileComponent,
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    NzCardModule,
    NzButtonModule,
    NzSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzIconModule,
    NzModalModule,
    DataTablesModule,
    MatIconModule,
    NzTreeModule,
    NzMenuModule,
    MatMenuModule,
    NzDropDownModule,
    MatSelectModule,
    NzTabsModule,
    MatCardModule,
    NzDescriptionsModule,
    NzFormModule,
    NzTagModule,
    MatDialogModule
    
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
 ],
})
export class UserManagementModule { }
