import { Injectable } from '@angular/core';
import datiBackend from '../mocks/commesse.json';
import { Commessa, StatoDettaglio } from '../models/commesse';

@Injectable({
  providedIn: 'root'
})
export class CommesseService {

  datiBackend = datiBackend;

  constructor() {
    for (const pm of this.datiBackend) {
      pm.commesse = pm.commesse.map((c: any) => new Commessa(c));
    }
  }

  ottieniCommesse(pm: string): Commessa[] {
    return this.datiBackend.find((d: any) => d.projectManager === pm).commesse;
  }

  creaCommessa(form: any) {
    const commesse = this.datiBackend
      .find((d: any) => d.projectManager === form.pm)
      .commesse;
    form.percentualeAvanzamentoTotale = 0;
    form.dettaglio = [];
    commesse.push(new Commessa(form));
  }

  selezionaTutte(pm: string) {
    this.ottieniCommesse(pm)
      .map(c =>
        c.dettaglio
          .filter(d => d.stato !== StatoDettaglio.Chiuso && d.stato !== StatoDettaglio.Vistato)
          .map(d => d.selezionato = true)
      );
  }

  deselezionaTutte(pm: string) {
    this.ottieniCommesse(pm)
      .map(c =>
        c.dettaglio
          .filter(d => d.stato !== StatoDettaglio.Chiuso && d.stato !== StatoDettaglio.Vistato)
          .map(d => d.selezionato = false)
      );
  }

  chiudiSelezionate(pm: string) {
    this.ottieniCommesse(pm)
      .map(c =>
        c.dettaglio
          .filter(d => d.selezionato)
          .map(d => {
            d.selezionato = false;
            d.stato = StatoDettaglio.Chiuso;
          })
      );
  }
}
