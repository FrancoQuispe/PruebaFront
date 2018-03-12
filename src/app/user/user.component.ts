import { cliente } from './../Model/cliente.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  private clientes:Array<cliente>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUser();
   }
  private loadUser():void
  {
      this.userService.getClientes().subscribe(res => {
        this.clientes = res;
      })
  }

}
