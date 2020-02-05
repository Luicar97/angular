//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Modulos
import { AppRoutingModule } from './app-routing.module';

//Componente
import { AppComponent } from './app.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { AddContactComponent } from './components/schedule/add-contact/add-contact.component';
import { ListContactsComponent } from './components/schedule/list-contacts/list-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    AddContactComponent,
    ListContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
