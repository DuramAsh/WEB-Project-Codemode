import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Token, Course, Tutor } from './models';

@Injectable({
  providedIn: 'root'
})
export class UniServiceService {

  logged : any;

  logChange: Subject<boolean> = new Subject<boolean>();

  ROOT_URL = 'http://192.168.0.113:8000/api';

  constructor(private client: HttpClient) { 
    this.logChange.subscribe(value =>{
      this.logged = value;
    })
  }

  setFalse(){
    this.logged = false;
  }

  setTrue(){
    this.logged = true;
  }

  login(username: string, password: string): Observable<Token> {
    return this.client.post<Token>(`${this.ROOT_URL}/login/`, {
      username,
      password
    });
  }
  
  refresh(): Observable<Token> {
    const token = localStorage.getItem('refresh');
    return this.client.post<Token>(`${this.ROOT_URL}/login/refresh/`, {
      token
    });
  }

  logout() {
    this.logged = false;
    localStorage.removeItem('access');
  }


  getCourses(): Observable<Course[]> {
    return this.client.get<Course[]>(`${this.ROOT_URL}/courses/`);
  }

  getTutors(): Observable<Tutor[]> {
    return this.client.get<Tutor[]>(`${this.ROOT_URL}/tutors/`);
  }

  getCourse(id: number): Observable<Course> {
    return this.client.get<Course>(`${this.ROOT_URL}/courses/${id}/`);
  }
}


