import {it, describe, expect} from "@angular/core/testing";
import {DosePage} from "./dose";
import {DOSE_EVENTS} from "../../dose-event-service/dose-event-mocks";
import {DoseEvent} from "../../dose-event/dose-event";
import {DoseEventService} from "../../dose-event-service/dose-event.service";
import {AuthService} from "../../auth-service/auth.service";

class MockDoseEventService {

    list(): Promise<Array<DoseEvent>> {
        return Promise.resolve(
            DOSE_EVENTS
        );
    }

}

class MockAuthService {

}

/**
 * Tests for DosePage component.
 */
describe("DosePage", () => {

    it("should get DoseEvents from the service", () => {

        const mockDoseEventService: DoseEventService = new MockDoseEventService() as DoseEventService;
        const mockAuthService: AuthService = new MockAuthService() as AuthService;

        const dosePage: DosePage = new DosePage(
            mockDoseEventService,
            mockAuthService
        );

        return dosePage.ngOnInit().then(
            () => {
                expect(
                    dosePage.doseEvents
                ).toEqual(
                    DOSE_EVENTS,
                    "should get DoseEvents from the service"
                );
            }
        );

    });

    it("should have title set", () => {

        const mockDoseEventService: DoseEventService = new MockDoseEventService() as DoseEventService;
        const mockAuthService: AuthService = new MockAuthService() as AuthService;

        const dosePage: DosePage = new DosePage(
            mockDoseEventService,
            mockAuthService
        );

        return dosePage.ngOnInit().then(
            () => {
                expect(
                    dosePage.title
                ).toEqual(
                    "Dose",
                    "should have title set"
                );
            }
        );

    });

});
