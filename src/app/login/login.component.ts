import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogearService } from '../services/logear.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  us:string="";
  ps:string="";

  log_user:any = {
      user: "",
      pssw: ""
  }

  constructor(private service:LogearService, private route: Router) { }
   
    inicio(): void{
      console.log("inicio");

      this.us = ((document.getElementById("nuser") as HTMLInputElement).value);
      this.ps = ((document.getElementById("pssw") as HTMLInputElement).value);
      
      this.log_user={
        "user": this.us,
        "pssw": this.ps
      }
      console.log(this.log_user)
      this.service.getInicio(this.log_user)
      .subscribe(data =>{
        if (data.ex == true ) {
          if (data.tp == 0) {
            console.log(data);
            //this.route.navigate(['dashboard/admin']);
          } else { 
            if (data.tp == 1) {
              //this.route.navigate(['dashboard/user']);
            }
          }
        }
         console.log(data.ex)}, err => {
           console.log(err)
          }
         )
        }
        
    
  

  ngOnInit(): void {

    
    
   
    


  }

}
