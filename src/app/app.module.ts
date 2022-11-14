import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CardComponent } from './components/card/card.component';
import { CollapsibleComponent } from './components/collapsible/collapsible.component';
import { PmViewComponent } from './components/pm-view/pm-view.component';
import { PmViewControlsComponent } from './components/pm-view-controls/pm-view-controls.component';
import { ReferenteComponent } from './pages/referente/referente.component';
import { RefCreateViewComponent } from './components/ref-create-view/ref-create-view.component';
import { RefManageViewComponent } from './components/ref-manage-view/ref-manage-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToasterComponent } from './components/toaster/toaster.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CardComponent,
    CollapsibleComponent,
    PmViewComponent,
    PmViewControlsComponent,
    ReferenteComponent,
    RefCreateViewComponent,
    RefManageViewComponent,
    ToasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
