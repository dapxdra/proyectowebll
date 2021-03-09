import { Proyectos } from "./proyecto";
import { User } from "./user";

export class Tareas {
    id: string;
    title: string;
    status: string;
    users: string;
    description: string;
    id_proyecto: Proyectos;
    constructor() {
      // code...
    }
  }