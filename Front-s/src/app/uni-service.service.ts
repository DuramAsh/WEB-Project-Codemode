import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Token, Course, Tutor} from './models';

@Injectable({
  providedIn: 'root'
})
export class UniServiceService {

  logged = false;

  ROOT_URL = 'http://127.0.0.1:8000/api';
  constructor(private client: HttpClient) { }

  login(username: string, password: string) : Observable<Token>{
    return this.client.post<Token>(`${this.ROOT_URL}/login/`, {
      username,
      password
    });
  }


  getCourses(): Observable<Course[]>{
    return this.client.get<Course[]>(`${this.ROOT_URL}/courses/`);
  }

  getCourse(id: number): Observable<Course>{
    return this.client.get<Course>(`${this.ROOT_URL}/courses/${id}/`);
  }
}


