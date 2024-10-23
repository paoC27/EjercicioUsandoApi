import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../servicios/user.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  selectedUser:any;
  
  constructor(private route:ActivatedRoute, public userService:UserService){}
  
  ngOnInit(): void {
      const id = this.route.snapshot.params['id'];
      this.selectedUser = this.userService.getUser(id).subscribe({
        next: (data)=>{
          this.selectedUser = data;
          console.log(this.selectedUser)
        },
        error: (e)=>{
          console.log(e);
      }
      }); 
  }
}
