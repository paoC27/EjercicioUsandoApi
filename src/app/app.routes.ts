import { Routes } from '@angular/router';
import { UsersListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';

export const routes: Routes = [
    {
        path:'',
        component: UsersListComponent
    },
    {
        path:'user/:id',
        component: UserDetailsComponent
    },
    {
        path:'user-form',
        component: UserFormComponent
    }
];