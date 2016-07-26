import {DoseSeries} from "../dose-series/dose-series";
import {DOSE_AMIGOS_USERS} from "../dose-amigos-user-service/dose-amigos-user-mocks";
import {DOSE_MEDICATIONS} from "../dose-medication-service/dose-medication-mocks";

const now: Date = new Date();

export var DOSE_SERIES: Array<DoseSeries> = [
    {
        id: 666,
        med: DOSE_MEDICATIONS[0],
        daysOfWeek: [1, 2, 3, 4, 5, 6, 7],
        timesOfDay: [ now.getTime() ]
    }
];
