import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  public isLoggedIn = false;

  constructor(public login:LoginService,private router:Router){}
  public currUser:any;
  ngOnInit(): void {
    this.currenUser();
    this.isLoggedIn = this.login.isLoggedIn();
    this.login.loginStatusSubject.asObservable().subscribe((data)=>{
      this.currenUser();
    })
  }

  public currenUser()
  {
    this.login.getCurrentUser().subscribe(
      (user)=>{
        this.currUser = user
      })
      return this.currUser;
  }
  public logout()
  {
    this.login.logout();
    this.isLoggedIn = this.login.isLoggedIn();
    this.login.loginStatusSubject.asObservable().subscribe((data)=>{
      this.currenUser();
    })
    this.router.navigate(['login'])
  }




  // showLoginText = false; // Define the showLoginText property

  // onLoginIconEnter() {
  //   // Define the onLoginIconEnter method
  //   this.showLoginText = true; // Set showLoginText to true when mouse enters
  // }

  // onLoginIconLeave() {
  //   // Define the onLoginIconLeave method
  //   this.showLoginText = false; // Set showLoginText to false when mouse leaves
  // }

}
