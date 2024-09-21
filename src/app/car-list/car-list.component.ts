import { Component } from '@angular/core';
import { Car } from '../models/car';
import { CarService } from '../services/car.service';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css' 
})
export class CarListComponent 
{
  cars:Car[]=[];
  constructor( private carService:CarService)
  {
  }

  ngOnInit(): void 
  {
    
    this.carService.getAllCars().subscribe((data:Car[])=>
      {this.cars=data}); 
  }

}
