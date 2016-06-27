import {DoseEvent} from "../dose-event/dose-event";

const now: Date = new Date();
const fifteenMinAgo: Date = new Date(now.getTime() - 15 * 60000);
const fortyFiveMinAgo: Date = new Date(now.getTime() - 45 * 60000);
const fifteenMinFromNow: Date = new Date(now.getTime() + 15 * 60000);

export var DOSE_EVENTS: Array<DoseEvent> = [
    {
        id: 3,
        time: now,
        user: {
            id: 300,
            name: "Barney Rubble",
            lastTimeDoseTaken: now,
            nextTimeDoseScheduled: fifteenMinFromNow
        }
    },
    {
        id: 2,
        time: fifteenMinAgo,
        user: {
            id: 200,
            name: "Wilma Flintstone",
            lastTimeDoseTaken: fifteenMinAgo,
            nextTimeDoseScheduled: now
        }
    },
    {
        id: 1,
        time: fortyFiveMinAgo,
        user: {
            id: 100,
            name: "Betty Rubble",
            lastTimeDoseTaken: fortyFiveMinAgo,
            nextTimeDoseScheduled: fifteenMinAgo
        }
    }
];
