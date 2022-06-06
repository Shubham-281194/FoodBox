import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {UserService} from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService, private router:Router,private snack: MatSnackBar) { }

  public user={
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    roleIdLong: '',

  };

  ngOnInit(): void {} 
  formSubmit(){
  console.log(this.user);
  if(this.user.username== ''|| this.user.username == null){
    this.snack.open("User name is Required",'ok',{duration:6000,
    verticalPosition:'bottom',
  horizontalPosition:'center'});
    //alert('User is Required');
    return;
  }
 // addUser  data
 this.userService.addUser(this.user).subscribe(
   (data)=>{
     //done onclick
     console.log(data);
     alert('success');
     this.router.navigate(['login'])

   },
   (error)=>{
     // on error
     console.log(error);
     //alert('Somthing went wrong');
     this.snack.open('Somthing went wrong','',{duration:3000});

   }
 );

}
}