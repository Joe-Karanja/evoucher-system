import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../services/http.service';

declare const $: any;
import { DatePipe } from '@angular/common';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit, OnDestroy {
  isVisible = false;
  isConfirmLoading = false;
  @ViewChild(DataTableDirective, {static: false})
  public dtElement?: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public pipe = new DatePipe("en-US");
  size: NzButtonSize = 'small';
  public rows:any[] = [];
  public srch:any[] = [];
  listGenerated: any[] = [];
  isLoading= false;

  generateEV:any = FormGroup;

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
    
    this.loadGenerated();

    this.generateEV = this.fb.group({
      voucher_id: ['',[ Validators.required]],
      ev_code: ['', [Validators.required]],
      date_Created: ['',[Validators.required]],
      season: ['', [Validators.required]],
      input_category: ['', [Validators.required]],
      gov_funding: ['', [Validators.required]],
      farmer_contribution: ['', [Validators.required]],
      gross_value: ['', [Validators.required]],
      region: ['', [Validators.required]]
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
    this.listGenerated = [];
    this.loadGenerated();
    setTimeout(() => {
      // @ts-ignore
      this.dtTrigger.next();
    }, 1000);
  }


  // Get Employee  Api Call
  public loadGenerated():void {
    this.isLoading = true;
    this.all_Service.getData('generated').subscribe((response: any) => {
      this.listGenerated = response;
      // this.dtTrigger.next();
      console.log('Generated E-Vouchers');
      console.log(this,this.listGenerated)
      this.rows = this.listGenerated;
      this.srch = [...this.rows];
      this.isLoading = false;
    });
  }


  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    const formData = {
      voucher_id: this.generateEV.value.voucher_id,
      ev_code: this.generateEV.value.ev_code,
      date_Created: this.generateEV.value.date_Created,
      season: this.generateEV.value.season,
      input_category: this.generateEV.value.input_category,
      gov_funding: this.generateEV.value.gov_funding,
      farmer_contribution: this.generateEV.value.farmer_contribution,
      gross_value: this.generateEV.value.gross_value,
      region: this.generateEV.value.region
    };
   this.all_Service.post('generated', formData).subscribe((response: any) => {
    console.log('response');
    console.log(response)

    this.loadGenerated();
    })
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
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

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
