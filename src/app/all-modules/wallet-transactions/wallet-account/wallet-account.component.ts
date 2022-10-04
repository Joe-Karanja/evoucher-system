import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-wallet-account',
  templateUrl: './wallet-account.component.html',
  styleUrls: ['./wallet-account.component.css']
})
export class WalletAccountComponent implements OnInit {
  isVisible = false;
  isConfirmLoading = false;
  @ViewChild(DataTableDirective, {static: false})
  public dtElement?: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public pipe = new DatePipe("en-US");

  public rows:any[] = [];
  public srch:any[] = [];
  listTopups: any[] = [];
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


  this.loadTopups();


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
    this.listTopups = [];
    this.loadTopups();
    setTimeout(() => {
      // @ts-ignore
      this.dtTrigger.next();
    }, 1000);
  }

  // Get Active  Api Call
  public loadTopups():void {
    this.all_Service.getData('wallet-topups').subscribe((response: any) => {
      this.listTopups = response;
      // this.dtTrigger.next();
      console.log('All Transactions');
      console.log(this,this.listTopups)
      this.rows = this.listTopups;
      this.srch = [...this.rows];
      this.toastr.success("Loaded Successfully", "Eclectics_Int", {
        enableHtml :  true
    });

    });
  }

 


  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
