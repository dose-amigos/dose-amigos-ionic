import {DoseMedication} from "../dose-medication/dose-medication";

/**
 * Domain object representing a specific time to take a medication.
 */
export class DoseEvent {

    id: number;
    med: DoseMedication;
    scheduledDateTime: number;
    actionDateTime: number;
    action: String;
}
