import { Injectable } from '@angular/core';
import { Proyecto } from '@app/_models/proyecto';

@Injectable()
export class ProyectosService {
  data: Proyecto[];
  constructor() {
    this.data = JSON.parse(localStorage.getItem('proyectos') || '[]');
  }

  read() {
    this.data = JSON.parse(localStorage.getItem('proyectos') || '[]');
    return this.data;
  }

  save(data: Proyecto[]) {
    this.data = data;
    localStorage.setItem('proyectos', JSON.stringify(this.data));
  }

  findById(id: String) {
    return this.data.find(x => x.id === id);
  }
}