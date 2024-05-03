import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {Coaches} from "../model/coaches.entity";

@Injectable({
  providedIn: 'root'
})
export class CoachesService extends BaseService<Coaches>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEdndpoint = '/coaches'
  }
}
