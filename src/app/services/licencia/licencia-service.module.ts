// licencia-service.module.ts

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LicenciaService } from './licencia.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [LicenciaService],
})
export class LicenciaServiceModule {}
