import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UniServiceService } from '../uni-service.service';
import {Tutor} from '../models';

@Component({
  selector: 'app-tutor-detail',
  templateUrl: './tutor-detail.component.html',
  styleUrls: ['./tutor-detail.component.scss']
})
export class TutorDetailComponent implements OnInit {

  tutor! : Tutor;
  loaded: boolean = false;

  constructor(private route: ActivatedRoute,
    private location: Location, private service: UniServiceService) { }

    ngOnInit(): void {
      this.getTutor();
    }
  
    getTutor(){
      this.route.paramMap.subscribe(params => {
        const id = +(params.get('id') || '0');
        this.loaded = false;
        this.service.getTutors().subscribe(tutors =>{
          this.tutor = tutors.find(c => c.id === id) ?? tutors[0];
        }
        );
        this.loaded = true;
      });
    }

}
