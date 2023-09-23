import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/Services/question.service';
import Swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
public Editor = ClassicEditor
  qId:any;
  question:any={
    quize:{
      id:''
    }
  }
  quizeTitle:any;
  constructor(private route:ActivatedRoute,private que:QuestionService,private router:Router,private snack:MatSnackBar){}
  ngOnInit(): void {

    this.qId = this.route.snapshot.params['qId'];
    this.quizeTitle = this.route.snapshot.params['qTitle'];
    this.question.quize['id'] = this.qId;
     
    
  }

  addQuestion()
  {
    if(this.question.content == '' || this.question.content == null ||
    this.question.option1 =='' || this.question.option1 == null
      || this.question.option2 =='' || this.question.option2 == null
      || this.question.option3 =='' || this.question.option3 == null 
      || this.question.option4 =='' || this.question.option4 == null 
      || this.question.answer =='' || this.question.answer == null )
    {
      
      this.snack.open("Please Fill All Fields !!",'☹️',{
        duration:2000
      })
      return;
    }
    this.que.addQuestionInQuize(this.question).subscribe(
      (data)=>{
        Swal.fire("Success","Question Added in "+this.quizeTitle+" Quize",'success')
        this.router.navigate(["/admin/view-questions/"+this.qId+"/"+this.quizeTitle])
      },
      (error)=>{
        console.log(error);
        
        Swal.fire('ERROR !!','Error in Submit Question','error')
      }
    )
  }

}
