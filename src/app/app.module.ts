import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormSampleComponent } from './form-sample/form-sample.component';
import { ReactFormsSampleComponent } from './react-forms-sample/react-forms-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FormSampleComponent,
    ReactFormsSampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule , 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
