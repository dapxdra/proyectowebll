import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/_models/board.model';
import { Column } from 'src/app/_models/column.model';

@Component({
  selector: 'app',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.less']
})
export class ProjectViewComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Tareas', [
    new Column('Ideas', [
      //cargar tareas
    ]),
    new Column('Research', [
    ]),
    new Column('Todo', [
    ]),
    new Column('Done', [
    ])
  ]);

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

