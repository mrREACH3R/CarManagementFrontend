import { Component } from '@angular/core';
import { Car } from '../models/car';
import { CarService } from '../services/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrl: './car-update.component.css'
})
export class CarUpdateComponent {


  carId:number=0;
  
  car:Car={
    id:0,
    modelName:'',
    year:'',
    price:0,
    distance:0,
    engineType:'',
    transmission:'',
    sellerType:'',
    owner:''
  };

  constructor(private service:CarService,private route:ActivatedRoute){}

  ngOnInit()
  {
    // this.carId=Number(this.route.snapshot.paramMap.get('id'));
    // if(this.carId)
    // {
    //   this.getById(this.carId);
    // }
      
  }
  getById()
  {
    this.service.getCarById(this.carId).subscribe((data)=>{this.car=data;},
    (error)=>{console.error('Erroe occurred during fetching data');})
  }

  updateCar()
  {
    this.service.updateCar(this.carId,this.car).subscribe((response)=>{console.log('car update successfully:',response);},
    (error)=>{console.error('Error occured in updating car :',error);})
  }
}
