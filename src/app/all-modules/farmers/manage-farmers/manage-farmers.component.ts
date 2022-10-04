import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-manage-farmers',
  templateUrl: './manage-farmers.component.html',
  styleUrls: ['./manage-farmers.component.css']
})
export class ManageFarmersComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})
  public dtElement?: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public pipe = new DatePipe("en-US");

  public rows:any[] = [];
  public srch:any[] = [];
  listFarmers: any[] = [];
  basicDetails: any[] = [];
  accountDetails: any[] = [];
  contactDetails: any[] = [];
  farmDetails: any[] = []

  constructor(private router: Router,
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


  this.loadFarmers();

    
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
    this.listFarmers = [];
    this.loadFarmers();
    setTimeout(() => {
      // @ts-ignore
      this.dtTrigger.next();
    }, 1000);
  }

  // Get Active  Api Call
  public loadFarmers():void {
    this.all_Service.getData('farmerbasicdetails').subscribe((response: any) => {
      this.listFarmers = response;
      console.log('Basic Details');
      console.log(this.listFarmers)
      this.rows = this.listFarmers;
      this.srch = [...this.rows];
    });
    // this.all_Service.getData('farmercontactdetails').subscribe((response: any) => {
    //   this.listFarmers = response;
    //   console.log('Contact Details');
    //   console.log(this.listFarmers)
    //   this.rows = this.listFarmers;
    //   this.srch = [...this.rows];
    // });
    // this.all_Service.getData('farmeraccountdetails').subscribe((response: any) => {
    //   this.listFarmers = response;
    //   console.log('Account Details');
    //   console.log(this.listFarmers)
    //   this.rows = this.listFarmers;
    //   this.srch = [...this.rows];
    // });

    // this.all_Service.getData('farmdetails').subscribe((response: any) => {
    //   this.listFarmers = response;
    //   console.log('Farm Details');
    //   console.log(this.listFarmers)
    //   this.rows = this.listFarmers;
    //   this.srch = [...this.rows];
    // });
  }

  //navigates to single user view
  view(farmer:any): void {
    console.log(farmer);
    this.router.navigate(['/layout/farmers/view', farmer.id]);
  }


  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}


