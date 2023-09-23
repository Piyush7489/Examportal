import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/Services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quize-questions',
  templateUrl: './view-quize-questions.component.html',
  styleUrls: ['./view-quize-questions.component.css']
})
export class ViewQuizeQuestionsComponent implements OnInit {
  
  constructor(private route:ActivatedRoute,private q:QuestionService){}

  qId:any
  qTitle:any
  quizeId:any
  questions:any=[
    
  ]

  ngOnInit(): void {
    this.qId = this.route.snapshot.params['id'];
    this.qTitle = this.route.snapshot.params['title']
    this.q.getQuestionsOfQuize(this.qId).subscribe(
      (data:any)=>{
        console.log(data);
        
        this.questions = data
      },
      (error)=>{
        console.log(error);
        Swal.fire("ERROR !!",'Error in Loading Questions','error')
        
      }
    )
  }
  deleteQuize(qId:any)
  {
    Swal.fire({
      icon:'info',
      showCancelButton:true,
      confirmButtonText:"Delete",
      title:'Are you sure ? want to Delete this Question...'
    }).then((result)=>{
      if(result.isConfirmed)
      {
        this.q.deleteQuestion(qId).subscribe(
          (data)=>{
            this.questions = this.questions.filter((question:any)=>question.queId != qId);
            Swal.fire("SUCCESS ",'Question Deleted','success')
          },
          (error)=>{
            Swal.fire("ERROR !!",'Error in Deleting Question','error')
          }
        )
      }
    })
   
  }

}
