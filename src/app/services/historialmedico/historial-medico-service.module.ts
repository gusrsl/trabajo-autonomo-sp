// historial-medico-service.module.ts

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HistorialMedicoService } from './historialmedico.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [HistorialMedicoService],
})
export class HistorialMedicoServiceModule {}
