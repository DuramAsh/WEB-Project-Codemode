import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UniServiceService } from '../uni-service.service';
@Component({
  selector: 'app-log-reg',
  templateUrl: './log-reg.component.html',
  styleUrls: ['./log-reg.component.scss']
})
export class LogRegComponent implements OnInit {


  username = '';
  password = '';
  logged = this.service.getLog();

  constructor(private service: UniServiceService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.service.setLogin();
      this.logged = true;
    }
  }

  login() {
    this.service.login(this.username, this.password).subscribe((data) => {

      localStorage.setItem('token', data.token);

      this.service.setLogin();
      this.logged = true;
      this.username = '';
      this.password = '';
    });
  }



}
