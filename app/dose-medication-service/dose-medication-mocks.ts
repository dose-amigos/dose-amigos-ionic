import {DoseMedication} from "../dose-medication/dose-medication";
import {DOSE_AMIGOS_USERS} from "../dose-amigos-user-service/dose-amigos-user-mocks";

const now: Date = new Date();

export var DOSE_MEDICATIONS: Array<DoseMedication> = [
    {
        id: 300,
        user: DOSE_AMIGOS_USERS[0],
        rxcui: 1,
        name: "Advil",
        doseAmount: 1,
        doseUnit: "mg",
        totalAmount: 1,
        doseInstructions: "Twice Daily",
        firstTaken: now,
        lastDoseTaken: now,
        nextScheduledDate: null,
        active: true
    },
    {
        id: 200,
        user: DOSE_AMIGOS_USERS[0],
        rxcui: 1,
        name: "Clariton",
        doseAmount: 1,
        doseUnit: "mg",
        totalAmount: 1,
        doseInstructions: "Twice Daily",
        firstTaken: now,
        lastDoseTaken: now,
        nextScheduledDate: null,
        active: true
    },
    {
        id: 100,
        user: DOSE_AMIGOS_USERS[0],
        rxcui: 1,
        name: "Lialda",
        doseAmount: 1,
        doseUnit: "mg",
        totalAmount: 1,
        doseInstructions: "Twice Daily",
        firstTaken: now,
        lastDoseTaken: now,
        nextScheduledDate: null,
        active: true
    }
];
