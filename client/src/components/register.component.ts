import {Component} from "@angular/core";
import { UserService } from '../services/user.service';

@Component({
   selector: 'register',
   template: '<div></div>',
   styleUrls: ['./css/register.css'],
   providers: [UserService]
})


export class Register{}