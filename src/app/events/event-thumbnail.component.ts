import { Component, Input, Output, EventEmitter} from "@angular/core";
import { IEvent } from "./shared/index";


@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]"  class="well hoverwell thumbnail">
        <h2>{{event.name | uppercase}}</h2>
        <div>Date:{{event?.date | date:'shortDate'}}</div>
        <div [ngClass]= "{green: event?.time === '8:00 am',font: event?.time === '8:00 am'}" [ngSwitch] = "event?.time">
            Time:{{event.time}}
            <span *ngSwitchCase ="'8:00 am'"> (Early Start) </span>
            <span *ngSwitchCase ="'10:00 am'"> (Late Start) </span>
            <span *ngSwitchDefault> (Normal Start) </span>
        </div>
        <div>Price:{{event.price | currency:'USD'}}</div>
        <div>
            <span>Location: {{event.location?.address}} </span>
            <span>{{event.location?.city}}, {{event.location?.country}} </span>
        </div>
    </div>
    `,
    styles:[
        `
         .green{color: #003300 !important}
         .font{ font-weight: bold}
         .thumbnail{min-height: 210px;}
         .pad-left{margin-left: 10px;}
         .well div{color: #bbb;}
        `
    ]

})

export class EventThumbnail{
    @Input() event:IEvent
    // logFoo(){
    //     console.log("Foo");
    // }
    // someProperty:any ="same value"
    // @Output() eventClick = new EventEmitter()  
    //   handleClickMe(){
    //     this.eventClick.emit('foo')
    // }
}