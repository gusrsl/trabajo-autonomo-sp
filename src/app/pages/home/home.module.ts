import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ConsultorioService } from 'src/app/services/consultorio/consultorio.service';
import { MedicoService } from 'src/app/services/medico/medico.service';
import { PacienteService } from 'src/app/services/paciente/paciente.service';
import { HistorialMedicoService } from 'src/app/services/historialmedico/historialmedico.service';
import { CitaServiceModule } from 'src/app/services/cita/cita-service.module';
import { CitaService } from 'src/app/services/cita/cita.service';
import { EnfermedadService } from 'src/app/services/enfermedad/enfermedad.service';
import { LaboratorioService } from 'src/app/services/laboratorio/laboratorio.service';
import { LicenciaService } from 'src/app/services/licencia/licencia.service';
import { MedicamentoService } from 'src/app/services/medicamento/medicamento.service';
import { RecetaMedicaService } from 'src/app/services/recetamedica/recetamedica.service';
import { ResultadoExamenService } from 'src/app/services/resultadoexamen/resultadoexamen.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CitaServiceModule
  ],
  declarations: [HomePage],
  providers: [
    CitaService,
    PacienteService,
    MedicoService,
    ConsultorioService,
    EnfermedadService,
    HistorialMedicoService,
    LaboratorioService,
    LicenciaService,
    MedicamentoService,
    RecetaMedicaService,
    ResultadoExamenService,
  ],
})
export class HomePageModule {}
