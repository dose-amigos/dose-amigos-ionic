import {Injectable} from "@angular/core";
import {DoseAmigosUser} from "../dose-amigos-user/dose-amigos-user";
import {BACKEND_URL} from "../backend-config/backend-config";
import {AuthHttp} from "../angular2-jwt";

/**
 * Service for fetching and saving DoseAmigosUser instances.
 */
@Injectable()
export class DoseAmigosUserService {

    private amigosUsersUrl: string = `${BACKEND_URL}/amigo-users`;

    constructor(
        private http: AuthHttp
    ) {
    }

    /**
     * Get a list of DoseAmigosUsers.
     * @returns {Promise<Array<DoseAmigosUser>>}
     */
    public list(): Promise<Array<DoseAmigosUser>> {
        return this.http.get(
            this.amigosUsersUrl
        ).toPromise().then(
            (response) => response.json()
        ).catch(
            this.handleError
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
        return this.http.get(
            `${this.amigosUsersUrl}/${id}`
        ).toPromise().then(
            (response) => response.json()
        ).catch(
            this.handleError
        );
    }

    /**
     * Handles any errors communicating with backend.
     * @param error
     * @returns {Promise<void>|Promise<T>}
     */
    private handleError(error: any) {
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);
    }

}
