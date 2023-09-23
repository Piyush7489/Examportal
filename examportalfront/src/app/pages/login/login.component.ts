import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  logindata = {

    userName: '',
    password: ''
  };

  constructor(private snack: MatSnackBar, private login: LoginService, private router: Router) {

  }

  formSubmit() {

    if (this.logindata.userName.trim() === "") {

      this.snack.open("Username is required !!", "☹️", {
        duration: 3000
      });
      return;
    }

    if (this.logindata.password.trim() === "") {

      this.snack.open("Password is required !!", "☹️", {
        duration: 3000
      });
      return;
    }

    // //request server to generate token
    // this.login.generateToken(this.logindata).subscribe(
    //   (data: any) =>{
    //     console.log('success at logincomponent.td ');
    //     console.log(data);
    //   },
    //   (error)=>{
    //     console.log('error at logincomponent.td  ');
    //     console.log(error);
    //   }
    // );
    this.login.generateToken(this.logindata).subscribe(
      (data: any) => { // Specify the type for 'data'
        console.log(data);
        this.snack.open(" login Saved Successfully", "🫡", {
          duration: 3000

        });


        //login.....
        this.login.loginUser(data.token);
        console.log(this.login.getCurrentUser);

        this.login.getCurrentUser().subscribe(
          (user: any) => {
            this.login.setUser(user);
            console.log(user);

            // redirect admin and normal user
            if (this.login.getUserRole() == 'ADMIN') {
              console.log("ADMIN REDIRECT");
              this.router.navigate(['admin'])
              // window.location.href = '/admin';
              this.login.loginStatusSubject.next(true);
            }
            else if (this.login.getUserRole() == 'NORMAL') {
              console.log("USER REDIRECT");
              this.login.loginStatusSubject.next(true);
              this.router.navigate(['/user-dashboard/0'])
              // window.location.href = '/user-dashboard';
            }
            else {
              this.login.logout();
            }

          });

      },
      (error: any) => { // Specify the type for 'error'
        console.log(error);
        console.log(this.logindata);
        this.snack.open("Something went wrong", "☹️", {
          duration: 3000
        });
      }
    )
  }
}
