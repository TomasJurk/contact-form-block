import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductPaymentsComponent } from './components/products/product-payments/product-payments.component';
import { ProductAccountDataComponent } from './components/products/product-account-data/product-account-data.component';
import { SvgPaymentsComponent } from './components/icon-components/svg-payments/svg-payments.component';
import { SvgAccountDataComponent } from './components/icon-components/svg-account-data/svg-account-data.component';
import { LivingBackgroundComponent } from './components/living-background/living-background.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ProductsComponent,
    ProductPaymentsComponent,
    ProductAccountDataComponent,
    SvgPaymentsComponent,
    SvgAccountDataComponent,
    LivingBackgroundComponent,
  ],
  imports: [FormsModule, ReactiveFormsModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
