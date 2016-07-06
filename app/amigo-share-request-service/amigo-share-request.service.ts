import {Injectable} from "@angular/core";
import {AmigoShareRequest} from "../amigo-share-request/amigo-share-request";
import {AMIGO_SHARE_REQUESTS} from "./amigo-share-request.mocks";

/**
 * Service for fetching and saving AmigoShareRequest instances.
 */
@Injectable()
export class AmigoShareRequestService {

    /**
     * Get a list of AmigoShareRequests.
     * @returns {Promise<Array<AmigoShareRequest>>}
     */
    public list(): Promise<Array<AmigoShareRequest>> {
        return Promise.resolve(
            AMIGO_SHARE_REQUESTS
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
        return Promise.resolve(
            AMIGO_SHARE_REQUESTS.filter(
                (amigoShareRequest) => amigoShareRequest.shareId === shareId
            )[0]
        );
    }

}