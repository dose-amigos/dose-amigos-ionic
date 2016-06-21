import {DoseAmigosUser} from "../dose-amigos-user/dose-amigos-user";

/**
 * Domain object representing a Dose Event by a User.
 */
export class DoseEvent {

    id: number;
    user: DoseAmigosUser;
    time: Date;

}
