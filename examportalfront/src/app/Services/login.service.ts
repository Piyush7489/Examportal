import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrls from './helper';
import { Token } from '@angular/compiler';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<Boolean>();

  constructor(private http:HttpClient) { }

//current user which are logged in
  public getCurrentUser()
  {
    return this.http.get(`${baseUrls}/api/v1/auth/current-user`);
  }

  //generate token

  public generateToken(logindata:any)
  {
         return this.http.post(`${baseUrls}/api/v1/auth/login`, logindata);
  }



  //login user  set token in local  storage

  public loginUser(token: any)
  {
    localStorage.setItem('token',token);
    
    return true;
  }


  // islogin user is loged in or not

  public isLoggedIn()
  {
    let tokenstr=localStorage.getItem('token');
    if(tokenstr==undefined  || tokenstr=="" ||tokenstr==null)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  //logout remove token from local storage
  public logout(){

    localStorage.removeItem('token');
    localStorage.clear();
    return true;

  }

  //get token
  public  getToken()
  {
    return localStorage.getItem('token');
  }
  //set user detail

  public setUser(user: any)
  {
    localStorage.setItem('user',JSON.stringify(user));
  }
  //get user
  public getuser()
  {
    let userStr=localStorage.getItem('user');
    if(userStr!=null)
    {
      return JSON.parse(userStr);
    }
    else{
      this.logout();
      return null;
    }
  }

  //get user role

  public getUserRole()
  {
    let user = this.getuser();
    return user.authorities[0].authority;
  }
}
