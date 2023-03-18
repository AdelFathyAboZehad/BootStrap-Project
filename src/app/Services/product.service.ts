import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  ProductList: IProduct[];
  constructor() {

    this.ProductList = [
      { ID: 1, Name: "Dell", Quantity: 5, Price: 20000, Img: "data:image/jpeg;base64,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", CateogryID: 1 },
      { ID: 2, Name: "HP", Quantity: 7, Price: 20000, Img: "data:image/jpeg;base64,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", CateogryID: 1 },
      { ID: 3, Name: "Iphone", Quantity: 4, Price: 20000, Img: "data:image/jpeg;base64,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", CateogryID: 2 },
      { ID: 4, Name: "Samsung", Quantity: 3, Price: 20000, Img: "data:image/jpeg;base64,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", CateogryID: 2 }

    ]
  }
  getAllProducts():IProduct[]{

    return this.ProductList;
  }
  // getProductsByCatID
  getProductsByCatID(catid:number):IProduct[]{
    if(catid==0){
      return this.getAllProducts();
    }
    else{
      return this.ProductList.filter(prd=>prd.CateogryID==catid)
    }


  }
  ////get product by ID
  getProductByID(prodId:number):IProduct|undefined{
    return this.ProductList.find(prd=>prd.ID==prodId)

  }
}
