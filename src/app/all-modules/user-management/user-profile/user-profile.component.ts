import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any[] =[];
  img: string = 'data:image/png;base64,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';
  imgg: string ='data:image/png;base64,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';
  imggg: string = 'data:image/png;base64,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';
  constructor(private all_Service: HttpService) { }

  ngOnInit(): void {
  }



    // Get Active  Api Call
    public getUserById():void {
      this.all_Service.getData('users=${id}').subscribe((response: any) => {
        this.user = response;
        // this.dtTrigger.next();
        console.log('Users');
        console.log(this.user)
      });
    }

}
