import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/_models/board.model';
import { Column } from 'src/app/_models/column.model';
import { EstadosService } from '@app/_services/estados.service';
import { Estado } from '@app/_models/estado';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.less']
})

export class ProjectViewComponent implements OnInit {

  estado:Estado;
  private prueba: any;
   id:string;
  constructor(private route: ActivatedRoute,
              private gs: EstadosService) {
              }



//fue el intento para usar lo que había anteriormente, lo que uds hicieron


  /*board: Board = new Board('Tareas', [
    this.id = this.route.snapshot.paramMap.get('id');
    this.prueba = this.gs.read(this.id);
    this.prueba.forEach(element => {
      new Column(element.description, [
        //cargar tareas
      ])
    });
  ]);*/
 

  /*board: Board = new Board('Tareas', [
    new Column('Ideas', [
      //cargar tareas
    ]),
    new Column('Research', [
    ]),
    new Column('Todo', [
    ]),
    new Column('Done', [
    ])
  ]);*/

//para que funcione primero, pero no se adapta al board que hay 
/*ngOnInit() {
  this.sub = this.route.params.subscribe(params => {this.proyectos = this.service.findById(params['id']);});
  this.id = this.route.snapshot.paramMap.get('id');
  this.prueba = this.gs.read(this.id);
}*/

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }


}

