import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {
  users: User[];
  data : Observable<any>; 

  constructor() {
    this.users = [
      {
      firstName: 'Nyeba',
      lastName: 'Raj',
      email : 'nyeb@gmail.com',
      isActive: true,
      registered : new Date('01/12/2000 08:30:00'),
      hide : true
    },
    {
      firstName: 'Razak',
      lastName: 'Raj',
      email: 'razak@gmail.com',
      isActive: false,
      registered : new Date('05/08/2012 08:30:00'),
      hide : true
    },
    {
      firstName: 'Sanusi',
      lastName: 'Raj',
      email : 'sanusi@gmail.com',
      isActive: true,
      registered : new Date('05/2/2030 08:30:00'),
      hide : true

    }

    ];
  }
  getData(){
    this.data = new Observable(observer => {
      setTimeout(()=> {
        observer.next(1);}
        , 1000);

        setTimeout(()=> {
          observer.next(2);}
          , 2000);

          setTimeout(()=> {
            observer.next(3);}
            , 3000);

            setTimeout(()=> {
              observer.next(4);}
              , 4000);
    });
    return this.data;
  }

  getUsers(): Observable <User[]> {
    return of(this.users);
}
  addUsers(user: User){
    this.users.unshift(user);
}
}