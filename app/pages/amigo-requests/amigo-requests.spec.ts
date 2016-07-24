import {it, describe, expect} from "@angular/core/testing";
import {AmigoRequestsPage} from "./amigo-requests";
import {AmigoShareRequest} from "../../amigo-share-request/amigo-share-request";
import {AMIGO_SHARE_REQUESTS} from "../../amigo-share-request-service/amigo-share-request.mocks";
import {AmigoShareRequestService} from "../../amigo-share-request-service/amigo-share-request.service";
import {Events, NavController, Loading} from "ionic-angular/index";
import {LoadingStatus} from "../../loading-status/loading-status";
import {LoadingStatusService} from "../../loading-status-service/loading-status.service";

class MockAmigoShareRequestService {

    list(): Promise<Array<AmigoShareRequest>> {
        return Promise.resolve(
            AMIGO_SHARE_REQUESTS
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
 * Tests for AmigoPage component.
 */
describe("AmigoPage", () => {

    it("should have title set", () => {

        const mockAmigoShareRequestService: AmigoShareRequestService = new MockAmigoShareRequestService() as AmigoShareRequestService;

        const mockEvents: Events = new MockEvents() as Events;

        const mockNav: NavController = new MockNavController() as NavController;

        const mockLoadingStatusService: LoadingStatusService = new MockLoadingStatusService() as LoadingStatusService;

        const requestPage: AmigoRequestsPage = new AmigoRequestsPage(
            mockAmigoShareRequestService,
            mockEvents,
            mockNav,
            mockLoadingStatusService
        );

        return requestPage.ngOnInit().then(
            () => {
                expect(
                    requestPage.title
                ).toEqual(
                    "Amigo Requests",
                    "should have title set"
                );
            }
        );

    });

});