import { Component, Input, OnInit } from '@angular/core';
import { DettaglioCommessa, StatoDettaglio } from 'src/app/models/commesse';
import { CommesseService } from 'src/app/services/commesse.service';

@Component({
  selector: 'app-pm-view',
  templateUrl: './pm-view.component.html',
  styleUrls: ['./pm-view.component.scss']
})
export class PmViewComponent implements OnInit {

  StatoDettaglio = StatoDettaglio;

  @Input('projectManager') pm: string;

  commesse: any;

  constructor(
    public commesseService: CommesseService
  ) {}

  ngOnInit(): void {
    this.commesse = this.commesseService.ottieniCommesse(this.pm);
  }

  seleziona(dettaglio: DettaglioCommessa, evt: MouseEvent) {
    dettaglio.selezionato = (<HTMLInputElement>evt.target)?.checked;
  }

}
