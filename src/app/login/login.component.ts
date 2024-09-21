import { Component } from '@angular/core';
import { CarService } from '../services/car.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginModel = {
    email: '',
    password:''
  }

  constructor(private carService: CarService,private route:Router){
    
  }

  onLogin(){
    this.carService.login(this.loginModel).subscribe((response:string)=>{
      if(response==='Login Sucess'){
        this.route.navigate(['/cars']);
      }else{
        alert('Invalid');
      }
    });
  }
}
