import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { DescriptionProductComponent } from './description-product/description-product.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    CarouselComponent,
    DescriptionProductComponent,
    CartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarouselComponent,
    DescriptionProductComponent
  ]
})
export class SharedModule { }
