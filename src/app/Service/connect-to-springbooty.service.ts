import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {AllPlant} from "./AllPlant";


@Injectable({
  providedIn: 'root'
})
export class ConnectToSpringbootyService {


  private serverUrl = 'http://localhost:8081';
  constructor(private http: HttpClient) {}

  getAllPlants(): Observable<AllPlant[]> {
    let url =  this.serverUrl+"/getAll"
    return this.http.get<any>(url).pipe(
      map(response => {
        return response.allPlant as AllPlant[];
      })
    );
  }

}

