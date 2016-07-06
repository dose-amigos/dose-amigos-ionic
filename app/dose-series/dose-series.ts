import {DoseMedication} from "../dose-medication/dose-medication";

/**
 * Domain object for a series of medications.
 */
export class DoseSeries {

    id: number;
    med: DoseMedication;
    daysOfWeek: Array<number>;
    timesOfDay: Array<Date>;

}
