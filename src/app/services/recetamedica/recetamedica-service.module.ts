// recetamedica-service.module.ts

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RecetaMedicaService } from './recetamedica.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [RecetaMedicaService],
})
export class RecetaMedicaServiceModule {}
