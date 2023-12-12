import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CitaService } from './services/cita/cita.service';
import { ConsultorioService } from './services/consultorio/consultorio.service';
import { MedicoService } from './services/medico/medico.service';
import { PacienteService } from './services/paciente/paciente.service';
import { HistorialMedicoService } from './services/historialmedico/historialmedico.service';
import { LaboratorioService } from './services/laboratorio/laboratorio.service';
import { LicenciaService } from './services/licencia/licencia.service';
import { RecetaMedicaService } from './services/recetamedica/recetamedica.service';
import { ResultadoExamenService } from './services/resultadoexamen/resultadoexamen.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CitaService,
    ConsultorioService,
    MedicoService,
    PacienteService,
    HistorialMedicoService,
    LaboratorioService,
    LicenciaService,
    MedicoService,
    RecetaMedicaService,
    ResultadoExamenService,
    HistorialMedicoService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
