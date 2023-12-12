import { Component, OnInit, ViewChild } from '@angular/core';
import { CitaService } from 'src/app/services/cita/cita.service';
import { ConsultorioService } from 'src/app/services/consultorio/consultorio.service';
import { EnfermedadService } from 'src/app/services/enfermedad/enfermedad.service';
import { HistorialMedicoService } from 'src/app/services/historialmedico/historialmedico.service';
import { LaboratorioService } from 'src/app/services/laboratorio/laboratorio.service';
import { LicenciaService } from 'src/app/services/licencia/licencia.service';
import { MedicamentoService } from 'src/app/services/medicamento/medicamento.service';
import { MedicoService } from 'src/app/services/medico/medico.service';
import { PacienteService } from 'src/app/services/paciente/paciente.service';
import { RecetaMedicaService } from 'src/app/services/recetamedica/recetamedica.service';
import { ResultadoExamenService } from 'src/app/services/resultadoexamen/resultadoexamen.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 2.1,
  };
  sliderItems: any[] = [];
  patientProfiles: any[] = [];
  activeSlideIndex = 0;

  constructor(
    private citaService: CitaService,
    private pacienteService: PacienteService,
    private medicoService: MedicoService,
    private consultorioService: ConsultorioService,
    private enfermedadService: EnfermedadService,
    private historialMedicoService: HistorialMedicoService,
    private laboratorioService: LaboratorioService,
    private licenciaService: LicenciaService,
    private medicamentoService: MedicamentoService,
    private recetaMedicaService: RecetaMedicaService,
    private resultadoExamenService: ResultadoExamenService,
  ) {}

  ngOnInit() {
    // Lógica original que puedes mantener o modificar según tus necesidades.
    // this.sliderItems = [
    //   { active: true, name: 'Gustavo Rodriguez' },
    //   { active: false, name: 'Diego Flores' },
    //   { active: false, name: 'Alcivar Briones' },
    //   { active: false, name: 'Anthony Palacios' },
    // ];

    // this.patientProfiles = [
    //   {image:'assets/images/prof1.png'},
    //   {image:'assets/images/prof2.png'},
    //   {image:'assets/images/prof3.png'},
    //   {image:'assets/images/prof3.png'}
    // ];

    // Ejemplo de cómo usar el servicio de Cita para obtener datos.
    this.citaService.getCitas().subscribe((citas) => {
      this.sliderItems = citas;
    });

    // Ejemplo de cómo usar el servicio de Paciente para obtener datos.
    this.pacienteService.getPacientes().subscribe((pacientes) => {
      this.patientProfiles = pacientes;
    });
  }
}
