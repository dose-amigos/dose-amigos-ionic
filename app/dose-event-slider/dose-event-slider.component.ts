import {Component, Input} from "@angular/core";
import {DoseEvent} from "../dose-event/dose-event";
import {ItemSliding} from "ionic-angular/index";

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

    takeEvent() {
        this.doseEvent.action = "TAKEN";
    }

    toggleTaken() {
        if (this.doseEvent.action === "TAKEN") {
            delete(this.doseEvent.action);
        } else {
            this.takeEvent();
        }
    }

    slidingTakeEvent(slidingItem: ItemSliding) {
        this.takeEvent();
        slidingItem.close();
    }

    skipEvent(slidingItem: ItemSliding) {
        this.doseEvent.action = "SKIPPED";
        slidingItem.close();
    }

}

