import { Component, OnInit } from '@angular/core';
import { ExpedienteService } from './expediente.service';

@Component({
  selector: 'app-expedientes',
  templateUrl: './expedientes.page.html',
  styleUrls: ['./expedientes.page.scss'],
})
export class ExpedientesPage implements OnInit {

    expedientes: any = []


  constructor(private expedienteService: ExpedienteService) {}

  ngOnInit() {
    this.expedienteService.dameExpedientes().subscribe(
      (res) => {
        this.expedientes = res
        console.log(res)
        ;
      },
      (err) => console.log(err)
    );
  }
}
