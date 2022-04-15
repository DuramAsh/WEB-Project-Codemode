import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { OfferComponent } from './offer/offer.component';
import { TutorsComponent } from './tutors/tutors.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    CoursesComponent,
    CourseDetailComponent,
    HomeComponent,
    InfoComponent,
    LogRegComponent,
    OfferComponent,
    TutorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
