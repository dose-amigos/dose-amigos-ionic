import {Injectable} from "@angular/core";

/**
 * Service for logic about a provided dose time.
 */
@Injectable()
export class DoseTimeService {

    /**
     * Returns true iff doseTime is now or in the past.
     * @param doseTime {Date} dose is due.
     * @returns {boolean} true iff due now or in the past.
     */
    public isOverdue(
        doseTime: number
    ): boolean {
        /* If now is larger, then doseTime is in past. */
        return doseTime <= new Date().getTime();
    }

}