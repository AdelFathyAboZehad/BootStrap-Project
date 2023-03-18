import { TestComponent } from './test/test.component';
import { MainComponent } from './Components/main/main.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductComponent } from './Components/product/product.component';
import { OrderComponent } from './Components/order/order.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {path:'',redirectTo:'/Home',pathMatch:'full'},
//   {path:'Home',component:HomeComponent},
//   {path:'Aboutus',component:AboutUsComponent},
//   {path:'Contactus',component:ContactUsComponent},
//   {path:'order',component:OrderComponent},
//   {path:'products',component:ProductComponent},
//   {path:'productDetails/:prodId',component:ProductDetailsComponent},
//  // {path:'notFound',component:NotFoundComponent},
//   {path:'**',component:NotFoundComponent},


// ];
const routes: Routes = [
  {path:'',component:MainComponent,children:[
    {path:'',redirectTo:"/Home",pathMatch:"full",title:'Home page'},
    {path:'Home',component:HomeComponent,title:'Home page'},
    {path:'Test',component:TestComponent,title:'Test page'},
    {path:'Aboutus',component:AboutUsComponent,title:'Aboutus page'},
    {path:'Contactus',component:ContactUsComponent,title:'Contactus page'},
    {path:'order',component:OrderComponent,title:'Order page'},
    {path:'products',component:ProductComponent,title:'Product page'},
    {path:'productDetails/:prodId',component:ProductDetailsComponent,title:'productDetails page'},
  ]},
  {path:'notFound',component:NotFoundComponent,title:'Not Found page'},
  {path:'**',component:NotFoundComponent,title:'Not Found page'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
