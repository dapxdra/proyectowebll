import { Injectable } from '@angular/core';
import { Estado } from '@app/_models/estado'
@Injectable({
  providedIn: 'root'
})
export class EstadosService {
  data: Estado[];
  prueba= [];
  constructor() {
    this.data = JSON.parse(localStorage.getItem('estados') || '[]');
  }

  read(id: String) {
    this.prueba = [];
    this.data = JSON.parse(localStorage.getItem('estados') || '[]' );
    this.data.forEach(element => {
      if (element.id_proyecto === id) {
        this.prueba.push(element)
      }
    });
    return this.prueba
  }

  save(data: Estado[]) {
    this.data = data;
    localStorage.setItem('estados', JSON.stringify(this.data));
  }

  findById(id: String) {
    return this.data.find(x => x.id === id);
  }
}
