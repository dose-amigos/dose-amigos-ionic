import {Component, OnInit} from "@angular/core";
import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";
import {DoseEventSliderComponent} from "../../dose-event-slider/dose-event-slider.component";
import {DoseEventService} from "../../dose-event-service/dose-event.service";
import {DoseEvent} from "../../dose-event/dose-event";
import {LogonPanelComponent} from "../../logon-panel-component/logon-panel.component";
import {AuthService} from "../../auth-service/auth.service";
import {DoseEventFabComponent} from "../../dose-event-fab/dose-event-fab.component";

@Component(
    {
        templateUrl: "build/pages/dose/dose.html",
        directives: [
            DoseAmigosToolbar,
            DoseEventSliderComponent,
            LogonPanelComponent,
            DoseEventFabComponent
        ]
    }
)
export class DosePage implements OnInit {

    public title: string = "Dose";
    public doseEvents: Array<DoseEvent> = [];

    constructor(
        private doseEventService: DoseEventService,
        private auth: AuthService
    ) {

    }

    public ngOnInit(): any {

        return this.doseEventService.list().then(
            doseEvents => {
                this.doseEvents = doseEvents;
            }
        );

    }
}
