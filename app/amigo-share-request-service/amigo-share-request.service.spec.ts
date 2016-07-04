import {it, describe, expect, inject, beforeEachProviders} from "@angular/core/testing";
import {AmigoShareRequestService} from "./amigo-share-request.service";
import {AMIGO_SHARE_REQUESTS} from "./amigo-share-request.mocks";

/**
 * Tests for AmigoShareRequestService.
 */
describe("AmigoShareRequestService", () => {

    beforeEachProviders(() => [AmigoShareRequestService]);

    describe("list", () => {

        it("should return a promise of a AmigoShareRequest array", inject([AmigoShareRequestService], (amigoShareRequestService: AmigoShareRequestService) => {

            expect(
                amigoShareRequestService.list()
            ).toEqual(
                Promise.resolve(
                    AMIGO_SHARE_REQUESTS
                ),
                "should return a promise of a AmigoShareRequest array"
            );

        }));

    });

    describe("get", () => {

        it("should return a promise of a AmigoShareRequest", inject([AmigoShareRequestService], (amigoShareRequestService: AmigoShareRequestService) => {

            expect(
                amigoShareRequestService.get(5432)
            ).toEqual(
                Promise.resolve(
                    AMIGO_SHARE_REQUESTS[1]
                ),
                "should return a promise of a AmigoShareRequest"
            );

        }));

    });

});