import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './user/user.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ClientComponent } from './layouts/client/client.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ClientProductComponent } from './client-product/client-product.component';
import { ClientPostComponent } from './client-post/client-post.component';
import { ClientProductDetailComponent } from './client-product-detail/client-product-detail.component';
import { ProfileComponent } from './profile/profile.component';

// const routes: Routes = [
//   {
//     path: 'products',
//     component: ProductsComponent
//   },
//   {
//     path: 'product/:id',
//     component: ProductDetailsComponent
//   },
//   {
//     path: 'user',
//     component: UserComponent
//   },
//   {
//     path: 'login',
//     component: LoginComponent
//   },
//   {
//     path: 'students',
//     component: StudentComponent
//   },
//   {
//     path: 'student/details/:id',
//     component: StudentDetailComponent
//   },
//   {
//     path: 'student/form',
//     component: StudentFormComponent
//   },
//   {
//     path: 'student/form/:id',
//     component: StudentFormComponent
//   },
//   {
//     path: 'post',
//     component: PostComponent
//   },
//   {
//     path: 'post/form',
//     component: PostFormComponent,
//   },
//   {
//     path: 'post/form/:id',
//     component: PostFormComponent
//   },
//   {
//     path: 'post/:id',
//     component: PostDetailComponent
//   }
// ];

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: ClientProductComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'login',
        component: StudentComponent
      },
      {
        path: 'phones',
        children:[
          {
            path: '',
              component: ClientProductComponent,
          },
          {
            path: 'detail/:id',
            component: ClientProductDetailComponent
          }
        ]

      },
      {
        path: 'detail/:id',
        component: ClientProductDetailComponent
      },
      {
        path: 'posts',
        component: ClientPostComponent
      },
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: StudentComponent
      },
      {
        path: 'students',
        children: [
          {
            path: '',
            component: StudentComponent,
          },
          {
            path: 'form',
            component: StudentFormComponent
          },
          {
            path: 'form/:id',
            component: StudentFormComponent
          },
          {
            path: ':id',
            component: StudentDetailComponent
          }
        ]
      },
      {
        path: 'phones',
        children: [
          {
            path: '',
            component: ProductsComponent,
          },
          {
            path: 'create',
            component: ProductFormComponent
          },
          {
            path: 'edit/:id',
            component: ProductFormComponent
          },
          {
            path: ':id',
            component: ProductDetailsComponent
          }
        ]
      },
      {
        path: 'posts',
        children: [
          {
            path: '',
            component: PostComponent
          },
          {
            path: 'form',
            component: PostFormComponent
          },
          {
            path: 'form/:id',
            component: PostFormComponent
          },
          {
            path: ':id',
            component: PostDetailComponent
          }
        ]
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
