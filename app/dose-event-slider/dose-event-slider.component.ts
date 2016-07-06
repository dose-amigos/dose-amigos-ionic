import {Component, Input} from "@angular/core";
import {DoseEvent} from "../dose-event/dose-event";

/**
 * DoseEventSlider for rendering a dose-events.
 */
@Component(
    {
        selector: "dose-event-slider",
        templateUrl: "build/dose-event-slider/dose-event-slider.component.html"
    }
)
export class DoseEventSliderComponent {

    @Input()
    public doseEvent: DoseEvent;

}
