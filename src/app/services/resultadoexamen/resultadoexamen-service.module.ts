// resultadoexamen-service.module.ts

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ResultadoExamenService } from './resultadoexamen.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [ResultadoExamenService],
})
export class ResultadoExamenServiceModule {}
