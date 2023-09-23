import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/Services/category.service';
import { QuizeService } from 'src/app/Services/quize.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quize',
  templateUrl: './add-quize.component.html',
  styleUrls: ['./add-quize.component.css']
})
export class AddQuizeComponent implements OnInit{
  
  categories:any=[
  ]

  quizeData={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active:true,
    category:{
      id:''
    }
  }
  constructor(private cat:CategoryService,private snack:MatSnackBar,private quize:QuizeService){}
  ngOnInit(): void {
    this.cat.categories().subscribe(
      (data:any)=>{
        this.categories = data;
        console.log(data);
        
      },
      (error)=>{
        console.log(error);
        
        Swal.fire("ERROR !!","Error in Loading Data from Server",'error')
      }
    )
  }

  addQuize()
  {
    if(this.quizeData.title.trim() ==='')
    {
      this.snack.open('Title Required !!','',{
        duration:3000
      })
      return;
    }
    this.quize.addQuize(this.quizeData).subscribe(
      (data)=>{
        Swal.fire("Success","Quize is Added",'success')
        this.quizeData={
          title:'',
          description:'',
          maxMarks:'',
          numberOfQuestions:'',
          active:true,
          category:{
            id:''
          }
        }
      },
      (error)=>
      {
        console.log(error);
        Swal.fire("ERROR !!","Error in Submit Quize",'error')
        
      }
    )
  }



}
