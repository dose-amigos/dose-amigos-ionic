import {it, describe, expect, inject, beforeEachProviders} from "@angular/core/testing";
import {DoseAmigosUserService} from "./dose-amigos-user.service";
import {DOSE_AMIGOS_USERS} from "./dose-amigos-user-mocks";

/**
 * Tests for DoseAmigosUserService.
 */
describe("DoseAmigosUserService", () => {

    beforeEachProviders(() => [DoseAmigosUserService]);

    describe("list", () => {

        it("should return a promise of a DoseAmigosUser array", inject([DoseAmigosUserService], (doseAmigosUserService: DoseAmigosUserService) => {

            expect(
                doseAmigosUserService.list()
            ).toEqual(
                Promise.resolve(
                    DOSE_AMIGOS_USERS
                ),
                "should return a promise of a DoseAmigosUser array"
            );

        }));

    });

    describe("get", () => {

        it("should return a promise of a DoseAmigosUser", inject([DoseAmigosUserService], (doseAmigosUserService: DoseAmigosUserService) => {

            expect(
                doseAmigosUserService.get(200)
            ).toEqual(
                Promise.resolve(
                    DOSE_AMIGOS_USERS[1]
                ),
                "should return a promise of a DoseAmigosUser"
            );

        }));

    });

});
