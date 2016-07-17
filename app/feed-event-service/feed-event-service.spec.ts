import {it, describe, expect, inject, beforeEachProviders} from "@angular/core/testing";
import {FeedEventService} from "./feed-event-service";
import {FEED_EVENTS} from "./feed-event.mocks";
import {RequestOptionsArgs, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {AuthHttp} from "../angular2-jwt";

class MockAuthHttp {

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return Observable.of(null);
    }

}

/**
 * Tests for FeedEventService.
 */
describe("FeedEventService", () => {

    let feedEventService: FeedEventService;

    beforeEach(
        () => {
            feedEventService = new FeedEventService(
                new MockAuthHttp() as AuthHttp
            );
        }
    );

    describe("list", () => {

        /* Disabled for now. */
        xit("should return a promise of a FeedEvents array", () => {

            expect(
                feedEventService.list()
            ).toEqual(
                Promise.resolve(
                    FEED_EVENTS
                ),
                "should return a promise of a FeedEvents array"
            );

        });

    });

});
