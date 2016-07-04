import {FeedEvent} from "../feed-event/feed-event";
import {DOSE_AMIGOS_USERS} from "../dose-amigos-user-service/dose-amigos-user-mocks";

export var FEED_EVENTS: Array<FeedEvent> = [
    {
        id: 3,
        actionDateTime: DOSE_AMIGOS_USERS[0].lastTimeDoseTaken,
        user: DOSE_AMIGOS_USERS[0],
        action: "has completed their medication."
    },
    {
        id: 2,
        actionDateTime: DOSE_AMIGOS_USERS[1].lastTimeDoseTaken,
        user: DOSE_AMIGOS_USERS[1],
        action: "has completed their medication."
    },
    {
        id: 1,
        actionDateTime: DOSE_AMIGOS_USERS[2].lastTimeDoseTaken,
        user: DOSE_AMIGOS_USERS[2],
        action: "has completed their medication."
    }
];
