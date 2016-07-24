import {it, describe, expect} from "@angular/core/testing";
import {NavController, Events, Loading} from "ionic-angular/index";
import {NewAmigoRequestPage} from "./new-amigo-request";
import {AmigoShareRequestService} from "../../amigo-share-request-service/amigo-share-request.service";
import {LoadingStatus} from "../../loading-status/loading-status";
import {LoadingStatusService} from "../../loading-status-service/loading-status.service";

class MockNavController {
    public pop() {

    }
}

class MockAmigoShareRequestService {

}

class MockEvents {

    publish(topic: string, ...args: any[]): any[] {
        return [];
    }

}

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
 * Tests for NewAmigoRequestPage component.
 */
describe("NewAmigoRequestPage", () => {

    it("should have title set", () => {

        const mockNavController: NavController = new MockNavController() as NavController;

        const amigoShareRequestService: AmigoShareRequestService = new MockAmigoShareRequestService() as AmigoShareRequestService;

        const mockEvents: Events = new MockEvents() as Events;

        const mockLoadingStatusService: LoadingStatusService = new MockLoadingStatusService() as LoadingStatusService;

        const newAmigoRequestPage: NewAmigoRequestPage = new NewAmigoRequestPage(
            mockNavController,
            amigoShareRequestService,
            mockEvents,
            mockLoadingStatusService
        );

        return newAmigoRequestPage.ngOnInit().then(
            () => {
                expect(
                    newAmigoRequestPage.title
                ).toEqual(
                    "New Amigo Request",
                    "should have title set"
                );
            }
        );

    });

});
