import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

   public usersList : User[];

  constructor(private userService : UserService) { }

   ngOnInit(): void {
    this.userService.getUserList().subscribe({
     
      next  : users => {
        this.usersList = users;
        console.log('here is the data', users);
       },
      error : catchError(() => throwError('User not found'))
     })
  }




}
