import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentFormComponent } from './student-form/student-form.component';



// import form
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './services/student.service';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AsideComponent } from './layout/aside/aside.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { ShowErrorComponent } from './components/show-error/show-error.component';
import { StatusBtnComponent } from './components/status-btn/status-btn.component';
import { ClientComponent } from './layouts/client/client.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ClientProductComponent } from './client-product/client-product.component';
import { ClientPostComponent } from './client-post/client-post.component';
import { ClientProductDetailComponent } from './client-product-detail/client-product-detail.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ProductsComponent,
    ProductDetailsComponent,
    StudentComponent,
    StudentDetailComponent,
    StudentFormComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    PostDetailComponent,
    PostFormComponent,
    PostComponent,
    ShowErrorComponent,
    StatusBtnComponent,
    ClientComponent,
    AdminComponent,
    ProductFormComponent,
    ClientProductComponent,
    ClientPostComponent,
    ClientProductDetailComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
