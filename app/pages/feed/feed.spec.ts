import {it, describe, expect} from "@angular/core/testing";
import {FeedPage} from "./feed";
import {FeedEvent} from "../../feed-event/feed-event";
import {FEED_EVENTS} from "../../feed-event-service/feed-event.mocks";
import {FeedEventService} from "../../feed-event-service/feed-event-service";
import {DoseAmigosUser} from "../../dose-amigos-user/dose-amigos-user";
import {DOSE_AMIGOS_USERS} from "../../dose-amigos-user-service/dose-amigos-user-mocks";
import {DoseAmigosUserService} from "../../dose-amigos-user-service/dose-amigos-user.service";

class MockFeedEventService {

    list(): Promise<Array<FeedEvent>> {
        return Promise.resolve(
            FEED_EVENTS
        );
    }

}

class MockDoseAmigosUserService {

    public getCurrent(): Promise<DoseAmigosUser> {
        return Promise.resolve(
            DOSE_AMIGOS_USERS[0]
        );
    }

}

/**
 * Tests for FeedPage component.
 */
describe("FeedPage", () => {

    it("should get FeedEvents from the service", () => {

        const mockFeedEventService: FeedEventService = new MockFeedEventService() as FeedEventService;
        const mockDoseAmigosUserService: DoseAmigosUserService = new MockDoseAmigosUserService() as DoseAmigosUserService;

        const feedPage: FeedPage = new FeedPage(
            mockFeedEventService,
            mockDoseAmigosUserService
        );

        return feedPage.ngOnInit().then(
            () => {
                expect(
                    feedPage.feedEvents
                ).toEqual(
                    FEED_EVENTS,
                    "should get FeedEvents from the service"
                );
            }
        );

    });

    it("should have title set", () => {

        const mockFeedEventService: FeedEventService = new MockFeedEventService() as FeedEventService;
        const mockDoseAmigosUserService: DoseAmigosUserService = new MockDoseAmigosUserService() as DoseAmigosUserService;

        const feedPage: FeedPage = new FeedPage(
            mockFeedEventService,
            mockDoseAmigosUserService
        );

        return feedPage.ngOnInit().then(
            () => {
                expect(
                    feedPage.title
                ).toEqual(
                    "News Feed",
                    "should have title set"
                );
            }
        );

    });

});
