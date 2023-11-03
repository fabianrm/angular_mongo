import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ContainerComponent} from './components/container/container.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormatNamePipe} from './pipes/format-name.pipe';
import {FormatValueImagePipe} from './pipes/format-value-image.pipe';
import {FiltrarNombrePipe} from './pipes/filtrar-nombre.pipe';
import {NgxPaginationModule} from "ngx-pagination";
import {DataAdminComponent} from './components/data-admin/data-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    FormatNamePipe,
    FormatValueImagePipe,
    FiltrarNombrePipe,
    DataAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
