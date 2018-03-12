import { cliente } from './../Model/cliente.model';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

  public getClientes():Observable<cliente[]>{
    return this.http.get<cliente[]>("http://localhost:8080/getClientes");
  }
}
