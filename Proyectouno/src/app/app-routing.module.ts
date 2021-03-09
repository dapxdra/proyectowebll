import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { ProjectViewComponent } from './proyecto-view/project-view.component';
import { ProyectosCrudComponent } from './proyectos-crud/proyectos-crud.component';
import { EstadosCrudComponent } from '@app/estados-crud/estados-crud.component';
import { TareasCrudComponent } from '@app/tareas-crud/tareas-crud.component';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path: 'project-view/:id', component: ProjectViewComponent },
    { path: 'proyectos', component: ProyectosCrudComponent },
    { path: 'estados', component: EstadosCrudComponent},
    { path: 'tareas', component: TareasCrudComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }