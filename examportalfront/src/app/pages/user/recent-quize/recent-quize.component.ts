import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { RecentService } from 'src/app/Services/recent.service';

@Component({
  selector: 'app-recent-quize',
  templateUrl: './recent-quize.component.html',
  styleUrls: ['./recent-quize.component.css']
})
export class RecentQuizeComponent implements OnInit{

  userId = 0;
  result:any = []
  isSubmit = false;
  temp:number = 0;
  constructor(private res:RecentService,private login:LoginService,private router:Router){}

  @ViewChild(MatSort) sort: MatSort | undefined;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.result.filter = filterValue.trim().toLowerCase();
    console.log(this.temp++);
    console.log(this.result);
    
    
  }

  ngOnInit(): void {
    this.isSubmit = false;
    this.login.getCurrentUser().subscribe((data:any)=>
    {
      console.log(data);
      this.userId = data.userId;
      console.log(this.userId);

      this.res.getRecentQuizzes(this.userId).subscribe(
        (data:any)=>{
          console.log(data);
          
          this.result = data;
          
        },
        (error)=>{
          console.log(error);
          
        }
      )

    },
    (error)=>{
      console.log(error);
      
    })

  }
  submit()
  {
    this.isSubmit = true;
    this.router.navigate(['/user-dashboard/recent-quize'])
  }

  printPage()
  {
    window.print();
  }

}
