import {Component, Input} from "@angular/core";
import {DoseEvent} from "../dose-event/dose-event";
import {DoseEventService} from "../dose-event-service/dose-event.service";

/**
 * DoseEventFab for rendering a dose-events.
 */
@Component(
    {
        selector: "dose-event-fab",
        templateUrl: "build/dose-event-fab/dose-event-fab.component.html"
    }
)
export class DoseEventFabComponent {

    @Input()
    public doseEvents: Array<DoseEvent>;


    constructor(
        private doseEventService: DoseEventService
    ) {
    }

    takeAll() {
        for (let dose of this.doseEvents) {
            dose.action = "TAKEN";
        }
        /* Ignore server response, just assume it worked. */
        this.doseEventService.saveList(
            this.doseEvents
        );
    }

}