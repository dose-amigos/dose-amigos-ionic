import {it, describe, expect} from "@angular/core/testing";
import {DosePage} from "./dose";
import {DOSE_EVENTS} from "../../dose-event-service/dose-event-mocks";
import {DoseEvent} from "../../dose-event/dose-event";
import {DoseEventService} from "../../dose-event-service/dose-event.service";
import {AuthService} from "../../auth-service/auth.service";
import {LoadingStatus} from "../../loading-status/loading-status";
import {NavController, Loading} from "ionic-angular/index";
import {LoadingStatusService} from "../../loading-status-service/loading-status.service";

class MockDoseEventService {

    list(): Promise<Array<DoseEvent>> {
        return Promise.resolve(
            DOSE_EVENTS
        );
    }

}

class MockAuthService {

}

class MockNavController {}

class MockLoading {

    public dismiss() {

    }

}

class MockLoadingStatusService {

    public start(nav: NavController): LoadingStatus {
        const loadingStatus: LoadingStatus = new LoadingStatus();

        loadingStatus.displayPromise = Promise.resolve();
        loadingStatus.loading = new MockLoading() as Loading;

        return loadingStatus;
    }

}

/**
 * Tests for DosePage component.
 */
describe("DosePage", () => {

    it("should get DoseEvents from the service", () => {

        const mockDoseEventService: DoseEventService = new MockDoseEventService() as DoseEventService;
        const mockAuthService: AuthService = new MockAuthService() as AuthService;

        const mockNav: NavController = new MockNavController() as NavController;

        const mockLoadingStatusService: LoadingStatusService = new MockLoadingStatusService() as LoadingStatusService;

        const dosePage: DosePage = new DosePage(
            mockDoseEventService,
            mockAuthService,
            mockNav,
            mockLoadingStatusService
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

        const mockNav: NavController = new MockNavController() as NavController;

        const mockLoadingStatusService: LoadingStatusService = new MockLoadingStatusService() as LoadingStatusService;

        const dosePage: DosePage = new DosePage(
            mockDoseEventService,
            mockAuthService,
            mockNav,
            mockLoadingStatusService
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
