import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Login } from './components/login.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule.forRoot()
  ],
  declarations: [ 
    Login
  ],
  bootstrap: [ Login ]
})
export class AppModule {}