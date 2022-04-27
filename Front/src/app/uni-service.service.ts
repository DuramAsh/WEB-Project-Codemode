import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Token, Course, Tutor, Info, Student } from './models';

@Injectable({
  providedIn: 'root'
})
export class UniServiceService {

  logged : any;
  pageLoad = 1000;
  slideLoad = 700;

  logChange: Subject<boolean> = new Subject<boolean>();

  // ROOT_URL = 'http://192.168.0.113:8000/api';
  ROOT_URL = 'http://172.16.92.217:8000/api';
  // ROOT_URL = 'https://trdln.pythonanywhere.com/api';

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

  getCourse(id: string): Observable<Course> {
    return this.client.get<Course>(`${this.ROOT_URL}/courses/${id}/`);
  }

  getTutor(id: string): Observable<Tutor> {
    return this.client.get<Tutor>(`${this.ROOT_URL}/tutors/${id}/`);
  }

  getStudent(id: number): Observable<Student> {
    return this.client.get<Student>(`${this.ROOT_URL}/courses/${id}/`);
  }

  getInfo(): Observable<any[]> {
    return this.client.get<any[]>(`${this.ROOT_URL}/comments/`);
  }
}


