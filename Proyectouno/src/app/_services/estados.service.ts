import { Injectable } from '@angular/core';
import { Estado } from '@app/_models/estado'
@Injectable({
  providedIn: 'root'
})
export class EstadosService {
  data: Estado[];
  constructor() {
    this.data = JSON.parse(localStorage.getItem('estados') || '[]');
  }

  read() {
    this.data = JSON.parse(localStorage.getItem('estados') || '[]');
    return this.data;
  }

  save(data: Estado[]) {
    this.data = data;
    localStorage.setItem('estados', JSON.stringify(this.data));
  }

  findById(id: String) {
    return this.data.find(x => x.id === id);
  }
}
