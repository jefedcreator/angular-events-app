import {
  EventDetailsComponent, 
  CreateEventComponent,
  EventThumbnail,
  EventsListComponent,
  EventService,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpVoteComponent,
  VoterService,
  LocationValidator,
  EventResolver
  } from "./events/index";

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { JQ_TOKEN, TOASTR_TOKEN, Toastr, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective } from './common/index';
import { Error404Component } from './errors/404.component';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { AuthService } from "./user/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

const toastr:Toastr = window['toastr']
const jQuery = window['$']

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnail,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpVoteComponent,
    LocationValidator
  ],
  providers: [EventService,
              {
                provide: TOASTR_TOKEN,
               useValue: toastr
              },
              {
                provide: JQ_TOKEN,
               useValue: jQuery
              },
              EventResolver,
              AuthService,
              {
                provide: 'canDeactivateCreateEvent',
               useValue: checkDirtyState },
               EventListResolver,
               VoterService
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [EventsAppComponent]
})

export class AppModule { }

export function checkDirtyState (component:CreateEventComponent) {
  if(component.isDirty){
    return window.confirm('You have not saved this event, do you really want to cancel?')
  }
  return true
}