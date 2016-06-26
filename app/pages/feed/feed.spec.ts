import {it, describe, expect} from "@angular/core/testing";
import {FeedPage} from "./feed";
import {DoseEvent} from "../../dose-event/dose-event";
import {DOSE_EVENTS} from "../../dose-event-service/dose-event.mocks";
import {DoseEventService} from "../../dose-event-service/dose-event-service";
import {AuthUserService} from "../../auth-user-service/auth-user.service";
import {CURRENT_AUTH_USER} from "../../auth-user-service/auth-user.mocks";
import {AuthUser} from "../../auth-user/auth-user";

class MockDoseEventService {

    list(): Promise<Array<DoseEvent>> {
        return Promise.resolve(
            DOSE_EVENTS
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

    it("should get DoseEvents from the service", () => {

        const mockDoseEventService: DoseEventService = new MockDoseEventService() as DoseEventService;
        const mockAuthUserService: AuthUserService = new MockAuthUserService() as AuthUserService;

        const feedPage: FeedPage = new FeedPage(
            mockDoseEventService,
            mockAuthUserService
        );

        return feedPage.ngOnInit().then(
            () => {
                expect(
                    feedPage.doseEvents
                ).toEqual(
                    DOSE_EVENTS,
                    "should get DoseEvents from the service"
                );
            }
        );

    });

    it("should have title set", () => {

        const mockDoseEventService: DoseEventService = new MockDoseEventService() as DoseEventService;
        const mockAuthUserService: AuthUserService = new MockAuthUserService() as AuthUserService;

        const feedPage: FeedPage = new FeedPage(
            mockDoseEventService,
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
