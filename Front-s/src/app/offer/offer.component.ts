import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  location: any;

  constructor() { }

  ngOnInit(): void {
  }

  back(): void {
    this.location.back();
  }

}
