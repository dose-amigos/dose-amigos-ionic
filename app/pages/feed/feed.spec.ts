import {it, describe, expect} from "@angular/core/testing";
import {FeedPage} from "./feed";
import {DoseEvent} from "../../dose-event/dose-event";
import {DOSE_EVENTS} from "../../dose-event-service/dose-event.mocks";
import {DoseEventService} from "../../dose-event-service/dose-event-service";
import {NavController} from "ionic-angular/index";

class MockDoseEventService {

    list(): Promise<Array<DoseEvent>> {
        return Promise.resolve(
            DOSE_EVENTS
        );
    }

}

class MockNavController {}

/**
 * Tests for FeedPage component.
 */
describe("FeedPage", () => {

    it("should get DoseEvents from the service", () => {

        const mockNavController: NavController = new MockNavController() as NavController;
        const mockDoseEventService: DoseEventService = new MockDoseEventService() as DoseEventService;

        const feedPage: FeedPage = new FeedPage(
            mockNavController,
            mockDoseEventService
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

        const mockNavController: NavController = new MockNavController() as NavController;
        const mockDoseEventService: DoseEventService = new MockDoseEventService() as DoseEventService;

        const feedPage: FeedPage = new FeedPage(
            mockNavController,
            mockDoseEventService
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
