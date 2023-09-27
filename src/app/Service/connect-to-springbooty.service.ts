import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {AllPlant} from "./AllPlant";
import {environment} from "../../environments/environment";



@Injectable({
  providedIn: 'root'
})
export class ConnectToSpringbootyService {


  private test = environment.apiUrl;
  private serverUrl = 'http://127.0.0.1:8081';
  constructor(private http: HttpClient) {}

  getAllPlants(): Observable<AllPlant[]> {
    let url =  this.serverUrl+"/getAll"
    return this.http.get<any>(url).pipe(
      map(response => {
        return response.allPlant as AllPlant[];
      })
    );
  }
  activatePump(name:string){
    let url = this.serverUrl + '/setPump/'+name+'?pump=1'
    console.log(url)
    return this.http.put(url, null);
  }

}

