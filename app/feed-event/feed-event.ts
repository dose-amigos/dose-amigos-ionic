import {DoseAmigosUser} from "../dose-amigos-user/dose-amigos-user";

/**
 * Domain object representing an action by a User.
 */
export class FeedEvent {

    id: number;
    user: DoseAmigosUser;
    actionDateTime: Date;
    action: String;
}
