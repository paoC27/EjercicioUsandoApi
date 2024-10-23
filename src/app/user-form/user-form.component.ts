import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicios/user.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})

export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  id!: FormControl;
  name!: FormControl;
  email!: FormControl;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.id = new FormControl('');
    this.name = new FormControl('');
    this.email = new FormControl('');

    this.userForm = new FormGroup({
      id: this.id,
      name: this.name,
      email: this.email,
    })
  }

  postUser() {
    this.userService.postUser(this.userForm.value).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

} 