// medicamento-service.module.ts

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MedicamentoService } from './medicamento.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [MedicamentoService],
})
export class MedicamentoServiceModule {}
