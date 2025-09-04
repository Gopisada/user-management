import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import * as UserActions from '../../store/users/user.actions';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() user: User | null = null;
  @Output() close = new EventEmitter<void>();

  form!: FormGroup;
  jobRoles = ['tech', 'id', 'gd', 'qa'];

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: [this.user?.username || '', [Validators.required, Validators.minLength(3)]],
      email: [this.user?.email || '', [Validators.required, Validators.email]],
      jobRole: [this.user?.jobRole || 'tech', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    const payload = { ...this.user, ...this.form.value } as User;

    if (this.user && this.user.id) {
      this.store.dispatch(UserActions.updateUser({ user: payload }));
    } else {
      // omit id for create
      const { id, ...rest } = payload as any;
      this.store.dispatch(UserActions.addUser({ user: rest }));
    }

    this.close.emit();
  }
}
