import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
// import {headers} from "../../http/http-headers";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = environment.apiUrl;
 

  constructor(private http: HttpClient) { }
      getData(endpoint: string){
        return this.http.get(this.baseUrl + endpoint);
      }

      getUserById(id: number): Observable<any[]> {
        return this.http.get<any[]>( this.baseUrl + `users=${id}`)
      }


      post(endpoint: string, model: any){
        return this.http.post(this.baseUrl + endpoint, model);
      }
}
