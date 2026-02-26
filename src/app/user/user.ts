import { Input, Output, EventEmitter, Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type UserType } from './user.model';



const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)


@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.scss',
  
})
export class User {
  @Input({required: true}) user!: UserType;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter();
  
  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser() {
    this.select.emit(this.user.id)
  }
  
}
