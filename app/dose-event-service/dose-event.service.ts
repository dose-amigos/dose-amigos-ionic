import {Injectable} from "@angular/core";
import {DoseEvent} from "../dose-event/dose-event";
import {BACKEND_URL} from "../backend-config/backend-config";
import {AuthHttp} from "../angular2-jwt";
import {Headers, RequestOptions} from "@angular/http";

/**
 * Service for fetching and saving DoseEvent instances.
 */
@Injectable()
export class DoseEventService {

    private doseEventsUrl: string = `${BACKEND_URL}/dose-events`;

    constructor(
        private http: AuthHttp
    ) {
    }

    /**
     * Saves all provided doseEvents to the server.
     * @param doseEvents to save.
     * @returns {Promise<Array<DoseEvent>>}.
     */
    public saveList(
        doseEvents: Array<DoseEvent>
    ): Promise<Array<DoseEvent>> {

        const headers = new Headers(
            {
                "Content-Type": "application/json"
            }
        );

        const options = new RequestOptions(
            {
                headers: headers
            }
        );

        return this.http.put(
            this.doseEventsUrl,
            JSON.stringify(doseEvents),
            options
        ).toPromise().then(
            res => res.json()
        ).catch(
            this.handleError
        );
    }

    /**
     * Get a list of DoseEvents.
     * @returns {Promise<Array<DoseEvent>>}.
     */
    public list(): Promise<Array<DoseEvent>> {
        return this.loadPage(
            new Date().getTime(),
            "next"
        );
    }

    /**
     * Loads a single page of events, which corresponds to a specific time.
     * @param startAt - time currently viewing.
     * @param dir - direction; either "next" or "prev".
     * @returns {Promise<Array<DoseEvent>>}.
     */
    public loadPage(
        startAt: number,
        dir: string
    ): Promise<Array<DoseEvent>> {
        return this.http.get(
            `${this.doseEventsUrl}?startAt=${startAt}&dir=${dir}`
        ).toPromise().then(
            (response) => response.json()
        ).catch(
            this.handleError
        );
    }

    /**
     * Gets all DoseEvents for the current week.
     * This is intended to be used to create local notifications.
     * @returns {Promise<Array<DoseEvent>>}
     */
    public getAllForWeek(): Promise<Array<DoseEvent>> {
        return this.http.get(
            `${this.doseEventsUrl}/week`
        ).toPromise().then(
            (response) => response.json()
        ).catch(
            this.handleError
        );
    }

    /**
     * Get a single DoseEvent by ID.
     * @param id {number} of DoseEvent.
     * @returns {Promise<DoseEvent>}.
     */
    public get(
        id: number
    ): Promise<DoseEvent> {
        return this.http.get(
            `${this.doseEventsUrl}/${id}`
        ).toPromise().then(
            (response) => response.json()
        ).catch(
            this.handleError
        );
    }

    /**
     * Handles any errors communicating with backend.
     * @param error
     * @returns {Promise<void>|Promise<T>}.
     */
    private handleError(error: any) {
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);
    }

}

