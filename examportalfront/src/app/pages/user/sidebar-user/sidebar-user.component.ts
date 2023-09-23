import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent implements OnInit {

  category:any
  constructor(private route:ActivatedRoute,private cat:CategoryService){}
  ngOnInit(): void {
    
    this.cat.categories().subscribe(
      (data)=>{
        this.category = data;
      },
      (error)=>{
        Swal.fire("ERROR !!","Error in Loading Categories from Server",'error')
      }
    )
  }

}
