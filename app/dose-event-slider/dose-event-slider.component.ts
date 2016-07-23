import {Component, Input} from "@angular/core";
import {DoseEvent} from "../dose-event/dose-event";
import {ItemSliding} from "ionic-angular/index";
import {DoseEventService} from "../dose-event-service/dose-event.service";

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

    constructor(
        private doseEventService: DoseEventService
    ) {
    }

    saveChanges() {
        /*
         * Ignore server response, just assume it worked.
         * There is also a timing issue here if the user quickly does multiple actions
         * and they get out of order in the network.
         */
        this.doseEventService.saveList(
            [
                this.doseEvent
            ]
        );
    }

    takeEvent() {
        this.doseEvent.action = "TAKEN";
        this.saveChanges();
    }

    unTakeEvent() {
        delete(this.doseEvent.action);
        this.saveChanges();
    }

    skipEvent() {
        this.doseEvent.action = "SKIPPED";
        this.saveChanges();
    }

    toggleTaken() {
        if (this.doseEvent.action === "TAKEN") {
            this.unTakeEvent();
        } else {
            this.takeEvent();
        }
    }

    slidingTakeEvent(slidingItem: ItemSliding) {
        this.takeEvent();
        slidingItem.close();
    }

    slidingSkipEvent(slidingItem: ItemSliding) {
        this.skipEvent();
        slidingItem.close();
    }

}

