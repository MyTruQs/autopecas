import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { ItemService } from './components/template/itens/item.service';
import { ItensComponent } from './components/template/itens/itens.component';
import { EditarComponent } from './components/template/editar/editar.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItensComponent,
    EditarComponent,
  ],
  imports: [
    BrowserModule,
     FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    BrowserAnimationsModule
  
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
