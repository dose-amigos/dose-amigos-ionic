import {DoseAmigosUser} from "../dose-amigos-user/dose-amigos-user";

export class AmigoShareRequest {

    shareId: number;
    sharedAmigo: DoseAmigosUser;
    targetUserEmail: string;
    accepted: boolean;

}