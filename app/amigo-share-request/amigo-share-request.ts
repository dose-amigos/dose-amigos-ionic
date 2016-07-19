import {DoseAmigosUser} from "../dose-amigos-user/dose-amigos-user";

export class AmigoShareRequest {

    id: number;
    sharedAmigo: DoseAmigosUser;
    targetUserEmail: string;
    accepted: boolean;

}