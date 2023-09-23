import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/Services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{
  
  constructor(private _category:CategoryService,private snack:MatSnackBar){}
  category={
    title:'',
    description:''
  }
  ngOnInit(): void {
   
  }

  formSubmit()
  {
    if(this.category.title.trim()==='')
    {
      // Swal.fire("ERROR!!","error in Submit Data",'error')
      this.snack.open("Title is required !!",'☹️',{
        duration:3000
      })
      return;
    }
    // ALL DOne
    this._category.addCategory(this.category).subscribe(
      (data:any)=>{
        this.category = data;
        this.category.title=''
        this.category.description = ''
        Swal.fire("Success !!","Category Added Successfully",'success')
      },
      (error)=>{
        console.log(error);
        Swal.fire("ERROR!!","Error in Submit Data",'error')
      }
    )
  }

}
