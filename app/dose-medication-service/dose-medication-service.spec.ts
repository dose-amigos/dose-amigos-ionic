import {it, describe, expect} from "@angular/core/testing";
import {DoseMedicationService} from "./dose-medication.service";
import {DOSE_MEDICATIONS} from "./dose-medication-mocks";
import {Observable} from "rxjs/Rx";
import {Response, RequestOptionsArgs} from "@angular/http";
import {AuthHttp} from "../angular2-jwt";

class MockAuthHttp {

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return Observable.of(null);
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return null;
    }

    put(url: string, body: string, options ?: RequestOptionsArgs): Observable<Response> {
        return null;
    }

    delete(url: string, options ?: RequestOptionsArgs): Observable<Response> {
        return null;
    }

}

/**
 * Tests for DoseMedicationService.
 */
describe("DoseMedicationService", () => {

    let doseMedicationService: DoseMedicationService;

    beforeEach(
        () => {
            doseMedicationService = new DoseMedicationService(
                new MockAuthHttp() as AuthHttp
            );
        }
    );

    describe("list", () => {

        /* Disabled for now. */
        xit("should return a promise of a DoseMedication array", () => {

            expect(
                doseMedicationService.list()
            ).toEqual(
                Promise.resolve(
                    DOSE_MEDICATIONS
                ),
                "should return a promise of a DoseMedication array"
            );

        });

    });

    describe("get", () => {

        /* Disabled for now. */
        xit("should return a promise of a DoseMedication", () => {

            expect(
                doseMedicationService.get(200)
            ).toEqual(
                Promise.resolve(
                    DOSE_MEDICATIONS[1]
                ),
                "should return a promise of a DoseMedication"
            );

        });

    });

});
