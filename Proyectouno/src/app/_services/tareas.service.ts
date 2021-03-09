import { Injectable } from '@angular/core';
import { Proyectos } from '@app/_models/proyecto';
import { Tareas } from '@app/_models/tareas';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  proyecto: Proyectos;
  data: Tareas[];
  prueba= [];
  constructor() {
    this.data = JSON.parse(localStorage.getItem('tareas') || '[]');
}

readall() {
  this.data = JSON.parse(localStorage.getItem('tareas') || '[]');
  return this.data;
}

read(id: String) {
  this.prueba = [];
  this.data = JSON.parse(localStorage.getItem('tareas') || '[]' );
  this.data.forEach(element => {
    if (this.proyecto.id === element.id_proyecto.id ) {
      this.prueba.push(element)
    }
  });
  return this.prueba
}

save(data: Tareas[]) {
  debugger;
  this.data = data;
  localStorage.setItem('tareas', JSON.stringify(this.data));
}

findById(id: String) {
  return this.data.find(x => x.id === id);
}
}

