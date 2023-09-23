import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrls from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  public getQuestionsOfQuize(quizeId:any)
  {
    return this.http.get(`${baseUrls}/question/quize/all/${quizeId}`)
  }


  public getQuestionsOfQuizeForTest(quizeId:any)
  {
    return this.http.get(`${baseUrls}/question/quize/${quizeId}`)
  }

  public addQuestionInQuize(question:any)
  {
    return this.http.post(`${baseUrls}/question/`,question)
  }

  public deleteQuestion(qId:any)
  {
    return this.http.delete(`${baseUrls}/question/${qId}`)
  }

  public getSingleQuestion(qId:any)
  {
    return this.http.get(`${baseUrls}/question/${qId}`)
  }

  public updateQuestion(question:any)
  {
    return this.http.put(`${baseUrls}/question/`,question);
  }

  // Eval-Quize
  public evalQuize(question:any,userId:any)
  {
    return this.http.post(`${baseUrls}/question/eval-quize/${userId}`,question);
  }
}
