import {Component, Input} from "@angular/core";
import {DoseTimeService} from "../dose-time-service/dose-time.service";

/**
 * NextDoseComponent for displaying the next dose time.
 */
@Component(
    {
        selector: "next-dose",
        templateUrl: "build/next-dose/next-dose.component.html"
    }
)
export class NextDoseComponent {

    @Input()
    public doseTime: number;

    constructor(
        public doseTimeService: DoseTimeService
    ) {
    }

    /**
     * Returns true iff dose is overdue.
     * @returns {boolean} overdue.
     */
    public isOverdue(): boolean {

        if (!this.doseTime) {
            return false;
        }

        return this.doseTimeService.isOverdue(
            this.doseTime
        );
    }

}