import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarCOmponent } from './navbar/navbar.component';
import { ItemComponent } from './item/item.component';
import { ReviewComponent } from './review/review.component';
import { CartBadge } from './cart-badge/cart-badge.component';
import { PriceDiscountPipe } from './price-discount.pipe';
import { HighlightDirective } from './highlight.directive';
import { CartViewComponent } from './cart-view/cart-view.component';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './item-list/item-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ReviewFormComponent } from './review-form/review-form.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'items', component: ItemListComponent },
  { path: 'cart', component: CartViewComponent },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarCOmponent,
    ItemComponent,
    ReviewComponent,
    CartBadge,
    PriceDiscountPipe,
    HighlightDirective,
    CartViewComponent,
    HomeComponent,
    ItemListComponent,
    NotFoundComponent,
    ReviewFormComponent
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,RouterModule.forRoot(routes)],
  
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
