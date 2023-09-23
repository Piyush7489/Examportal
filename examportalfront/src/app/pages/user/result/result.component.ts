import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultService } from 'src/app/Services/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit{

  id:any;
  result:any;
  constructor(private resService:ResultService,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      this.id = param['resId'];
    });
    console.log(this.id);
    this.resService.getSingleResult(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.result = data;
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

  printPage(){
    window.print();
  }

}
