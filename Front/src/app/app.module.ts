import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicOfferComponent } from './public-offer/public-offer.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { InfoComponent } from './info/info.component';
import { TutorsComponent } from './tutors/tutors.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LogRegComponent } from './log-reg/log-reg.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicOfferComponent,
    HomeComponent,
    CoursesComponent,
    CourseDetailComponent,
    InfoComponent,
    TutorsComponent,
    ContactsComponent,
    LogRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
