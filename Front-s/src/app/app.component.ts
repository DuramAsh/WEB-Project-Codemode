import { Component  } from '@angular/core';
import { UniServiceService } from './uni-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Front-s';
  constructor(private service: UniServiceService){}

  logged = this.service.getLog();

  logout() {
    this.service.setLogout();
    this.logged = false;
    localStorage.removeItem('token');
  }
  

}

