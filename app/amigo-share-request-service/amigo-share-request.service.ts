import {Injectable} from "@angular/core";
import {AmigoShareRequest} from "../amigo-share-request/amigo-share-request";
import {BACKEND_URL} from "../backend-config/backend-config";
import {AuthHttp} from "../angular2-jwt";
import {Headers, RequestOptions} from "@angular/http";

/**
 * Service for fetching and saving AmigoShareRequest instances.
 */
@Injectable()
export class AmigoShareRequestService {

    private shareRequestsUrl: string = `${BACKEND_URL}/share-requests`;

    constructor(
        private http: AuthHttp
    ) {
    }

    /**
     * Get a list of AmigoShareRequests.
     * @returns {Promise<Array<AmigoShareRequest>>}
     */
    public list(): Promise<Array<AmigoShareRequest>> {
        return this.http.get(
            this.shareRequestsUrl
        ).toPromise().then(
            (response) => response.json()
        ).catch(
            this.handleError
        );
    }

    /**
     * Get a single AmigoShareRequest by ID.
     * @param shareId
     * @returns {Promise<AmigoShareRequest>}
     */
    public get(
        shareId: number
    ): Promise<AmigoShareRequest> {
        return this.http.get(
            `${this.shareRequestsUrl}/${shareId}`
        ).toPromise().then(
            (response) => response.json()
        ).catch(
            this.handleError
        );
    }

    private post(
        amigoShareRequest: AmigoShareRequest
    ): Promise<AmigoShareRequest> {

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

        return this.http.post(
            this.shareRequestsUrl,
            JSON.stringify(amigoShareRequest),
            options
        ).toPromise().then(
            res => res.json()
        ).catch(
            this.handleError
        );
    }

    private put(
        amigoShareRequest: AmigoShareRequest
    ): Promise<AmigoShareRequest> {

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
            `${this.shareRequestsUrl}/${amigoShareRequest.id}`,
            JSON.stringify(amigoShareRequest),
            options
        ).toPromise().then(
            res => res.json()
        ).catch(
            this.handleError
        );
    }

    public save(
        amigoShareRequest: AmigoShareRequest
    ): Promise<AmigoShareRequest> {

        if (amigoShareRequest.id) {
            return this.put(amigoShareRequest);
        }

        return this.post(amigoShareRequest);
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