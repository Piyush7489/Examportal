import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './Services/auth.interceptor';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import {MatTableModule} from '@angular/material/table';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizeComponent } from './pages/admin/add-quize/add-quize.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizeComponent } from './pages/admin/update-quize/update-quize.component';
import { ViewQuizeQuestionsComponent } from './pages/admin/view-quize-questions/view-quize-questions.component';
import { AddQuestionsComponent } from './pages/admin/add-questions/add-questions.component';
import { UpdateQuestionsComponent } from './pages/admin/update-questions/update-questions.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SidebarUserComponent } from './pages/user/sidebar-user/sidebar-user.component';
import { LoadQuizeComponent } from './pages/user/load-quize/load-quize.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderModule,NgxUiLoaderHttpModule  } from "ngx-ui-loader";
import { RecentQuizeComponent } from './pages/user/recent-quize/recent-quize.component';
import { ResultComponent } from './pages/user/result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewQuizzesComponent,
    AddQuizeComponent,
    UpdateQuizeComponent,
    ViewQuizeQuestionsComponent,
    AddQuestionsComponent,
    UpdateQuestionsComponent,
    SidebarUserComponent,
    LoadQuizeComponent,
    InstructionsComponent,
    StartComponent,
    RecentQuizeComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    BackButtonDisableModule.forRoot({
      preserveScroll: true
    }),
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
      
    })

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }