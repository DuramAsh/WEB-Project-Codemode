import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniServiceService } from '../uni-service.service';
import { timer } from 'rxjs';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  imageColor = "4825c0";
  loaded = false;
  constructor(private service: UniServiceService, private router: Router) { }

  ngOnInit(): void {
    if(!this.isLogged){
      this.router.navigate(['/authorize']);
    }
    timer(this.service.pageLoad).subscribe(x => {this.loaded = true;})
  }

  get isLogged() : boolean {
    return this.service.logged;
  }

  toManager(){
    location.href='https://t.me/codemode';
  }

}
