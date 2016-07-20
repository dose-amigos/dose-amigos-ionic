import {Component, Input} from "@angular/core";
import {DoseMedication} from "../dose-medication/dose-medication";

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
    public doseMedication: DoseMedication;

}
