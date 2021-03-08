import { Component, OnInit } from '@angular/core';
import { Estados } from '@app/_models/estados';
import { EstadosService } from '@app/_services/estados.service';

@Component({
  selector: 'app-estados-crud',
  templateUrl: './estados-crud.component.html',
  styleUrls: ['./estados-crud.component.less']
})
export class EstadosCrudComponent implements OnInit {

  data: Estados[];
  current_estados: Estados;
  crud_operation = { is_new: false, is_visible: false };
  constructor(private service: EstadosService) {
  }

  ngOnInit() {
    this.data = this.service.read();
    this.current_estados = new Estados();
  }

  new() {
    this.current_estados = new Estados();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

  edit(row) {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_estados = row;
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
      this.data.push(this.current_estados);
    }
    this.service.save(this.data);
    this.current_estados = new Estados();
    this.crud_operation.is_visible = false;
  }
}