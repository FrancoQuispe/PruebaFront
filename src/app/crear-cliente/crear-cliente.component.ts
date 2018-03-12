import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { CrearClienteService } from './crear-cliente.service';
import { cliente } from './../Model/cliente.model';
import { ok } from '../Model/httpStatus';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css'],
  providers: [CrearClienteService]
})
export class CrearClienteComponent implements OnInit {

  private cliente:cliente;
  private isValid: boolean = true;
  private message: String = "";

  constructor(private crearCliente:CrearClienteService, private router:Router) { 
    this.cliente = new cliente();
  }

  ngOnInit() {
  }

  public guardar(): void{

    this.isValid = this.crearCliente.validate(this.cliente);

    if(this.isValid)
    {
      this.crearCliente.guardar(this.cliente).subscribe(res =>{
        if(res.responseCode == ok)
        {
          this.router.navigate(['/userComponent']);
        }else{
        this.message = res.message;
        this.isValid = false;
       }
      });
    }else{
      this.message = "No puedo haber campos vacios";
    }
  }
}