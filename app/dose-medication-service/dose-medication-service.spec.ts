import {it, describe, expect, inject, beforeEachProviders} from "@angular/core/testing";
import {DoseMedicationService} from "./dose-medication.service";
import {DOSE_MEDICATIONS} from "./dose-medication-mocks";

/**
 * Tests for DoseMedicationService.
 */
describe("DoseMedicationService", () => {

    beforeEachProviders(() => [DoseMedicationService]);

    describe("list", () => {

        it("should return a promise of a DoseMedication array", inject([DoseMedicationService], (doseMedicationService: DoseMedicationService) => {

            expect(
                doseMedicationService.list()
            ).toEqual(
                Promise.resolve(
                    DOSE_MEDICATIONS
                ),
                "should return a promise of a DoseMedication array"
            );

        }));

    });

    describe("get", () => {

        it("should return a promise of a DoseMedication", inject([DoseMedicationService], (doseMedicationService: DoseMedicationService) => {

            expect(
                doseMedicationService.get(200)
            ).toEqual(
                Promise.resolve(
                    DOSE_MEDICATIONS[1]
                ),
                "should return a promise of a DoseMedication"
            );

        }));

    });

});
