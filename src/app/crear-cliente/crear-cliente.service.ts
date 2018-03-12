import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { cliente } from './../Model/cliente.model';
import { RestResponse } from './../Model/restResponse.model';

@Injectable()
export class CrearClienteService {

  constructor(private http:HttpClient) { }

  /**
   * Metodo que valida campos obligatorios 
   * @param cliente 
   */
  public validate(cliente:cliente):boolean
  {
    let isValid = true;

    if(!cliente.nombreCliente)
    {
      isValid = false;
    }

    if(!cliente.telefonoCliente)
    {
      isValid = false;
    }

    return isValid; 
  }

  public guardar(cliente:cliente): Observable<RestResponse>
  {
    return this.http.post<RestResponse>("http://localhost:8080/saveOrUpdate", JSON.stringify(cliente));
  }
}
