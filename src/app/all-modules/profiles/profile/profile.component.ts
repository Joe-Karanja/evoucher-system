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
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isVisible = false;
  isConfirmLoading = false;
  @ViewChild(DataTableDirective, {static: false})
  public dtElement?: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public pipe = new DatePipe("en-US");

  public rows:any[] = [];
  public srch:any[] = [];
  listProfiles: any[] = [];
  addProfile:any = FormGroup;
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


  this.loadProfiles();

  this.addProfile = this.fb.group({
    name: ['',[ Validators.required]],
    description: ['', [Validators.required]],
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
    this.listProfiles = [];
    this.loadProfiles();
    setTimeout(() => {
      // @ts-ignore
      this.dtTrigger.next();
    }, 1000);
  }

  // Get Active  Api Call
  public loadProfiles():void {
    this.all_Service.getData('profiles').subscribe((response: any) => {
      this.listProfiles = response;
      // this.dtTrigger.next();
      console.log('All Users');
      console.log(this.listProfiles)
      this.rows = this.listProfiles;
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
        name: this.addProfile.value.name,
        description: this.addProfile.value.description,
        status: this.addProfile.value.status,
        createdOn: this.addProfile.value.createdOn,
      };
     this.all_Service.post('profiles', formData).subscribe((response: any) => {
      console.log('response');
      console.log(response)

      this.loadProfiles();
     })
    }, 1000);
    this.toastr.success("Added Successfully", "Profile", {
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
