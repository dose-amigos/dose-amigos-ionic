import {Component, Input} from "@angular/core";
import {DoseSeries} from "../dose-series/dose-series";

/**
 * DoseMedication compoenet for listing medications.
 */
@Component(
    {
        selector: "med-list-event",
        templateUrl: "build/med-list-event/med-list-event.component.html"
    }
)
export class MedListComponenet {

    @Input()
    public doseSeries: DoseSeries;

}
