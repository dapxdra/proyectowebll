import { Component, OnInit } from '@angular/core';
import { Proyectos } from '@app/_models/proyecto';
import { ProyectosService } from '@app/_services/proyectos.service';

@Component({
  selector: 'app-proyectos-crud',
  templateUrl: './proyectos-crud.component.html',
  styleUrls: ['./proyectos-crud.component.css']
})
export class ProyectosCrudComponent implements OnInit {


    data: Proyectos[];
    current_proyectos: Proyectos;
    crud_operation = { is_new: false, is_visible: false };
    constructor(private service: ProyectosService) {
  }
  

  ngOnInit() {
   this.data = this.service.read();
    this.current_proyectos = new Proyectos();
  }

  new() {
    this.current_proyectos = new Proyectos();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

  edit(row) {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_proyectos = row;
  }

  delete(row) {
    this.crud_operation.is_new = false;
    const index = this.data.indexOf(row, 0);
    if (index > -1) {
      this.data.splice(index, 1);
    }
    this.save();
  }

  save() {
    if (this.crud_operation.is_new) {
      this.data.push(this.current_proyectos);
    }
    this.service.save(this.data);
    this.current_proyectos = new Proyectos();
    this.crud_operation.is_visible = false;
  }

}
