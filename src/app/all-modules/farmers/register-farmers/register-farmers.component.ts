import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators'
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-register-farmers',
  templateUrl: './register-farmers.component.html',
  styleUrls: ['./register-farmers.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
})
export class RegisterFarmersComponent implements OnInit {
  disableSelect = new FormControl(false);

  // Basic Farmer Details
  farmerDetails = this.fb.group({
    famerType: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    id_number: ['', [Validators.required]],
    date: ['', [Validators.required]],
    tax_pin: ['', [Validators.required]],
    district: ['', [Validators.required]],
    region: ['', [Validators.required]],
    department: ['', [Validators.required]],
    village: ['', [Validators.required]],
  });

  // Farmer Contact Details
  contactDetails = this.fb.group({
    farm_manager: ['', [Validators.required]],
    pri_number: ['', [Validators.required]],
    alt_number: ['', [Validators.required]],
    pri_email: ['', [Validators.required]],
    alt_email: ['', [Validators.required]],
    post_address: ['', [Validators.required]],
  });

  // Farmer Account Details
  accountDetails = this.fb.group({
    account_type: ['', [Validators.required]],
    role: ['', [Validators.required]],
    farm_manager: ['', [Validators.required]],
    pri_number: ['', [Validators.required]],
    alt_number: ['', [Validators.required]],
    mobileNumber: ['', [Validators.required]],
    id_number: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  farmDetails = this.fb.group({
    farmName: ['', [Validators.required]],
    farmSize: ['', [Validators.required]],
    unit: ['', [Validators.required]],
    cocoa_age: ['', [Validators.required]],
    tree_height: ['', [Validators.required]],
    basal_area: ['', [Validators.required]],
    estimated_yield: ['', [Validators.required]],
  });
  stepperOrientation: Observable<StepperOrientation>;

  // files: any;
  file: File[] = [];
  url?: string | ArrayBuffer | null | undefined;
  uploading = false;
  fileList: NzUploadFile[] = [];

  constructor(private fb: FormBuilder, private all_Service: HttpService,
    breakpointObserver: BreakpointObserver,private http: HttpClient, private msg: NzMessageService) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
  }

  // Photo upload

  onSelect(event: any) {

    if (event.target.files.length > 0) {
      this.files = event.target.files[0];
      // tslint:disable-next-line:new-parens
      const reader = new FileReader;
      reader.readAsDataURL(event.target.files[0]);
      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event) => {
        this.url = event.target?.result;
      };
    }
  }

