import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentComponent } from './student/student.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
import { UserComponent } from './user/user.component';

//định nghĩa đường dẫn
const routes: Routes = [
  {path: '',component: AppComponent},
  {path: 'product',component: ProductComponent},
  {path: 'product/:id',component: ProductDetailComponent},
  {path: 'user',component: UserComponent},
  {path: 'login',component: LoginComponent},
  {path: 'student',component: StudentComponent},
  {path: 'student/from/:id',component: StudentFormComponent},
  {path: 'student/detail/:id',component: StudentdetailComponent},
  {path: 'student/:id',component: StudentdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
