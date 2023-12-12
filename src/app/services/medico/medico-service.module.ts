// medico-service.module.ts

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MedicoService } from './medico.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [MedicoService],
})
export class MedicoServiceModule {}
