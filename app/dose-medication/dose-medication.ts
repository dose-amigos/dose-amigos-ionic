import {DoseAmigosUser} from "../dose-amigos-user/dose-amigos-user";

/**
 * Domain object for a medication for a user.
 */
export class DoseMedication {

    id: number;
    user: DoseAmigosUser;
    rxcui: number;
    name: string;
    doseAmount: number;
    doseUnit: string;
    totalAmount: number;
    doseInstructions: string;
    firstTaken: Date;
    lastDoseTaken: Date;
    nextScheduledDate: Date;
    active: boolean;

}
