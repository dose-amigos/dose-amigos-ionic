import {Injectable} from "@angular/core";
import {DoseAmigosUser} from "../dose-amigos-user/dose-amigos-user";
import {DOSE_AMIGOS_USERS} from "./dose-amigos-user-mocks";

/**
 * Service for fetching and saving DoseAmigosUser instances.
 */
@Injectable()
export class DoseAmigosUserService {

    /**
     * Get a list of DoseAmigosUsers.
     * @returns {Promise<Array<DoseAmigosUser>>}
     */
    public list(): Promise<Array<DoseAmigosUser>> {
        return Promise.resolve(
            DOSE_AMIGOS_USERS
        );
    }

    /**
     * Get a single DoseAmigosUser by ID.
     * @param id {number} of DoseAmigosUser.
     * @returns {Promise<DoseAmigosUser>}
     */
    public get(
        id: number
    ): Promise<DoseAmigosUser> {
        return Promise.resolve(
            DOSE_AMIGOS_USERS.filter(
                (doseAmigosUser) => doseAmigosUser.id === id
            )[0]
        );
    }

}
