import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicios/user.service';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UsersListComponent implements OnInit {
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.userService.users = data;
      },
      error: (e) => {
        console.log(e)
      }
    });
  }
} 
