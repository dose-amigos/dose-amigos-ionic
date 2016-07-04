import {it, describe, expect, inject, beforeEachProviders} from "@angular/core/testing";
import {FeedEventService} from "./feed-event-service";
import {FEED_EVENTS} from "./feed-event.mocks";

/**
 * Tests for FeedEventService.
 */
describe("FeedEventService", () => {

    beforeEachProviders(() => [FeedEventService]);

    describe("list", () => {

        it("should return a promise of a FeedEvents array", inject([FeedEventService], (feedEventService: FeedEventService) => {

            expect(
                feedEventService.list()
            ).toEqual(
                Promise.resolve(
                    FEED_EVENTS
                ),
                "should return a promise of a FeedEvents array"
            );

        }));

    });

    describe("get", () => {

        it("should return a promise of a FeedEvent", inject([FeedEventService], (feedEventService: FeedEventService) => {

            expect(
                feedEventService.get(2)
            ).toEqual(
                Promise.resolve(
                    FEED_EVENTS[1]
                ),
                "should return a promise of a FeedEvent"
            );

        }));

    });

});
