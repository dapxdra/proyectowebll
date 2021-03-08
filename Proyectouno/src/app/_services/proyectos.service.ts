import { Injectable } from '@angular/core';
import { Proyectos } from '@app/_models/proyecto';

@Injectable()
export class ProyectosService {
  data: Proyectos[];
  constructor() {
    this.data = JSON.parse(localStorage.getItem('proyectos') || '[]');
  }

  read() {
    this.data = JSON.parse(localStorage.getItem('proyectos') || '[]');
    return this.data;
  }

  save(data: Proyectos[]) {
    this.data = data;
    localStorage.setItem('proyectos', JSON.stringify(this.data));
  }

  findById(id: String) {
    return this.data.find(x => x.id === id);
  }
}