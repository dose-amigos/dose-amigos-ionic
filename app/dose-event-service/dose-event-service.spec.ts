import {it, describe, expect, inject, beforeEachProviders} from "@angular/core/testing";
import {DoseEventService} from "./dose-event.service";
import {DOSE_EVENTS} from "./dose-event-mocks";

/**
 * Tests for DoseEventService.
 */
describe("DoseEventService", () => {

    beforeEachProviders(() => [DoseEventService]);

    describe("list", () => {

        it("should return a promise of a DoseEvents array", inject([DoseEventService], (doseEventService: DoseEventService) => {

            expect(
                doseEventService.list()
            ).toEqual(
                Promise.resolve(
                    DOSE_EVENTS
                ),
                "should return a promise of a DoseEvents array"
            );

        }));

    });

    describe("get", () => {

        it("should return a promise of a DoseEvent", inject([DoseEventService], (doseEventService: DoseEventService) => {

            expect(
                doseEventService.get(2)
            ).toEqual(
                Promise.resolve(
                    DOSE_EVENTS[1]
                ),
                "should return a promise of a DoseEvent"
            );

        }));

    });

});
