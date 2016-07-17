import {it, describe, expect, inject, beforeEachProviders} from "@angular/core/testing";
import {AmigoShareRequestService} from "./amigo-share-request.service";
import {AMIGO_SHARE_REQUESTS} from "./amigo-share-request.mocks";
import {AuthHttp} from "../angular2-jwt";

class MockAuthHttp {}

/**
 * Tests for AmigoShareRequestService.
 */
describe("AmigoShareRequestService", () => {

    let amigoShareRequestService: AmigoShareRequestService;

    beforeEach(
        () => {
            amigoShareRequestService = new AmigoShareRequestService(
                new MockAuthHttp() as AuthHttp
            );
        }
    );

    describe("list", () => {

        /* Disabled for now. */
        xit("should return a promise of a AmigoShareRequest array", () => {

            expect(
                amigoShareRequestService.list()
            ).toEqual(
                Promise.resolve(
                    AMIGO_SHARE_REQUESTS
                ),
                "should return a promise of a AmigoShareRequest array"
            );

        });

    });

    describe("get", () => {

        /* Disabled for now. */
        xit("should return a promise of a AmigoShareRequest", () => {

            expect(
                amigoShareRequestService.get(5432)
            ).toEqual(
                Promise.resolve(
                    AMIGO_SHARE_REQUESTS[1]
                ),
                "should return a promise of a AmigoShareRequest"
            );

        });

    });

});