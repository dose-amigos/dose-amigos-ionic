import {it, describe, expect} from "@angular/core/testing";
import {FeedPage} from "./feed";
import {FeedEvent} from "../../feed-event/feed-event";
import {FEED_EVENTS} from "../../feed-event-service/feed-event.mocks";
import {FeedEventService} from "../../feed-event-service/feed-event-service";
import {AuthUserService} from "../../auth-user-service/auth-user.service";
import {CURRENT_AUTH_USER} from "../../auth-user-service/auth-user.mocks";
import {AuthUser} from "../../auth-user/auth-user";

class MockFeedEventService {

    list(): Promise<Array<FeedEvent>> {
        return Promise.resolve(
            FEED_EVENTS
        );
    }

}

class MockAuthUserService {

    public get(): AuthUser {
        return CURRENT_AUTH_USER;
    }

}

/**
 * Tests for FeedPage component.
 */
describe("FeedPage", () => {

    it("should get FeedEvents from the service", () => {

        const mockFeedEventService: FeedEventService = new MockFeedEventService() as FeedEventService;
        const mockAuthUserService: AuthUserService = new MockAuthUserService() as AuthUserService;

        const feedPage: FeedPage = new FeedPage(
            mockFeedEventService,
            mockAuthUserService
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
        const mockAuthUserService: AuthUserService = new MockAuthUserService() as AuthUserService;

        const feedPage: FeedPage = new FeedPage(
            mockFeedEventService,
            mockAuthUserService
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
