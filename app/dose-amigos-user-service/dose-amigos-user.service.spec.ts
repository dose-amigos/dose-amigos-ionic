import {it, describe, expect, inject, beforeEachProviders} from "@angular/core/testing";
import {DoseAmigosUserService} from "./dose-amigos-user.service";
import {DOSE_AMIGOS_USERS} from "./dose-amigos-user-mocks";
import {AuthHttp} from "../angular2-jwt";
import {RequestOptionsArgs, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";

class MockAuthHttp {

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return Observable.of(null);
    }

}

/**
 * Tests for DoseAmigosUserService.
 */
describe("DoseAmigosUserService", () => {

    let doseAmigosUserService: DoseAmigosUserService;

    beforeEach(
        () => {
            doseAmigosUserService = new DoseAmigosUserService(
                new MockAuthHttp() as AuthHttp
            );
        }
    );

    describe("list", () => {

        /* Disabled for now. */
        xit("should return a promise of a DoseAmigosUser array", () => {

            expect(
                doseAmigosUserService.list()
            ).toEqual(
                Promise.resolve(
                    DOSE_AMIGOS_USERS
                ),
                "should return a promise of a DoseAmigosUser array"
            );

        });

    });

    describe("get", () => {

        /* Disabled for now. */
        xit("should return a promise of a DoseAmigosUser", () => {

            expect(
                doseAmigosUserService.get(200)
            ).toEqual(
                Promise.resolve(
                    DOSE_AMIGOS_USERS[1]
                ),
                "should return a promise of a DoseAmigosUser"
            );

        });

    });

});
