import {Component, OnInit} from '@angular/core';
import {Car} from '../model/Car';
import {CarServiceService} from '../car-service.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[];

  selectedCar: Car;

  constructor(private carService: CarServiceService) {
  }

  ngOnInit(): void {
    this.carService.getCarsFromServer().subscribe(cars => this.cars = cars);
  }

  clickACar(selectedCar: Car): void {
    this.selectedCar = selectedCar;
  }

}
