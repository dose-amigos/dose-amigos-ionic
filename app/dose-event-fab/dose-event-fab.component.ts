import {Component, Input} from "@angular/core";
import {DoseEvent} from "../dose-event/dose-event";

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

    takeAll() {
        for (let dose of this.doseEvents) {
            dose.action = "TAKEN";
        }

    }

}