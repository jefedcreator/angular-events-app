import { Routes } from "@angular/router"
import {
    EventDetailsComponent,
    CreateEventComponent,
    EventsListComponent,
    EventListResolver, 
    CreateSessionComponent,
    EventResolver
     } from "./events/index"
import { Error404Component } from "../app/errors/404.component"

export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']} ,
    {path: 'events', component: EventsListComponent, 
    resolve: {events: EventListResolver}},
    {path: 'events/:id', component: EventDetailsComponent,  resolve: {event: EventResolver}},
    {path: 'events/session/new', component:CreateSessionComponent},
    {path:'404', component:Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {
        path: 'user',
     loadChildren: () =>import('./user/user.module')
     .then(m => m.userModule)
    },
    
]

