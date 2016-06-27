import {Injectable} from "@angular/core";
import {AuthUser} from "../auth-user/auth-user";
import {CURRENT_AUTH_USER} from "./auth-user.mocks";

/**
 * Service for actions related to AuthUser instances.
 */
@Injectable()
export class AuthUserService {

    public get(): AuthUser {
        return CURRENT_AUTH_USER;
    }

}