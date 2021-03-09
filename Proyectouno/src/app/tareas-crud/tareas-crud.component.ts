import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tareas } from '@app/_models/tareas';
import { TareasService } from '@app/_services/tareas.service';
import {Router, ActivatedRoute} from '@angular/router';
import {User} from '@app/_models/user';

@Component({
  selector: 'app-tareas-crud',
  templateUrl: './tareas-crud.component.html',
  styleUrls: ['./tareas-crud.component.less']
})
export class TareasCrudComponent implements OnInit {

  
  user: User;
  data: Tareas[];
  current_tareas: Tareas;
    tareas: Tareas;
    id:string;
    sub:any;
    crud_operation = { is_new: false, is_visible: false };
    constructor(private service: TareasService,
      private route: ActivatedRoute,
    private router: Router  )  {
  }


  ngOnInit() {
    this.data = this.service.readall();
    this.current_tareas = new Tareas();
  }

  new() {
    this.current_tareas = new Tareas();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

  edit(row) {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_tareas = row;
  }

  delete(row) {
    this.crud_operation.is_new = false;
    const index = this.data.indexOf(row, 0);
    if (index > -1) {
      this.data.splice(index, 1);
    }
    this.save();
  }
//cuando se crea una nueva tarea se debe enviar por parámetro el id de proyecto y el id del estado donde se esta en ese momento
  save() {
    if (this.crud_operation.is_new) {
      /*this.current_tareas.id_proyecto = this.route.snapshot.paramMap.get('id');
      this.current_tareas.status = this.route.snapshot.paramMap.get('id_estado');// si solo se quieren crear en una taabla se borra y se pasa el id del proyecto
      this.current_tareas.description = this.route.snapshot.paramMap.get('description');
      this.current_tareas.title = this.route.snapshot.paramMap.get('title');
      this.current_tareas.users = this.route.snapshot.paramMap.get('user');*/
      this.data = this.service.readall();
      this.data.push(this.current_tareas);
    }
    this.service.save(this.data);
    this.current_tareas = new Tareas();
    this.crud_operation.is_visible = false;
  }
}

