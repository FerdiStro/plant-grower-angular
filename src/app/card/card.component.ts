import {Component, Input, OnInit, Output} from '@angular/core';
import {AllPlant} from "../Service/AllPlant";
import {EventEmitter} from "@angular/core";
import {ApplicationStateService} from "../Service/ApplicationStateService";


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
    status: false,
    plant: {
      name: "",
      mos: "",
      pump: 0,
      last: "",
      avg:""
    }

  }
  @Output()
  activatePumpEvent  =  new EventEmitter<string>();

  activatePump(name:string){
    this.activatePumpEvent.emit(name)
  }

  constructor(private service:ApplicationStateService) {
    this.mobile=service.getIsMobileResolution()
  }

  ngOnInit(): void {
  }

}
