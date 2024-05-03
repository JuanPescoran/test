import { Component } from '@angular/core';
import {CoachesService} from "../../../gympal/services/coaches.service";
import {Coaches} from "../../../gympal/model/coaches.entity";
import {GymsApiService} from "../../../gympal/services/gyms-api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-coach',
  templateUrl: './detail-coach.component.html',
  styleUrl: './detail-coach.component.css'
})
export class DetailCoachComponent {

  coach: Coaches;
  coachId = '';

  constructor(private gymApi: GymsApiService, private route: ActivatedRoute) {
    this.coach = new Coaches();
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.coachId = params['id'];
    });

    this.gymApi.getCoachById(this.coachId).subscribe((data: any)=>{
      this.coach = data[0];
    });
  }
}
