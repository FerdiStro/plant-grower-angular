import { Component } from '@angular/core';
import {ConnectToSpringbootyService} from "./Service/connect-to-springbooty.service";
import {AllPlant} from "./Service/AllPlant";
import {ApplicationStateService} from "./Service/ApplicationStateService";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plant-grower-angular';
  allPlant : AllPlant[]  =  [] ;
  mobile:boolean   = false;


  constructor(private service:ConnectToSpringbootyService, private state:ApplicationStateService) {
    this.mobile  =  state.getIsMobileResolution();
    service.getAllPlants().subscribe(
      (allPlants: AllPlant[]) => {
        this.allPlant =  allPlants;
        console.log(allPlants)
      },
      (error: any) => {
        console.error('Fehler beim Abrufen der Pflanzendaten:', error);
      }

    )



  }


}
