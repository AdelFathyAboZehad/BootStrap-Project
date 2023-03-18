import { ProductService } from './../../Services/product.service';
import { IshoppingCart } from './../../Models/ishopping-cart';
import { IProduct } from './../../Models/iproduct';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { Store } from 'src/app/Models/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {

  //Day2
 @Output() allShoppingCat:EventEmitter<IshoppingCart>;
  totoPrice: number = 0
  ClientName: string = "Adel";
  // discount: DiscountOffers = DiscountOffers.NoDiscount1;
  // product: IProduct = {
  //   ID: 1,
  //   Name: "Dell",
  //   Quantity: 30,
  //   Price: 2000,
  //   Img: "data:image/jpeg;base64,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",
  //   CateogryID: 1,

  // }
  stores: Store = new Store("iti", ["branch1", "branche2"], "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNaulHEpETwGcWMVHmtE-69UyxLY1l8IbRUA&usqp=CAU");

  constructor(private productservice:ProductService,private router:Router) {
    this.allShoppingCat=new EventEmitter<IshoppingCart>();
  }


  toggleImg: boolean = true;
  toggleSpan: boolean = false;
  toggleImgLogo() {
    this.toggleImg = !this.toggleImg;
    this.toggleSpan = !this.toggleSpan
  }
  /////////////////////////////////Day3//////////////////////////////////////
  productListOfCats: IProduct[] = [];
  ordertotalprice: number = 0;
  totalPrice:number=0
  @Input() receivedCatID: number = 0;

  ngOnInit(): void {

  }
  GetAllShopping(prodName:string,ProdPrice: number, count: any) {
    console.log(count)
    this.totalPrice+= (ProdPrice *+count);
    this.ordertotalprice = (ProdPrice *+count);
    if(+count>0)
    {
      this.allShoppingCat.emit(
        {
         Name:prodName,
         Count:+count ,
         Price:ProdPrice,
         TotalPrice:this.ordertotalprice
        })
    }

  }
  ngOnChanges(): void {
    this.productListOfCats=this.productservice.getProductsByCatID(this.receivedCatID);
  }
  productDetails(ProdID:number){

    this.router.navigate(['productDetails',ProdID]);
  }

}
