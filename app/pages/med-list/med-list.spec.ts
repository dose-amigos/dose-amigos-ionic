import {it, describe, expect} from "@angular/core/testing";
import {MedListPage} from "./med-list";
import {DOSE_MEDICATIONS} from "../../dose-medication-service/dose-medication-mocks";
import {DoseMedication} from "../../dose-medication/dose-medication";
import {DoseMedicationService} from "../../dose-medication-service/dose-medication.service";
import {Events} from "ionic-angular/index";


class MockDoseMedicationService {

    list(): Promise<Array<DoseMedication>> {
        return Promise.resolve(
            DOSE_MEDICATIONS
        );
    }

}

class MockEvents {

    subscribe(topic: string, ...handlers: Function[]): void {

    }

}

/**
 * Tests for MedListPage component.
 */
describe("MedListPage", () => {

    it("should get DoseMedication from the service", () => {

        const mockDoseMedicationService: DoseMedicationService = new MockDoseMedicationService() as DoseMedicationService;

        const mockEvents: Events = new MockEvents() as Events;

        const medListPage: MedListPage = new MedListPage(
            mockDoseMedicationService,
            mockEvents
        );

        return medListPage.ngOnInit().then(
            () => {
                expect(
                    medListPage.doseMedications
                ).toEqual(
                    DOSE_MEDICATIONS,
                    "should get DoseMedication from the service"
                );
            }
        );

    });

    it("should have title set", () => {

        const mockDoseMedicationService: DoseMedicationService = new MockDoseMedicationService() as DoseMedicationService;

        const mockEvents: Events = new MockEvents() as Events;

        const medListPage: MedListPage = new MedListPage(
            mockDoseMedicationService,
            mockEvents
        );

        return medListPage.ngOnInit().then(
            () => {
                expect(
                    medListPage.title
                ).toEqual(
                    "Medications",
                    "should have title set"
                );
            }
        );

    });

});
