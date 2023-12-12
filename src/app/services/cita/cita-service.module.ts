// cita-service.module.ts

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CitaService } from './cita.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [CitaService],
})
export class CitaServiceModule {}
