import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {
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
  listSeasons: any[] = [];
  isLoading= false;

  addseason:any = FormGroup;

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
    
    this.loadSeasons();

    this.addseason = this.fb.group({
      season: ['',[ Validators.required]],
      crop: ['',[ Validators.required]],
      startDate: ['',[ Validators.required]],
      endDate: ['',[ Validators.required]],
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
    this.listSeasons = [];
    this.loadSeasons();
    setTimeout(() => {
      // @ts-ignore
      this.dtTrigger.next();
    }, 1000);
  }


  // Get Employee  Api Call
  public loadSeasons():void {
    this.isLoading = true;
    this.all_Service.getData('seasons').subscribe((response: any) => {
      this.listSeasons = response;
      // this.dtTrigger.next();
      console.log('Planting Seasons');
      console.log(this.listSeasons)
      this.rows = this.listSeasons;
      this.srch = [...this.rows];
      this.isLoading = false;
      this.toastr.success("Loaded Successfully", "Eclectics_Int", {
        enableHtml :  true
    });
    });

    this.toastr.error("Unable to Load Data", "Eclectics_Int",{
        enableHtml : true
    });
  }


  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    const formData = {
      season: this.addseason.value.season,
      crop: this.addseason.value.crop,
      startDate: this.addseason.value.startDate,
      endDate: this.addseason.value.endDate,
    };
   this.all_Service.post('seasons', formData).subscribe((response: any) => {
    console.log('response');
    console.log(response)

    this.loadSeasons();
    })
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
    this.toastr.warning("Action Cancelled", "Season Parameters", {
      enableHtml :  true
  });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
