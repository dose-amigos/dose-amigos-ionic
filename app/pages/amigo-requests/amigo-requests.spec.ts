import {it, describe, expect} from "@angular/core/testing";
import {AmigoRequestsPage} from "./amigo-requests";
import {AmigoShareRequest} from "../../amigo-share-request/amigo-share-request";
import {AMIGO_SHARE_REQUESTS} from "../../amigo-share-request-service/amigo-share-request.mocks";
import {AmigoShareRequestService} from "../../amigo-share-request-service/amigo-share-request.service";

class MockAmigoShareRequestService {

    list(): Promise<Array<AmigoShareRequest>> {
        return Promise.resolve(
            AMIGO_SHARE_REQUESTS
        );
    }

}

/**
 * Tests for AmigoPage component.
 */
describe("AmigoPage", () => {

    it("should have title set", () => {

        const mockAmigoShareRequestService: AmigoShareRequestService = new MockAmigoShareRequestService() as AmigoShareRequestService;

        const requestPage: AmigoRequestsPage = new AmigoRequestsPage(
            mockAmigoShareRequestService
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