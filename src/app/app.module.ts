import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductComponent } from './Components/product/product.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BannerComponent } from './Components/banner/banner.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { FormsModule } from '@angular/forms';
import { OrderComponent } from './Components/order/order.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { BirthDatePipe } from './pipes/birth-date.pipe';
import { CardNumberPipe } from './pipes/card-number.pipe';
import { BorderWithShadowDirective } from './Directives/border-with-shadow.directive';
import { MainComponent } from './Components/main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    FooterComponent,
    BannerComponent,
    SideMenuComponent,
    OrderComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    BirthDatePipe,
    CardNumberPipe,
    BorderWithShadowDirective,
    MainComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
