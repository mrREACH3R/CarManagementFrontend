import { Component } from '@angular/core';
import { Car } from '../models/car';
import { CarService } from '../services/car.service';


@Component({
  selector: 'app-car-by-id',
  templateUrl: './car-by-id.component.html',
  styleUrl: './car-by-id.component.css'
})
export class CarByIdComponent 
{
  car:Car|undefined;
  carId:number=0;
  constructor( private carService:CarService)
  {
  }

  getCarById()
  {
    this.carService.getCarById(this.carId).subscribe((data:Car)=>
      {this.car=data}) 
  }

}
