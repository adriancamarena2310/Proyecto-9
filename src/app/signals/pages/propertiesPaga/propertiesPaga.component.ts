import { Component, OnDestroy, OnInit, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-propertiesPaga',
  templateUrl: './propertiesPaga.component.html',
  styleUrls: ['./propertiesPaga.component.css']
})
export class PropertiesPagaComponent implements OnDestroy,OnInit {
  ngOnInit(): void {
    setInterval( () => {
      this.counter.update( current => current + 1 );

      // if ( this.counter() == 15 )
      //   this.userChangedEffect.destroy();
    }, 1000 );
  }

  ngOnDestroy(): void {
    // this.userChangedEffect.destroy();
  }
  public counter = signal( 10 );


  public user = signal<User>( {
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg'
  } );


  onFieldUpdated( field: keyof User, value: string ) {

    // this.user.set({
    //   ...this.user(),
    //   [field]: value,
    // });

    // this.user.update( current => ({
    //   ...current,
    //   [field]: value
    // }))

    this.user.update( current => {

      switch ( field ) {

        case 'email':
          current.email = value;
          break;

        case 'avatar':
          current.avatar = value;
          break;

        case 'first_name':
          current.first_name = value;
          break;

        case 'last_name':
          current.last_name = value;
          break;

        case 'id':
          current.id = Number( value );
        break;
      }


      return current;
    } );


  }

  increaseBy( value: number ) {
    this.counter.update( current => current + value );
  }

  public fullName = computed( () => `${ this.user().first_name } ${ this.user().last_name }` );
  public userChangedEffect = effect( () => {
    // Todo: Descomentar esta línea
    console.log( `${ this.user().first_name } - ${ this.counter() } ` );
  } );
}
