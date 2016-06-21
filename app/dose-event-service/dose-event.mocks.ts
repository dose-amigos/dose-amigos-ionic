import {DoseEvent} from "../dose-event/dose-event";

export var DOSE_EVENTS: Array<DoseEvent> = [
    {
        id: 3,
        time: new Date(),
        user: {
            id: 300,
            name: "John Doe",
            email: "jdoe@example.org",

        }
    },
    {
        id: 2,
        time: new Date(),
        user: {
            id: 200,
            name: "Jane Smith",
            email: "jsmith@example.org",

        }
    },
    {
        id: 1,
        time: new Date(),
        user: {
            id: 100,
            name: "Some Guy",
            email: "sguy@example.org",

        }
    }
];
