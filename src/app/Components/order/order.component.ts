import { ProductComponent } from './../product/product.component';
import { IshoppingCart } from './../../Models/ishopping-cart';
import { ICategory } from './../../Models/icategory';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
disable:boolean=false;
selectedCatID:number=0
catList:ICategory[];

constructor()
{
  this.catList=[
    {ID:1,Name:"Laptop"},
    {ID:2,Name:"Mobiles"}
  ]
}
AllshoppingCat:IshoppingCart[]=[];

AllShopping(prodShoppind:IshoppingCart)
{
  this.disable=true;

  if(this.AllshoppingCat.find(pr=>pr.Name==prodShoppind.Name)!=null)
  {
   this.AllshoppingCat.forEach(item =>{
      if(item.Name==prodShoppind.Name){
        item.Count+=prodShoppind.Count,
        console.log(prodShoppind.Count)
        item.TotalPrice+=prodShoppind.TotalPrice
      }
  });


  }else{
    this.AllshoppingCat.push(prodShoppind);
  }
}
deleteObject(name: string): void {
  let obj = this.AllshoppingCat.find(o => o.Name === name);
  if(obj!=null)
  {
    let index = this.AllshoppingCat.indexOf(obj);
    if (index > -1) {
      this.AllshoppingCat.splice(index, 1);
    }
  }
}
@ViewChild(ProductComponent)productCom!:ProductComponent
totalpriceInCart:number=0
showTotalPrice:boolean=false;
GetTotalPrice()
{
  this.showTotalPrice=true;
  this.totalpriceInCart=this.productCom.totalPrice;
}
}
