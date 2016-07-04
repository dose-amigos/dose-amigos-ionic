import {FeedEvent} from "../feed-event/feed-event";
import {Injectable} from "@angular/core";
import {FEED_EVENTS} from "./feed-event.mocks";

/**
 * Service for fetching and saving FeedEvent instances.
 */
@Injectable()
export class FeedEventService {

    /**
     * Get a list of FeedEvents.
     * @returns {Promise<Array<FeedEvent>>}
     */
    public list(): Promise<Array<FeedEvent>> {
        return Promise.resolve(
            FEED_EVENTS
        );
    }

    /**
     * Get a single FeedEvent by ID.
     * @param id {number} of FeedEvent.
     * @returns {Promise<FeedEvent>}
     */
    public get(
        id: number
    ): Promise<FeedEvent> {
        return Promise.resolve(
            FEED_EVENTS.filter(
                (feedEvent) => feedEvent.id === id
            )[0]
        );
    }

}
