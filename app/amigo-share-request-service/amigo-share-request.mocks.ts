import {AmigoShareRequest} from "../amigo-share-request/amigo-share-request";
import {DoseAmigosUser} from "../dose-amigos-user/dose-amigos-user";

const dinoUser: DoseAmigosUser = {
    id: 9090,
    name: "Dino Flintstone",
    lastTimeDoseTaken: new Date(),
    nextTimeDoseScheduled: new Date(),
    picture: ""
};

const pebblesUser: DoseAmigosUser = {
    id: 8080,
    name: "Pebbles Flintstone",
    lastTimeDoseTaken: new Date(),
    nextTimeDoseScheduled: new Date(),
    picture: ""
};

export var AMIGO_SHARE_REQUESTS: Array<AmigoShareRequest> = [
    {
        id: 9876,
        sharedAmigo: dinoUser,
        targetUserEmail: "fred.flintstone@example.org",
        accepted: false
    },
    {
        id: 5432,
        sharedAmigo: pebblesUser,
        targetUserEmail: "fred.flintstone@example.org",
        accepted: false
    }
];