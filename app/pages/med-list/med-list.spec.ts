import {it, describe, expect} from "@angular/core/testing";
import {MedListPage} from "./med-list";
import {DOSE_SERIES} from "../../dose-series-service/dose-series-mocks";
import {DoseSeries} from "../../dose-series/dose-series";
import {DoseSeriesService} from "../../dose-series-service/dose-series.service";
import {Events, NavController, Loading} from "ionic-angular/index";
import {LoadingStatus} from "../../loading-status/loading-status";
import {LoadingStatusService} from "../../loading-status-service/loading-status.service";


class MockDoseSeriesService {

    list(): Promise<Array<DoseSeries>> {
        return Promise.resolve(
            DOSE_SERIES
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

    it("should get DoseSeries from the service", () => {

        const mockDoseSeriesService: DoseSeriesService = new MockDoseSeriesService() as DoseSeriesService;
        const mockEvents: Events = new MockEvents() as Events;
        const mockNav: NavController = new MockNavController() as NavController;
        const mockLoadingStatusService: LoadingStatusService = new MockLoadingStatusService() as LoadingStatusService;

        const medListPage: MedListPage = new MedListPage(
            mockDoseSeriesService,
            mockEvents,
            mockNav,
            mockLoadingStatusService
        );

        return medListPage.ngOnInit().then(
            () => {
                expect(
                    medListPage.listOfDoseSeries
                ).toEqual(
                    DOSE_SERIES,
                    "should get DoseSeries from the service"
                );
            }
        );

    });

    it("should have title set", () => {

        const mockDoseSeriesService: DoseSeriesService = new MockDoseSeriesService() as DoseSeriesService;

        const mockEvents: Events = new MockEvents() as Events;

        const mockNav: NavController = new MockNavController() as NavController;

        const mockLoadingStatusService: LoadingStatusService = new MockLoadingStatusService() as LoadingStatusService;

        const medListPage: MedListPage = new MedListPage(
            mockDoseSeriesService,
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
