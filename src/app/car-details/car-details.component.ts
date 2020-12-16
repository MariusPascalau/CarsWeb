import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../model/Car';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  @Input()
  car: Car;

  constructor() {
  }

  ngOnInit(): void {
  }

}
