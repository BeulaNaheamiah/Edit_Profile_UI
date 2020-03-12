import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { HttpClientModule }    from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

import { from } from 'rxjs';

import { AgmCoreModule } from '@agm/core';
import { HereMapComponent } from './here-map/here-map.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewProfileComponent,
    EditProfileComponent,
    ErrorpageComponent,
    HereMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    DatePickerModule,
    HttpClientModule,
     BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
