import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit,OnChanges {



  productId: number = 0;
  prodDetail: IProduct | undefined = undefined;

  constructor(private activatedRoute: ActivatedRoute, private productservice: ProductService,private router:Router) {

  }
  ngOnChanges(changes: SimpleChanges): void {

  }
  ngOnInit(): void {
    // this.productId = (this.activatedRoute.snapshot.paramMap.get('prodId')) ?
    //   Number(this.activatedRoute.snapshot.paramMap.get('prodId')) : 0;
     this.activatedRoute.paramMap.subscribe((paramters:ParamMap)=>{
      this.productId=(paramters.get('prodId'))? Number(paramters.get('prodId')) : 0;
    })

    let prodDt = this.productservice.getProductByID(this.productId);
    if (prodDt!=undefined) {
      this.prodDetail = prodDt
    }else
    {
      this.router.navigate(['/notFound'])
    }

  }
  goNext()
  {
    let NextProductId=(this.productId)+1;
    if(NextProductId!=0)
    {
      console.log(NextProductId)
      this.router.navigate(['/productDetails',NextProductId])

    }else
    {
      this.router.navigate(['/notFound'])
    }

  }
   ogPrevious()
  {
    let PrevaceProductId=(this.productId)-1;
    if(PrevaceProductId!=0)
    {
      this.router.navigate(['/productDetails',PrevaceProductId])
    }else
    {
      this.router.navigate(['/notFound'])
    }
  }
  backList()
  {
    this.router.navigate(['/order'])
  }
}
