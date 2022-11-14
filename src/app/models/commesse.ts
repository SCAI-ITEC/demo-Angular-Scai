export enum StatoDettaglio {
    Aperto = 'aperto',
    Chiuso = 'chiuso',
    Vistato = 'vistato',
}

export class DettaglioCommessa {

    mese: string;
    _mese: Date;

    percentualeAvanzamento: number;
    stato: string;

    selezionato: boolean;

    constructor(datoDettaglio: any) {

        this.mese = datoDettaglio.mese;
        this._mese = new Date(this.mese);

        this.percentualeAvanzamento = datoDettaglio.percentualeAvanzamento;
        this.stato = datoDettaglio.stato;

        this.selezionato = false;
    }
}

export class Commessa {

    protocolloCommessa: number;
    descrizioneCommessa: string;

    codiceSottocommessa: number;
    descrizioneSottocommessa: string;

    dataInizio: string;
    _dataInizio: Date;
    dataFine: string;
    _dataFine: Date;

    // percentualeAvanzamentoTotale: number;

    cliente: string;
    clienteFinale: string;

    dettaglio: DettaglioCommessa [];

    constructor(datoCommessa: any) {

        this.protocolloCommessa = datoCommessa.protocolloCommessa;
        this.descrizioneCommessa = datoCommessa.descrizioneCommessa;

        this.codiceSottocommessa = datoCommessa.codiceSottocommessa;
        this.descrizioneSottocommessa = datoCommessa.descrizioneSottocommessa;

        this.dataInizio = datoCommessa.dataInizio;
        this._dataInizio = new Date(this.dataInizio);
        this.dataFine = datoCommessa.dataFine;
        this._dataFine = new Date(this.dataFine);

        this.cliente = datoCommessa.cliente;
        this.clienteFinale = datoCommessa.clienteFinale;

        this.dettaglio = datoCommessa.dettaglio
            .map((d: any) => new DettaglioCommessa(d));

        if (this.percentualeAvanzamentoTotale < 100) {

            if (!this.dettaglio.length) {
                const adesso = new Date();
                this.dettaglio.push(
                    new DettaglioCommessa({
                        mese: adesso.getFullYear() + '-' +  (adesso.getMonth() + 1),
                        percentualeAvanzamento: 0,
                        stato: StatoDettaglio.Aperto
                    })
                );
                return;
            }

            const ultimoDettaglio = this.dettaglio[this.dettaglio.length - 1];
            let prossimoAnno = ultimoDettaglio._mese.getFullYear();
            let prossimoMese = ultimoDettaglio._mese.getMonth();
            prossimoMese++;
            if (prossimoMese > 11) {
                prossimoMese = 0;
                prossimoAnno++;
            }
            this.dettaglio.push(
                new DettaglioCommessa({
                    mese: prossimoAnno + '-' +  (prossimoMese + 1),
                    percentualeAvanzamento: ultimoDettaglio.percentualeAvanzamento,
                    stato: StatoDettaglio.Aperto
                })
            );
        }
    }

    get percentualeAvanzamentoTotale() {
        return this.dettaglio.reduce((a, c) => a += +c.percentualeAvanzamento, 0);
    }
}