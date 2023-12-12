// enfermedad-service.module.ts

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EnfermedadService } from './enfermedad.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [EnfermedadService],
})
export class EnfermedadServiceModule {}
