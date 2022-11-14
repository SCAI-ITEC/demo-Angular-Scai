import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommesseService } from 'src/app/services/commesse.service';

@Component({
  selector: 'app-ref-create-view',
  templateUrl: './ref-create-view.component.html',
  styleUrls: ['./ref-create-view.component.scss']
})
export class RefCreateViewComponent implements OnInit {

  pm = new FormControl("", Validators.required);
  descrizioneCommessa = new FormControl("", Validators.required);
  dataInizio = new FormControl("", Validators.required);
  clienteFinale = new FormControl("", Validators.required);

  form = new FormGroup({
    pm: this.pm,
    descrizioneCommessa: this.descrizioneCommessa,
    dataInizio: this.dataInizio,
    clienteFinale: this.clienteFinale
  });

  constructor(
    private commesseService: CommesseService
  ) {
  }

  ngOnInit(): void {
  }

  creaCommessa() {
    this.commesseService.creaCommessa(this.form.value)
  }

}
