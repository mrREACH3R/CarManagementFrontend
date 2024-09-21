import { Component } from '@angular/core';
import { CarService } from '../services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  userModel={
    firstName:'',
    lastName:'',
    email:'',
    password: ''
  }

  constructor(private carService:CarService,private router: Router){}
  navigateTo(route:string){
    this.router.navigate([`/${route}`]);
  }

  onSignUp(){
    this.carService.registerUser(this.userModel).subscribe(
      (response:any)=>{
        alert('Sigup successful ! Check mail');
        this.router.navigate(['/login']);
      },
      (error:any)=>{
        alert('Error server down !');
      }
    );
  }

}
