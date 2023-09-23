import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizeService } from 'src/app/Services/quize.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-quize',
  templateUrl: './load-quize.component.html',
  styleUrls: ['./load-quize.component.css']
})
export class LoadQuizeComponent  implements OnInit{


  constructor(private route:ActivatedRoute,private quizeService:QuizeService){}
  catId:any;
  quizzes:any=[]
  ngOnInit(): void {
   
    this.route.params.subscribe((params)=>{
      this.catId = this.route.snapshot.params['catId']
      console.log(this.catId); 

      if(this.catId == 0)
    {
      console.log("Load All Quize");
      this.quizeService.getActiveQuizzes().subscribe(
        (data:any)=>{
          this.quizzes = data;
          console.log(this.quizzes);
          
        },
        (error)=>{
          console.log(error);
          Swal.fire("ERROR !!","Error in Loading All Quize !!",'error')
          
        }
      )
    }else{
      console.log("load specific Quize"); 
      console.log(this.catId);
      
      if(Number.parseInt(this.catId))
      this.quizeService.getActiveQuizzesOfCategory(this.catId).subscribe(
        (data)=>{
          this.quizzes = data;
          console.log(data);
        },
        (error)=>{
          console.log(error);
          Swal.fire("ERROR !!","Error in Loading Quize",'error')
        }
      )
    }

    })
    
  }

}
