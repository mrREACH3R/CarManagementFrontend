import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService 
{

  private apiUrl='http://localhost:8080/cars';
  private apiUrl2 = 'http://localhost:8082'
  constructor(private http:HttpClient) { }

  login(userMOdel:any):Observable<any>{
    return this.http.post(`${this.apiUrl2}/login`,userMOdel,{responseType:'text'});
  }
  registerUser(userMOdel:any):Observable<any>{
    return this.http.post(`${this.apiUrl2}/register`,userMOdel,{responseType:'text'});
  }

  getCarById(id:number):Observable<Car>
  {
    return this.http.get<Car>(`${this.apiUrl}/${id}`);
  }

  updateCar(id:number,carData:any):Observable<any>
  {
    return this.http.put(`${this.apiUrl}/${id}`,carData);
  }

  deleteCar(id:number):Observable<any>
  {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getAllCars():Observable<Car[]>
  {
    //need to change /get
    return this.http.get<Car[]>(`${this.apiUrl}/`);
  }

  getTopNCarByPrice(n:number):Observable<any>
  {
    return this.http.get(`${this.apiUrl}/top/${n}`);
  }

}
