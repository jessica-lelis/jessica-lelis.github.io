import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material/app-material.module';



@NgModule({
  declarations: [
  ],
  
  imports: [
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AppMaterialModule,
            FormsModule,
            ReactiveFormsModule
  ]
})
export class SharedModule { }
