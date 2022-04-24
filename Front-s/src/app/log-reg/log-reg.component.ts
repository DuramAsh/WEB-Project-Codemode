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
  logged = this.service.logged;

  constructor(private service: UniServiceService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('access');
    if (token) {
      this.logged = true;
    }
  }

  login() {
    this.service.login(this.username, this.password).subscribe((data) => {
      console.log(data);
      localStorage.setItem('access', data.access);

      this.logged = true;
      this.username = '';
      this.password = '';
    });
  }



}
