import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { QuestionService } from 'src/app/Services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit{
  
  constructor(private login:LoginService,private ls:LocationStrategy,private route:ActivatedRoute,private questionService:QuestionService){}
  quizeId:any=0;
  questions:any=[]
  marksGot=0;
  currectAnswers=0;
  attempted = 0;
  isSubmit = false
  timer:any;
  userId:any;

  ngOnInit(): void {
    this.preventBackButton();
    this.quizeId = this.route.snapshot.params['quizeId'];
    this.route.params.subscribe(param=>{
      this.quizeId = param['quizeId'];
      this.loadQuestions();
    });

    this.login.getCurrentUser().subscribe((data:any)=>
    {
      console.log(data);
      this.userId = data.userId;
      console.log(this.userId);
    },
    (error)=>{
      console.log(error);
      
    })
     
  }
  loadQuestions() {
    if(this.quizeId!=0)
    this.questionService.getQuestionsOfQuizeForTest(this.quizeId).subscribe((data)=>{
      this.questions = data;
      this.timer = this.questions.length * 2 * 60;
      
      this.startTimer();
    },
      (error)=>{
        console.log(error);
        Swal.fire("ERROR !!",'Error in Loading Questions','error')
      }
    )
  }

  // Prevent Block
  preventBackButton(){
    history.pushState(null,'',location.href)
    this.ls.onPopState(()=>{
      history.pushState(null,'',location.href)
    })
  }

  submitQuize()
  {
    
    Swal.fire({
      title:'Do you want to submit the Quize...!!',
      showCancelButton:true,
      confirmButtonText:'Submit',
      icon:'info'
    }).then((result)=>{
      if(result.isConfirmed)
      {
        this.isSubmit=true  
        this.evalQuize();
      }
    });
  }
// 1000 in milisecond
  startTimer()
  {
    let t = window.setInterval(()=>{
      if(this.timer<=0)
      {
        this.evalQuize();
        clearInterval(t);
      }else{
        this.timer--;
      }
    },1000)
  }
  getFormattedTime()
  {
    let mm = Math.floor(this.timer/60);
    let ss = this.timer-mm*60;
    return `${mm} Min : ${ss} Sec`
  }

  public evalQuize()
  {
    this.questionService.evalQuize(this.questions,this.userId).subscribe(
      (data:any)=>{
        this.marksGot = parseFloat(Number(data.marksGot).toFixed(2));
        this.currectAnswers = data.currectAnswers;
        this.attempted = data.attempted;
        this.isSubmit = true;
      },
      (error)=>{
        console.log(error);
        Swal.fire("ERROR !!",'Error in Loading Result','error')
        
      }
    )
    // Call server to check Questions
    // this.router.navigate(['start/'+qId])
    // this.isSubmit=true
    // this.questions.forEach((q:any)=>{
    //   if(q.givenAnswer == q.answer)
    //   {
    //     this.currectAnswers++;
    //     let singleQuestionMark = this.questions[0].quize.maxMarks/this.questions.length;
        
    //     this.marksGot = this.marksGot +singleQuestionMark
    //   }
    //   if(q.givenAnswer.trim() != '')
    //   {
    //     this.attempted++;
    //   }
    // });
  }

  printPage(){
    window.print();
  }
}
