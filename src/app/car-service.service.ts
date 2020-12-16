import {Injectable} from '@angular/core';
import {Car} from './model/Car';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  private cars: Car[] = [
    {
      id: 1,
      brand: 'Dacia',
      birthYear: 1900,
      enginePower: 1400,
      engineType: 'SomeType'
    }, {
      id: 2,
      brand: 'Audi',
      birthYear: 1950,
      enginePower: 2000,
      engineType: 'SomeOtherType'
    }
  ];

  getCars(): Car[] {
    return this.cars;
  }

  getCarsFromServer(): Observable<Car[]> {
    return this.httpClient.get<Car[]>('http://localhost:8080/cars/all');
  }

  constructor(private httpClient: HttpClient) {
  }
}
