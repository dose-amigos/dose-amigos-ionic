import {it, describe, expect} from "@angular/core/testing";
import {MedListPage} from "./med-list";
import {DOSE_MEDICATIONS} from "../../dose-medication-service/dose-medication-mocks";
import {DoseMedication} from "../../dose-medication/dose-medication";
import {DoseMedicationService} from "../../dose-medication-service/dose-medication.service";
import {AuthService} from "../../auth-service/auth.service";


class MockDoseMedicationService {

    list(): Promise<Array<DoseMedication>> {
        return Promise.resolve(
            DOSE_MEDICATIONS
        );
    }

}

class MockAuthService {

}

/**
 * Tests for MedListPage component.
 */
describe("MedListPage", () => {

    it("should get DoseMedication from the service", () => {

        const mockDoseMedicationService: DoseMedicationService = new MockDoseMedicationService() as DoseMedicationService;
        const mockAuthService: AuthService = new MockAuthService() as AuthService;

        const medListPage: MedListPage = new MedListPage(
            mockDoseMedicationService,
            mockAuthService
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
        const mockAuthService: AuthService = new MockAuthService() as AuthService;

        const medListPage: MedListPage = new MedListPage(
            mockDoseMedicationService,
            mockAuthService
        );

        return medListPage.ngOnInit().then(
            () => {
                expect(
                    medListPage.title
                ).toEqual(
                    "My Medications",
                    "should have title set"
                );
            }
        );

    });

});
