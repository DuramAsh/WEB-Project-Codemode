import { Component  } from '@angular/core';
import { Router } from '@angular/router';
import { UniServiceService } from './uni-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Front-s';
  logged: any;

  constructor(public service: UniServiceService, public router: Router){
  }

  ngOnInit(): void {
    const token = localStorage.getItem('access');
    if (token != null) {
      this.service.setTrue();
    }else{
      this.service.setFalse();
    }
  }

  get isLogged(): boolean {
    return this.service.logged;
  }

  
  logout() {
    this.service.setFalse();
    this.service.logout();
  }

}

