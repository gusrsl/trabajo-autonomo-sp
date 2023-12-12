// paciente-service.module.ts

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PacienteService } from './paciente.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [PacienteService],
})
export class PacienteServiceModule {}
