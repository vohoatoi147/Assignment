import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http' ;
import {User} from './model/user';
import {Observable} from 'rxjs';
import {Subject} from './model/subject';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  listSubject(): Observable<Subject[]> {
		return this.http.get<Subject[]>("assets/Subjects.json");
	};
 listUser():Observable<User[]>
 {
  return this.http.get<User[]>(`../assets/db/Students.js`)
 }
 
 getQuizs(Id)
 {
  return this.http.get<User[]>(`../assets/db/Quizs/`+Id+`.js`)
 }
  constructor(private http:HttpClient) { }
}
 