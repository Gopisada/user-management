import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserActions from '../../store/users/user.actions';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { selectAllUsers, selectUsersLoading } from '../../store/users/user.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users$: Observable<User[]>;
  loading$: Observable<boolean>;
  selectedUser: User | null = null;
  showForm = false;

  constructor(private store: Store, private router: Router) {
    this.users$ = this.store.select(selectAllUsers);
    this.loading$ = this.store.select(selectUsersLoading);
  }

  ngOnInit() {
    this.store.dispatch(UserActions.loadUsers());
  }

  addNew() {
    this.selectedUser = null;
    this.showForm = true;
  }

  edit(user: User) {
    this.selectedUser = user;
    this.showForm = true;
  }

  delete(id: number) {
    if (!confirm('Delete this user?')) return;
    this.store.dispatch(UserActions.deleteUser({ id }));
  }

  onFormClose() {
    this.showForm = false;
    this.selectedUser = null;
  }

  logout() {
    localStorage.removeItem('mock_token');
    this.router.navigate(['/login']);
  }
}
