import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrls from './helper';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http:HttpClient) { }

  public getSingleResult(id:any)
  {
    return this.http.get(`${baseUrls}/result/single/${id}`);
  }
}
