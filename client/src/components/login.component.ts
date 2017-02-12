import {Component, OnInit} from "@angular/core";
import { UserService } from '../services/user.service';

@Component({
   selector: 'login',
   templateUrl: '../tpl/login-form.html',
   styleUrls: ['../css/login.css'],
   providers: [UserService]
})


export class Login implements OnInit{
 	errorMessage: string;
  users: any[];

  	constructor (private userService: UserService) {}

  	ngOnInit() { this.getUsers(); }
    
    getUsers() {
    	this.userService.getUsers()
                     .subscribe(
                        users => { 
                           console.log(users);
                           this.users = users;
                           },
                        error => {
                          //   console.log(error);
                        	 // this.errorMessage = <any>error
                        	}
                        );
       }

}