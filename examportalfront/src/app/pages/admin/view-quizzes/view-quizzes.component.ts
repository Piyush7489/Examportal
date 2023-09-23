import { Component, OnInit } from '@angular/core';
import { QuizeService } from 'src/app/Services/quize.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit{

  quizzes:any=[]

  constructor(private q:QuizeService){}
  ngOnInit(): void {
    
    this.q.quizzes().subscribe(
      (data:any)=>{
        this.quizzes = data;
      },
      (error)=>{
        console.log(error);
        
        Swal.fire("ERROR !!","Error in Server !!",'error')
      }
    )
  }

  deleteQuize(qid:any)
  {
    Swal.fire(
      {
        icon:'info',
        'title':'Are you sure ?',
        confirmButtonText:'Delete',
        showCancelButton:true,
      }).then((result)=>{
        if(result.isConfirmed)
        {
          this.q.deleteQuize(qid).subscribe(
            (data)=>{
              this.quizzes = this.quizzes.filter((quiz:any)=>quiz.id != qid);
              Swal.fire("Success ",'Quize Deleted Successfully ','success')
            },
            (error)=>{
              Swal.fire('ERROR !!',"Error in Deleting Quize",'error')
            }
            )
            
        }
      })
    
  }
 
}
