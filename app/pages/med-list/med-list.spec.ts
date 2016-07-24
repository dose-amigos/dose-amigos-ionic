import {it, describe, expect} from "@angular/core/testing";
import {MedListPage} from "./med-list";
import {DOSE_MEDICATIONS} from "../../dose-medication-service/dose-medication-mocks";
import {DoseMedication} from "../../dose-medication/dose-medication";
import {DoseMedicationService} from "../../dose-medication-service/dose-medication.service";
import {Events, NavController, Loading} from "ionic-angular/index";
import {LoadingStatus} from "../../loading-status/loading-status";
import {LoadingStatusService} from "../../loading-status-service/loading-status.service";


class MockDoseMedicationService {

    list(): Promise<Array<DoseMedication>> {
        return Promise.resolve(
            DOSE_MEDICATIONS
        );
    }

}

class MockEvents {

    subscribe(topic: string, ...handlers: Function[]): void {

    }

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
 * Tests for MedListPage component.
 */
describe("MedListPage", () => {

    it("should get DoseMedication from the service", () => {

        const mockDoseMedicationService: DoseMedicationService = new MockDoseMedicationService() as DoseMedicationService;

        const mockEvents: Events = new MockEvents() as Events;

        const mockNav: NavController = new MockNavController() as NavController;

        const mockLoadingStatusService: LoadingStatusService = new MockLoadingStatusService() as LoadingStatusService;

        const medListPage: MedListPage = new MedListPage(
            mockDoseMedicationService,
            mockEvents,
            mockNav,
            mockLoadingStatusService
        );

        return medListPage.ngOnInit().then(
            () => {
                expect(
                    medListPage.doseMedications
                ).toEqual(
                    DOSE_MEDICATIONS,
                    "should get DoseMedication from the service"
                );
            }
        );

    });

    it("should have title set", () => {

        const mockDoseMedicationService: DoseMedicationService = new MockDoseMedicationService() as DoseMedicationService;

        const mockEvents: Events = new MockEvents() as Events;

        const mockNav: NavController = new MockNavController() as NavController;

        const mockLoadingStatusService: LoadingStatusService = new MockLoadingStatusService() as LoadingStatusService;

        const medListPage: MedListPage = new MedListPage(
            mockDoseMedicationService,
            mockEvents,
            mockNav,
            mockLoadingStatusService
        );

        return medListPage.ngOnInit().then(
            () => {
                expect(
                    medListPage.title
                ).toEqual(
                    "Medications",
                    "should have title set"
                );
            }
        );

    });

});
