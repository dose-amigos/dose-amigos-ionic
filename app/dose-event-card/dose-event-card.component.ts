import {Component, Input} from "@angular/core";
import {DoseEvent} from "../dose-event/dose-event";

/**
 * DoseEventCardComponent for rendering a dose-event as a card.
 */
@Component(
    {
        selector: "dose-event-card",
        templateUrl: "build/dose-event-card/dose-event-card.component.html"
    }
)
export class DoseEventCardComponent {

    @Input()
    public doseEvent: DoseEvent;

}
