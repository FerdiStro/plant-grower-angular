import {Component, Input, OnInit, Output} from '@angular/core';
import {AllPlant} from "../Service/AllPlant";
import {EventEmitter} from "@angular/core";


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
  @Output()
  activatePumpEvent  =  new EventEmitter<string>();

  activatePump(name:string){
    this.activatePumpEvent.emit(name)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
