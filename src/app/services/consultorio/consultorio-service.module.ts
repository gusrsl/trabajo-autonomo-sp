import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConsultorioService } from './consultorio.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [ConsultorioService],
})
export class ConsultorioServiceModule {}
