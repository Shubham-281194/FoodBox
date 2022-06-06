import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserService} from 'src/app/services/user.service';
import {FormBuilder,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _http:HttpClient,private router:Router,private userService:UserService) { }
  public user={
    username: '',
    password: ''
  }


  ngOnInit(): void {}
  formLogin(){
  
       
      
      if(this.user.username=="shubham1" && this.user.password=="87654321"){
        
        alert('User Login Succesfull');
      //this.formLogin.reset();
             this.router.navigate(['home'])
              }
              else if(this.user.username=="Shubham" && this.user.password=="123456"){
        
                alert('Admin Login Succesfull');
              //this.formLogin.reset();
                     this.router.navigate(['homeadmin'])
                      }
                      else{
                alert('User not found');
                return;
                }
              
              // if(this.user.username=="Shubham" && this.user.password=="123456"){
        
              //   alert('Admin Login Succesfull');
              // //this.formLogin.reset();
              //        this.router.navigate(['homeadmin'])
              //         }


              
   
    
    
  }
}