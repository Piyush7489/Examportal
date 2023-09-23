import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { QuizeService } from 'src/app/Services/quize.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quize',
  templateUrl: './update-quize.component.html',
  styleUrls: ['./update-quize.component.css']
})
export class UpdateQuizeComponent implements OnInit{
  
  constructor(private route:ActivatedRoute,private router:Router,private quize:QuizeService,private cat:CategoryService,private snack:MatSnackBar){}
  qId = 0;
  q:any
  categories:any
  ngOnInit(): void {
    this.qId = this.route.snapshot.params['qid'];

    this.quize.getSingleQuize(this.qId).subscribe(
      (data)=>{
        this.q = data;
        console.log(this.q);
        
      },
      (error)=>{
        console.log(error);
        Swal.fire("ERROR !!",'Error in Server','error')
        
      }
    )
    this.cat.categories().subscribe((data)=>{
      this.categories = data;

    },
    (error)=>{
      Swal.fire('ERROR !!','Error in Fetch Category','error')
    })

  }
  updateQuize(){
    if(this.q.title.trim() ==='')
    {
      this.snack.open('Title Required !!','',{
        duration:3000
      })
      return;
    }
    this.quize.updateQuize(this.q).subscribe(
      (data:any)=>{
        Swal.fire("Success","Quize is Updeted",'success').then(
          (e)=>{
            this.router.navigate(['/admin/quizzes'])
          }
        )
      },
      (error:any)=>{
        console.log(error);
        Swal.fire("ERROR !!","Error in Update Quize",'error')
      }
    )
  }
  
}
