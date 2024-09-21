import { Component, Input, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../models/car';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent implements OnInit 
{
  car:Car|undefined;

  constructor( private carService:CarService,private route:ActivatedRoute)
  {
  }

  ngOnInit(): void 
  { 
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.carService.getCarById(id).subscribe((data:Car)=>
      {this.car=data}) 
  }
}
