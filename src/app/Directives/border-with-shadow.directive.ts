import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBorderWithShadow]'
})
export class BorderWithShadowDirective implements OnChanges {
@Input('appBorderWithShadow') BGColor:string='yellow'//'weight'
  constructor(private elem:ElementRef)
  {
    elem.nativeElement.style.border='5px dotted Purple';
    elem.nativeElement.style.borderRadius='30px 30px';


  }
  ngOnChanges(changes: SimpleChanges): void {
   this.elem.nativeElement.style.backgroundColor=`${this.BGColor}`;
  }
  @HostListener('mouseover') mouseoverFun()
  {
    this.elem.nativeElement.style.textShadow='20px';
  }
  @HostListener('mouseout') mouseoutFun()
  {
    this.elem.nativeElement.style.textShadow='5px';
  }

}
