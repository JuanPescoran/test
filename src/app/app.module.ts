import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AboutComponent } from './public/pages/about/about.component';
import { HomeComponent } from './public/pages/home/home.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor, MatButton} from "@angular/material/button";
import { FooterContentComponent } from './public/components/footer-content/footer-content.component';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {CoachDataService} from "./gympal/services/coach-data.service";
import {GymsApiService} from "./gympal/services/gyms-api.service";
import {MatIcon} from "@angular/material/icon";
import {ProfessionalsComponent} from "./gympal/pages/professionals/professionals/professionals.component";
import {ListCoachesComponent} from "./gympal/pages/list-coaches/list-coaches.component";
import {ListNutritionistsComponent} from "./gympal/pages/list-nutritionists/list-nutritionists.component";
import {DetailCoachComponent} from "./gympal/pages/detail-coach/detail-coach.component";
import {SuscriptionsComponent} from "./gympal/pages/suscriptions/suscriptions.component";
import { ProfileComponent } from './gympal/pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProfessionalsComponent,
    FooterContentComponent,
    ListCoachesComponent,
    ListNutritionistsComponent,
    DetailCoachComponent,
    SuscriptionsComponent,
    ProfileComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatToolbar,
        MatAnchor,
        MatCardHeader,
        MatCardModule,
        MatCardContent,
        NgOptimizedImage,
        MatButton,
        HttpClientModule,
        MatIcon
    ],
  providers: [
    provideAnimationsAsync(),
    CoachDataService,
    GymsApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
