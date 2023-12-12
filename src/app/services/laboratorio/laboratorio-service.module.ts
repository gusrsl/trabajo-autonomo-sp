// laboratorio-service.module.ts

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LaboratorioService } from './laboratorio.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [LaboratorioService],
})
export class LaboratorioServiceModule {}
