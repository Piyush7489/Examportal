import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrls from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizeService {

  constructor(private http:HttpClient) { }

  public quizzes()
  {
    return this.http.get(`${baseUrls}/quize/`)
  }

  public addQuize(quize:any)
  {
    return this.http.post(`${baseUrls}/quize/`,quize)
  }

  public deleteQuize(qid:any)
  {
    return this.http.delete(`${baseUrls}/quize/${qid}`)
  }

  public getSingleQuize(qid:any)
  {
    return this.http.get(`${baseUrls}/quize/${qid}`)
  }

  updateQuize(quize:any){
    return this.http.put(`${baseUrls}/quize/`,quize)
  }

  public getQuizzesOfCategory(catId:any)
  {
    return this.http.get(`${baseUrls}/quize/category/${catId}`)
  }

  // Get Active Quizzes
  public getActiveQuizzes()
  {
    return this.http.get(`${baseUrls}/quize/active`);
  }
// get Active Quizzes of Category
  public getActiveQuizzesOfCategory(catId:any)
  {
    return this.http.get(`${baseUrls}/quize/category/active/${catId}`)
  }

}
