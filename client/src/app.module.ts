import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/app.component';
import { Login } from './components/login.component';
import { Register } from './components/register.component';

const appRoutes: Routes = [
  { path: 'register', component: Register},
  { path: '', component: Login}
];


@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ 
    Login, Register, AppComponent
  ]
  bootstrap: [ AppComponent
  ]
})

export class AppModule {}