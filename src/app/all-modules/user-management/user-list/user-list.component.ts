import { AssignProfileComponent } from './../assign-profile/assign-profile.component';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  isVisible = false;
  isAssignVisible= false;
  isConfirmLoading = false;
  @ViewChild(DataTableDirective, {static: false})
  public dtElement?: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public pipe = new DatePipe("en-US");

  public rows:any[] = [];
  public srch:any[] = [];
  listUsers: any[] = [];
  addUsers:any = FormGroup;
  user: any;

  constructor(private router: Router,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private http: HttpClient,
    private all_Service: HttpService,
    private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };


  this.loadUsers();

  this.addUsers = this.fb.group({
    firstName: ['',[ Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    mobileNumber: ['', [Validators.required]],
    userId: ['', [Validators.required]],
    moduleAssigned: ['', [Validators.required]]
  });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      // @ts-ignore
      this.dtTrigger.next();
    }, 1000);
  }

  rerender(): void {
    $("#datatable").DataTable().clear();
    // @ts-ignore
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
    });
    this.listUsers = [];
    this.loadUsers();
    setTimeout(() => {
      // @ts-ignore
      this.dtTrigger.next();
    }, 1000);
  }

  // Get Active  Api Call
  public loadUsers():void {
    this.all_Service.getData('users').subscribe((response: any) => {
      this.listUsers = response;
      // this.dtTrigger.next();
      console.log('All Users');
      console.log(this,this.listUsers)
      this.rows = this.listUsers;
      this.srch = [...this.rows];

    });
  }

  //navigates to single user view
  view(users:any): void {
    console.log(users);
    this.router.navigate(['/layout/users/profile', users.id]);
  }

  showModal(): void {
    this.isVisible = true;
  }
  assignModal(): void {
    this.isAssignVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
      const formData = {
        firstName: this.addUsers.value.firstName,
        lastName: this.addUsers.value.lastName,
        userId: this.addUsers.value.userId,
        moduleAssigned: this.addUsers.value.moduleAssigned,
        email: this.addUsers.value.email,
        mobileNumber: this.addUsers.value.mobileNumber,
      };
     this.all_Service.post('users', formData).subscribe((response: any) => {
      console.log('response');
      console.log(response)

      this.loadUsers();
     })
    }, 1000);
    this.toastr.success("Added Successfully", "E-Voucher", {
      enableHtml :  true
  });
  }

  handleCancel(): void {
    this.isVisible = false;
    this.toastr.warning("Action Cancelled", "E-Voucher", {
      enableHtml :  true
  });
  }

   //opens user creation modal
   triggerModal(data: any): void {
    const dialogRef = this.dialog.open(AssignProfileComponent, {data: {}, height: '570px', width: '570px', disableClose: true});
    dialogRef.afterClosed().subscribe(() => {
      //console.log("form data: ", data);
      // this.loadData();
    })
  } 

  


  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}




