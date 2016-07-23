import {describe, expect} from "@angular/core/testing";
import {DoseEventService} from "./dose-event.service";
import {DOSE_EVENTS} from "./dose-event-mocks";
import {Observable} from "rxjs/Rx";
import {Response, RequestOptionsArgs} from "@angular/http";
import {AuthHttp} from "../angular2-jwt";

class MockAuthHttp {

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return Observable.of(null);
    }

}

/**
 * Tests for DoseEventService.
 */
describe("DoseEventService", () => {

    let doseEventService: DoseEventService;

    beforeEach(
        () => {
            doseEventService = new DoseEventService(
                new MockAuthHttp() as AuthHttp
            );
        }
    );

    describe("list", () => {

        /* Disabled for now. */
        xit("should return a promise of a DoseEvents array", () => {

            expect(
                doseEventService.list()
            ).toEqual(
                Promise.resolve(
                    DOSE_EVENTS
                ),
                "should return a promise of a DoseEvents array"
            );

        });

    });

    describe("get", () => {

        /* Disabled for now. */
        xit("should return a promise of a DoseEvent", () => {

            expect(
                doseEventService.get(2)
            ).toEqual(
                Promise.resolve(
                    DOSE_EVENTS[1]
                ),
                "should return a promise of a DoseEvent"
            );

        });

    });

});
