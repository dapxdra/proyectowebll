import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { ProjectViewComponent } from './proyecto-view/project-view.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ProyectosService } from '@app/_services/proyecto.service';
import { ProyectosCrudComponent } from './proyectos-crud/proyectos-crud.component';
import { EstadosCrudComponent } from './estados-crud/estados-crud.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        DragDropModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        ProjectViewComponent,
        ProyectosCrudComponent,
        EstadosCrudComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        ProyectosService,

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };