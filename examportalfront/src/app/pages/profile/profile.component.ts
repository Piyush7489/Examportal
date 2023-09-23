import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any = null;
  constructor(private login:LoginService){}
  ngOnInit(): void {

    this.user = this.login.getuser();
    // this.login.getCurrentUser().subscribe(
    //   (user:any)=>{
    //     this.user = user;
    //   },
    //   (error)=>{
    //     alert("ERROR");
    //   }
    // )

  }

  // public currenUser()
  // {
  //   this.login.getuser().subscribe(
  //     (user: any)=>{
  //       this.user = user
  //     })
  //     return this.user;
  // }
}
