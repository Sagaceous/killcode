import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName:'',
    lastName:'',
    email: ''
  }
  users:User[];
  showExtended : boolean = false ;
  loaded : boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data : any;


  constructor(private userService: UserService) { }

  ngOnInit() {
      this.userService.getData().subscribe(data => {
        console.log(data);
      });
      this.userService.getUsers().subscribe(users => {
        this.users =users;
        this.loaded = true;
      });
    
  }

    onSubmit({value, valid } : {value : User; valid : boolean}){
      if (!valid) {
        alert("not valid");
      } else {
        value.isActive =true;
        value.registered=true;
        value.hide=false;
        this.userService.addUsers(value);
        this.form.reset();
      }

      

    }
  
  }
  

