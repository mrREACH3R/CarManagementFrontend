import { Component } from '@angular/core';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrl: './car-delete.component.css'
})
export class CarDeleteComponent {
  Id:number=0;
  constructor(private service:CarService){}
  setId(){
    this.service.deleteCar(this.Id).subscribe(()=>{
      alert("Car Deleted")
    })
  }

}
