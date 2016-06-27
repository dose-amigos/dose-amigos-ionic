import {Component, Input} from "@angular/core";

/**
 * LastDoseComponent for displaying the next dose time.
 */
@Component(
    {
        selector: "last-dose",
        templateUrl: "build/last-dose/last-dose.component.html"
    }
)
export class LastDoseComponent {

    @Input()
    public doseTime: Date;

}