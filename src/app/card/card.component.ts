import {Component, Input, OnInit} from '@angular/core';
import {AllPlant} from "../Service/AllPlant";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  mobile:boolean  =  false;
  @Input()
  plant:AllPlant =  {
    name:"",
    mos: "",
    pump: 0,
    last:"00-00-00",
    status: false,
    avg:""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
