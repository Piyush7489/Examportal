import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { adminGuard } from './Services/admin.guard';
import { NormalGuard } from './Services/user.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizeComponent } from './pages/admin/add-quize/add-quize.component';
import { UpdateQuizeComponent } from './pages/admin/update-quize/update-quize.component';
import { ViewQuizeQuestionsComponent } from './pages/admin/view-quize-questions/view-quize-questions.component';
import { AddQuestionsComponent } from './pages/admin/add-questions/add-questions.component';
import { UpdateQuestionsComponent } from './pages/admin/update-questions/update-questions.component';
import { LoadQuizeComponent } from './pages/user/load-quize/load-quize.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import { RecentQuizeComponent } from './pages/user/recent-quize/recent-quize.component';
import { ResultComponent } from './pages/user/result/result.component';


const routes: Routes = [

  {

    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    
    path: 'signup',
   component:SignupComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[adminGuard],
    children:[
      {
        path:'',
        component:WelcomeComponent,
      },
      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:"categories",
        component:ViewCategoriesComponent
      },
      {
        path:"add-category",
        component:AddCategoryComponent
      },
      {
        path:"quizzes",
        component:ViewQuizzesComponent
      },
      {
        path:'add-quizzes',
        component:AddQuizeComponent
      },
      {
        path:'update-quize/:qid',
        component:UpdateQuizeComponent
      },
      {
        path:'view-questions/:id/:title',
        component:ViewQuizeQuestionsComponent
      },
      {
        path:'add-question/:qId/:qTitle',
        component:AddQuestionsComponent
      },
      {
        path:'update-question/:queId/:quizeTitle/:id',
        component:UpdateQuestionsComponent
      }
      

    ]
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    canActivate:[NormalGuard],
    children:[
      {
        path:'recent-quize',
        component:RecentQuizeComponent
      },
      {
        path:'result/:resId',
        component:ResultComponent
      },
      {
        path:':catId',
        component:LoadQuizeComponent
      },
      {
        path:'instructions/:quizeId',
        component:InstructionsComponent
      },
   
      
    ]
  },
  {
    path:'start/:quizeId',
    component:StartComponent,
    canActivate:[NormalGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
