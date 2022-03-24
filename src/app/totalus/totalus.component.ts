import { Component, OnInit } from '@angular/core';
import { ActUsComponent } from '../act-us/act-us.component';
import { ResponseI } from '../models/response.interface';
import { LogearService } from '../services/logear.service';

ActUsComponent
@Component({
  selector: 'app-totalus',
  templateUrl: './totalus.component.html',
  styleUrls: ['./totalus.component.css']
})
export class TotalusComponent implements OnInit {
  aed:string='';
  public userr:any={}
  constructor(private service:LogearService) { }

  ngOnInit(): void {
    this.service.getUsers()
      .subscribe(data =>{
          this.userr=data;
          console.log(this.userr)
          console.log('tt')
          console.log(this.userr)
          }
         )
         
  }
  

  delete(user:string){
     console.log(user)
     this.service.elUser(user)
      .subscribe(data =>{
        if (data.ex==true) {
          this.service.getUsers().subscribe(dat =>{
            this.userr={}
            this.userr=dat;
            console.log(this.userr)
          }
          )
          
        }
      })
      //window.location.reload();
      console.log(this.userr)
      this.ngOnInit();
      //window.location.reload();
      
  }
  usselect:ResponseI={
    name: '',
    genero: '',
    username: '',
    email: '',
    password: ''
    
  }
  selecus(es:ResponseI){
    this.usselect=es;
  }

  act(user:string){
    console.log("act"+user)

  }

  view(user:string){
    console.log("view"+user)


  }

}
