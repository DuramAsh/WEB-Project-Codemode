import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniServiceService } from '../uni-service.service';
import { timer } from 'rxjs';
import { User } from '../models';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  imageColor = "4825c0";
  loaded = false;
  declare user : User;

  

  constructor(private service: UniServiceService, private router: Router) { }

  ngOnInit(): void {
    if(!this.isLogged){
      this.router.navigate(['/authorize']);
    }
    timer(this.service.pageLoad).subscribe(x => {this.loaded = true; this.getUser();})
    
  }

  get isLogged() : boolean {
    return this.service.logged;
  }

  toManager(){
    location.href='https://t.me/codemode';
  }

  getUser(){
    this.loaded = false;
    const id = localStorage.getItem('user_id') || 1;
    this.service.getUser(+(id)).subscribe(user =>{
      this.user = user;
      this.loaded = true;
    })
  }

}
