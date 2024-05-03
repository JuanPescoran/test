import { Injectable } from '@angular/core';
import {Coaches} from "../model/coaches.entity";

@Injectable({
  providedIn: 'root'
})
export class CoachDataService {

  coachData: Array<Coaches>;

  constructor() {
    this.coachData = new Array<Coaches>();
  }

  getCoachData(){
    return this.coachData;
  }
}
