import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { CoursesComponent } from './courses/courses.component';
import { InfoComponent } from './info/info.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { PublicOfferComponent } from './public-offer/public-offer.component';
import { TutorsComponent } from './tutors/tutors.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'authorize', component: LogRegComponent },
  { path: 'authorize/publicoffer', component: PublicOfferComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'tutors', component: TutorsComponent },
  { path: 'info', component: InfoComponent },
  { path: 'contacts', component: ContactsComponent },
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
