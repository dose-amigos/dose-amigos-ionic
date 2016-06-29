import {DoseEvent} from "../dose-event/dose-event";
import {DOSE_AMIGOS_USERS} from "../dose-amigos-user-service/dose-amigos-user-mocks";

export var DOSE_EVENTS: Array<DoseEvent> = [
    {
        id: 3,
        time: DOSE_AMIGOS_USERS[0].lastTimeDoseTaken,
        user: DOSE_AMIGOS_USERS[0]
    },
    {
        id: 2,
        time: DOSE_AMIGOS_USERS[1].lastTimeDoseTaken,
        user: DOSE_AMIGOS_USERS[1]
    },
    {
        id: 1,
        time: DOSE_AMIGOS_USERS[2].lastTimeDoseTaken,
        user: DOSE_AMIGOS_USERS[2]
    }
];
