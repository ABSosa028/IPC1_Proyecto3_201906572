import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { ResponseI } from '../models/response.interface';


@Injectable({
  providedIn: 'root'
})
export class LogearService {

  private API_LOG = "http://127.0.0.1:5000/"
  
  constructor(private http: HttpClient) { }

  public getInicio(user:any){
    console.log('estamos funcionando')
    return this.http.post<any>(this.API_LOG+"ett", user);
  }

  public getUsers(){

    return this.http.get<ResponseI[]>(this.API_LOG+"getUsers");
  }

  public elUser(user:string){

    return this.http.delete<any>(this.API_LOG+'delete/'+user);
  }


}
