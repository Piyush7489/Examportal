import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import baseUrls from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements OnInit{

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // LOAD AAL CATEGORIES
  public categories()
  {
    return this.http.get(`${baseUrls}/category/`)
  }
// ADD CATEGORY
  public addCategory(category:any)
  {
    return this.http.post(`${baseUrls}/category/`,category)
  }

}
