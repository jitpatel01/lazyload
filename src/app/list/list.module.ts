import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { Page2Component } from './page2/page2.component';


@NgModule({
  declarations: [
    Page2Component
  ],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
