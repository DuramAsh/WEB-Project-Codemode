import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicOfferComponent } from './public-offer/public-offer.component';

const routes: Routes = [
  { path: 'PublicOffer', component: PublicOfferComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
