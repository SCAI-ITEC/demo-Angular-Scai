import { Component, Input, OnInit } from '@angular/core';
import { ToastLevel } from 'src/app/models/toast';
import { CommesseService } from 'src/app/services/commesse.service';
import { PmViewComponent } from '../pm-view/pm-view.component';
import { ToasterService } from '../toaster/toaster.service';

@Component({
  selector: 'app-pm-view-controls',
  templateUrl: './pm-view-controls.component.html',
  styleUrls: ['./pm-view-controls.component.scss']
})
export class PmViewControlsComponent implements OnInit {

  @Input() pmView: PmViewComponent;

  constructor(
    private commesseService: CommesseService,
    private ts: ToasterService
  ) { }

  ngOnInit(): void {
  }

  selezionaTutte() {
    this.commesseService.selezionaTutte(this.pmView.pm);
  }

  deselezionaTutte() {
    this.commesseService.deselezionaTutte(this.pmView.pm);
  }

  salvaSelezionate() {
    this.ts.addToast(ToastLevel.Success, 'Righe selezionate salvate!');
  }

  chiudiSelezionate() {
    this.commesseService.chiudiSelezionate(this.pmView.pm);
    this.ts.addToast(ToastLevel.Warning, 'Righe selezionate chiuse.');
  }

}
