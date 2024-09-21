import { Component } from '@angular/core';
import { Car } from '../models/car';
import { CarService } from '../services/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-top',
  templateUrl: './car-top.component.html',
  styleUrl: './car-top.component.css'
})
export class CarTopComponent 
{
  N:number=0;
  cars:Car[]=[];
  constructor( private carService:CarService,private route:ActivatedRoute)
  {
  }
 
 
  setN()
  {
      this.carService.getTopNCarByPrice(this.N).subscribe((data:Car[])=>
      {this.cars=data});
  }

}
