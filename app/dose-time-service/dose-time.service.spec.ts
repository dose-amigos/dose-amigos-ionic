import {it, describe, expect, inject, beforeEachProviders} from "@angular/core/testing";
import {DoseTimeService} from "./dose-time.service";

/**
 * Tests for DoseTimeService.
 */
describe("DoseTimeService", () => {

    beforeEachProviders(() => [DoseTimeService]);

    describe("list", () => {

        it("should return true if doseTime in past", inject([DoseTimeService], (doseTimeService: DoseTimeService) => {

            /* Tue May 13 2014 12:53:20 GMT-0400 (EDT) */
            const doseTime: Date = new Date(1400000000000);

            expect(
                doseTimeService.isOverdue(
                    doseTime
                )
            ).toEqual(
                true,
                "should return true if doseTime in past"
            );

        }));

        it("should return false if doseTime in future", inject([DoseTimeService], (doseTimeService: DoseTimeService) => {

            const doseTime: Date = new Date();

            /* Set date to tomorrow. */
            doseTime.setDate(
                new Date().getDate() + 1
            );

            expect(
                doseTimeService.isOverdue(
                    doseTime
                )
            ).toEqual(
                false,
                "should return false if doseTime in future"
            );

        }));

    });

});
