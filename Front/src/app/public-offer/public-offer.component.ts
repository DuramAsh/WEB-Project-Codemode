import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-public-offer',
  templateUrl: './public-offer.component.html',
  styleUrls: ['./public-offer.component.css']
})
export class PublicOfferComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  back(): void {
    this.location.back();
  }

}
