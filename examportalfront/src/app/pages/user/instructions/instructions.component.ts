import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { QuizeService } from 'src/app/Services/quize.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit{

  constructor(private route:ActivatedRoute,private quizeService:QuizeService,private router:Router){}
  quizeId:any;

  quize:any=[];
  ngOnInit(): void {
    this.quizeId = this.route.snapshot.params['quizeId'];
    this.quizeService.getSingleQuize(this.quizeId).subscribe((data)=>{
      this.quize = data;
      console.log(this.quize);
      
    },
    (error)=>{
      console.log(error);
      
      Swal.fire("ERROR !!",'Error in Load Quize Details','error')
    }
    )
  }

  public start(qId:any)
  {
    Swal.fire({
      title:'Do you want start the Quize...!!',
      showCancelButton:true,
      confirmButtonText:'Start',
      icon:'info'
    }).then((result)=>{
      if(result.isConfirmed)
      {
        this.router.navigate(['start/'+qId])
      }
    })
  }

}