  // Document upload

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };

  
  handleUpload(): void {
    const formData = new FormData();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.fileList.forEach((file: any) => {
      formData.append('files[]', file);
    });
    this.uploading = true;
    // You can use any AJAX library you like
    const req = new HttpRequest('POST', 'https://www.mocky.io/v2/5cc8019d300000980a055e76', formData, {
      // reportProgress: true
    });
    this.http
      .request(req)
      .pipe(filter(e => e instanceof HttpResponse))
      .subscribe(
        () => {
          this.uploading = false;
          this.fileList = [];
          this.msg.success('upload successfully.');
        },
        () => {
          this.uploading = false;
          this.msg.error('upload failed.');
        }
      );
  }


  // Document Upload
  files: NzUploadFile[] = [];
  mockOSSData = {
    dir: 'user-dir/',
    expire: '1577811661',
    host: '//www.mocky.io/v2/5cc8019d300000980a055e76',
    accessId: 'c2hhb2RhaG9uZw==',
    policy: 'eGl4aWhhaGFrdWt1ZGFkYQ==',
    signature: 'ZGFob25nc2hhbw=='
  };

  transformFile = (file: NzUploadFile): NzUploadFile => {
    const suffix = file.name.slice(file.name.lastIndexOf('.'));
    const filename = Date.now() + suffix;
    file.url = this.mockOSSData.dir + filename;

    return file;
  };

  getExtraData = (file: NzUploadFile): {} => {
    const { accessId, policy, signature } = this.mockOSSData;

    return {
      key: file.url,
      OSSAccessKeyId: accessId,
      policy,
      Signature: signature
    };
  };

  onChange(e: NzUploadChangeParam): void {
    console.log('Aliyun OSS:', e.fileList);
  }
  
  downloadTemp() {
  }
  onSubmit(){
    const formData = {
      famerType: this.farmerDetails.value.famerType,
      firstName: this.farmerDetails.value.firstName,
      lastName: this.farmerDetails.value.lastName,
      gender: this.farmerDetails.value.gender,
      id_number: this.farmerDetails.value.id_number,
      date: this.farmerDetails.value.date,
      tax_pin: this.farmDetails.value.tax_pin,
      district: this.farmerDetails.value.district,
      region: this.farmerDetails.value.region,
      department: this.farmerDetails.value.department,
      village: this.farmerDetails.value.village
    };
   this.all_Service.post('farmerbasicdetails', formData).subscribe((response: any) => {
    console.log('response');
    console.log(response)
   })

   const contactData = {
    farm_manager: this.contactDetails.value.farm_manager,
    pri_number: this.contactDetails.value.pri_number,
    alt_number: this.contactDetails.value.alt_number,
    pri_email: this.contactDetails.value.pri_email,
    alt_email: this.contactDetails.value.alt_email,
    post_address: this.contactDetails.value.post_address,
  };
    this.all_Service.post('farmercontactdetails', contactData).subscribe((response: any) => {
      console.log('response');
      console.log(response)
    })

    const accountData = {
      account_type: this.accountDetails.value.account_type,
      role: this.accountDetails.value.role,
      farm_manager: this.accountDetails.value.farm_manager,
      pri_number: this.accountDetails.value.pri_number,
      alt_number: this.accountDetails.value.alt_number,
      mobileNumber: this.accountDetails.value.mobileNumber,
      id_number: this.accountDetails.value.id_number,
      password: this.accountDetails.value.password,
    };
    this.all_Service.post('farmeraccountdetails', accountData).subscribe((response: any) => {
      console.log('response');
      console.log(response)
     })

     const farmData = {
      farmName: this.farmDetails.value.farmName,
      farmSize: this.farmDetails.value.farmSize,
      unit: this.farmDetails.value.unit,
      cocoa_age: this.farmDetails.value.cocoa_age,
      tree_height: this.farmDetails.value.tree_height,
      basal_area: this.farmDetails.value.basal_area,
      estimated_yield: this.farmDetails.value.estimated_yield,
    };
    this.all_Service.post('farmdetails', farmData).subscribe((response: any) => {
      console.log('response');
      console.log(response)
     })
  }

  // onSubmitContact(){
  //   const formData = {
  //     farm_manager: this.contactDetails.value.farm_manager,
  //     pri_number: this.contactDetails.value.pri_number,
  //     alt_number: this.contactDetails.value.alt_number,
  //     pri_email: this.contactDetails.value.pri_email,
  //     alt_email: this.contactDetails.value.alt_email,
  //     post_address: this.contactDetails.value.post_address,
  //   };
  //  this.all_Service.post('farmercontactdetails', formData).subscribe((response: any) => {
  //   console.log('response');
  //   console.log(response)
  //  })
  // }

  // onSubmitAccount(){
  //   const formData = {
  //     account_type: this.accountDetails.value.account_type,
  //     role: this.accountDetails.value.role,
  //     farm_manager: this.accountDetails.value.farm_manager,
  //     pri_number: this.accountDetails.value.pri_number,
  //     alt_number: this.accountDetails.value.alt_number,
  //     mobileNumber: this.accountDetails.value.mobileNumber,
  //     id_number: this.accountDetails.value.id_number,
  //     password: this.accountDetails.value.password,
  //   };
  //   this.all_Service.post('farmeraccountdetails', formData).subscribe((response: any) => {
  //     console.log('response');
  //     console.log(response)
  //    })
  // }

  // onSubmitFarm(){
  //   const formData = {
  //     farmName: this.farmDetails.value.farmName,
  //     farmSize: this.farmDetails.value.farmSize,
  //     unit: this.farmDetails.value.unit,
  //     cocoa_age: this.farmDetails.value.cocoa_age,
  //     tree_height: this.farmDetails.value.tree_height,
  //     basal_area: this.farmDetails.value.basal_area,
  //     estimated_yield: this.farmDetails.value.estimated_yield,
  //   };
  //   this.all_Service.post('farmdetails', formData).subscribe((response: any) => {
  //     console.log('response');
  //     console.log(response)
  //    })
  // }

}
