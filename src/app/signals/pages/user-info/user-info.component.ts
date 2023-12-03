import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';
import { UserServiceService } from '../../services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor() { }

  private usersService = inject(UserServiceService);
  public userId = signal(1);

  public currentUser = signal<User|undefined>(undefined);
  public userWasFound = signal(true);

  ngOnInit(): void {
    this.loadUser( this.userId() )
  }

  loadUser( id: number ) {
    if ( id <= 0 ) return;

    this.userId.set(id);
    this.currentUser.set(undefined);

    this.usersService.getUserById( id )
      .subscribe({
        next: (user) => {
         this.currentUser.set( user );
         this.userWasFound.set(true);
        },
        error: () => {
          this.userWasFound.set(false);
          this.currentUser.set(undefined);
        },
      });
    }

    public fullName = computed<string>( () => {
      if ( !this.currentUser() ) return 'Usuario no encontrado';
      return `${ this.currentUser()?.first_name } ${ this.currentUser()?.last_name }`;
    });
}
