import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  isVisible = false;
  isConfirmLoading = false;
  @ViewChild(DataTableDirective, {static: false})
  public dtElement?: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public pipe = new DatePipe("en-US");

  public rows:any[] = [];
  public srch:any[] = [];
  listRoles: any[] = [];
  addRole:any = FormGroup;
  user: any;

  constructor(private router: Router,
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


  this.loadRoles();

  this.addRole = this.fb.group({
    name: ['',[ Validators.required]],
    description: ['', [Validators.required]],
    roleType: ['', [Validators.required]],
    status: ['', [Validators.required]],
    createdOn: ['', [Validators.required]],
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
    this.listRoles = [];
    this.loadRoles();
    setTimeout(() => {
      // @ts-ignore
      this.dtTrigger.next();
    }, 1000);
  }

  // Get Active  Api Call
  public loadRoles():void {
    this.all_Service.getData('roles').subscribe((response: any) => {
      this.listRoles = response;
      // this.dtTrigger.next();
      console.log('All Users');
      console.log(this.listRoles)
      this.rows = this.listRoles;
      this.srch = [...this.rows];

    });
  }

  //navigates to single user view
  view(profile:any): void {
    console.log(profile);
    this.router.navigate(['/layout/profile/view', profile.id]);
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
      const formData = {
        name: this.addRole.value.name,
        description: this.addRole.value.description,
        roleType: this.addRole.value.roleType,
        status: this.addRole.value.status,
        createdOn: this.addRole.value.createdOn,
      };
     this.all_Service.post('roles', formData).subscribe((response: any) => {
      console.log('response');
      console.log(response)

      this.loadRoles();
     })
    }, 1000);
    this.toastr.success("Added Successfully", "Role", {
      enableHtml :  true
  });
  }

  handleCancel(): void {
    this.isVisible = false;
  }


  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
