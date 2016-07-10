import {it, describe, expect} from "@angular/core/testing";
import {MedListPage} from "./med-list";
import {DoseMedication} from "../../dose-medication/dose-medication";
import {DOSE_MEDICATIONS} from "./dose-medication-mocks";
import {DoseMedicationService} from "./dose-medication-service/dose-medication.service";

class MockDoseAmigosUserService {

    list(): Promise<Array<DoseMedication>> {
        return Promise.resolve(
            DOSE_AMIGOS_USERS
        );
    }

}

/**
 * Tests for AmigoPage component.
 */
describe("AmigoPage", () => {

    it("should get DoseAmigosUsers from the service", () => {

        const mockDoseAmigosUserService: DoseAmigosUserService = new MockDoseAmigosUserService() as DoseAmigosUserService;

        const amigosPage: AmigosPage = new AmigosPage(
            mockDoseAmigosUserService
        );

        return amigosPage.ngOnInit().then(
            () => {
                expect(
                    amigosPage.doseAmigosUsers
                ).toEqual(
                    DOSE_AMIGOS_USERS,
                    "should get DoseAmigosUsers from the service"
                );
            }
        );

    });

    it("should have title set", () => {

        const mockDoseAmigosUserService: DoseAmigosUserService = new MockDoseAmigosUserService() as DoseAmigosUserService;

        const amigosPage: AmigosPage = new AmigosPage(
            mockDoseAmigosUserService
        );

        return amigosPage.ngOnInit().then(
            () => {
                expect(
                    amigosPage.title
                ).toEqual(
                    "Amigos",
                    "should have title set"
                );
            }
        );

    });

});