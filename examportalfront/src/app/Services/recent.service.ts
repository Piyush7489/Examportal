import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrls from './helper';

@Injectable({
  providedIn: 'root'
})
export class RecentService {

  constructor(private http:HttpClient) { }

  public getRecentQuizzes(userId:any)
  {
    console.log(userId+" abcd");
    
    return this.http.get(`${baseUrls}/result/${userId}`)
  }


}
