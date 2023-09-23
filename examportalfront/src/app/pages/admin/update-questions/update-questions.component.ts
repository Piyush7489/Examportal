import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { QuestionService } from 'src/app/Services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-questions',
  templateUrl: './update-questions.component.html',
  styleUrls: ['./update-questions.component.css']
})
export class UpdateQuestionsComponent implements OnInit{

  quizeTitle:any;
  qId:any
  public Editor = ClassicEditor
  quizeId:any
  constructor(private route:ActivatedRoute,private router:Router,private snack:MatSnackBar,private queService:QuestionService){}
  question:any=[]
  ngOnInit(): void {
    this.quizeTitle = this.route.snapshot.params['quizeTitle'];
    this.qId = this.route.snapshot.params['queId'];
    this.quizeId = this.route.snapshot.params['id']
    console.log("dfgh");
    
    this.queService.getSingleQuestion(this.qId).subscribe(
      (data)=>{
        console.log(data);
        this.question = data;
      },
      (error)=>{
        console.log((error));
        
      }
    )
    
  }

  public updateQuestion()
  {
    if(this.question.content.trim() == '' || this.question.content == null ||
    this.question.option1.trim() =='' || this.question.option1 == null
      || this.question.option2.trim() =='' || this.question.option2 == null
      || this.question.option3.trim() =='' || this.question.option3 == null 
      || this.question.option4.trim() =='' || this.question.option4 == null 
      || this.question.answer.trim() =='' || this.question.answer == null )
    {
      
      this.snack.open("Please Fill All Fields !!",'☹️',{
        duration:2000
      })
      return;
    }
    this.queService.updateQuestion(this.question).subscribe(
      (data)=>{
        
        this.router.navigate(["/admin/view-questions/"+this.quizeId+"/"+this.quizeTitle])
        Swal.fire("Success","Question Updated in "+this.quizeTitle+" Quize",'success')
       
      },
      (error)=>{
        console.log(error);
        
        Swal.fire('ERROR !!','Error in Update Question','error')
      }
    )
  }

}
