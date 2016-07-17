import {FeedEvent} from "../feed-event/feed-event";
import {Injectable} from "@angular/core";
import {BACKEND_URL} from "../backend-config/backend-config";
import {AuthHttp} from "../angular2-jwt";

/**
 * Service for fetching and saving FeedEvent instances.
 */
@Injectable()
export class FeedEventService {

    private feedEventsUrl: string = `${BACKEND_URL}/feed-events`;

    constructor(
        private http: AuthHttp
    ) {
    }

    /**
     * Get a list of FeedEvents.
     * @returns {Promise<Array<FeedEvent>>}
     */
    public list(): Promise<Array<FeedEvent>> {
        return this.http.get(
            this.feedEventsUrl
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
