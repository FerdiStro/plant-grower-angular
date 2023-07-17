import { Component } from '@angular/core';
import {ConnectToSpringbootyService} from "./Service/connect-to-springbooty.service";
import {AllPlant} from "./Service/AllPlant";
import {interval, Subscription} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plant-grower-angular';
  allPlant : AllPlant[]  =  [] ;
  intervalSubscription: Subscription;


  getALl(){
    this.service.getAllPlants().subscribe(
      (allPlants: AllPlant[]) => {
        this.allPlant =  allPlants;
        console.log(allPlants)
      },
      (error: any) => {
        console.error('Fehler beim Abrufen der Pflanzendaten:', error);
      }
    )

  }


  constructor(private service:ConnectToSpringbootyService) {
    this.getALl()
    this.intervalSubscription = interval(20000) // 10 seconds
      .subscribe(() => {
        this.getALl()
      });
  }

  activatePump(name:string){
    this.service.activatePump(name).subscribe(
      response => {
        console.log('Pump state updated successfully:', response);
      },
      error => {
        console.error('Error updating pump state:', error);
      }
    )
  }

}
