import { Component } from '@angular/core';
import {Coaches} from "../../model/coaches.entity";
import {GymsApiService} from "../../../gympal/services/gyms-api.service";
import {Router} from "@angular/router";
import {CoachDataService} from "../../../gympal/services/coach-data.service";

@Component({
  selector: 'app-list-coaches',
  templateUrl: './list-coaches.component.html',
  styleUrl: './list-coaches.component.css'
})
export class ListCoachesComponent {

  coaches: Array<Coaches> = [];

  constructor(private gymApi: GymsApiService, private router: Router, private coachDataService: CoachDataService) {
  }

  ngOnInit(){
    this.gymApi.getCoaches()
      .subscribe((data: any)=>{
        this.coaches = data;
      });
  }

  onCoachSelected(coach: any){
    this.router.navigate(['detail-coach', coach.id]).then();
    //});
  }


}
