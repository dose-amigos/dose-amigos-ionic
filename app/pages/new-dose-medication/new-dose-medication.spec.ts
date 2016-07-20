import {it, describe, expect} from "@angular/core/testing";
import {NavController} from "ionic-angular/index";
import {NewDoseMedicationPage} from "./new-dose-medication";
import {DoseMedicationService} from "../../dose-medication-service/dose-medication.service";

class MockNavController {
    public pop() {

    }
}

class MockDoseMedicationService {

}

/**
 * Tests for NewDoseMedicationPage component.
 */
describe("NewDoseMedicationPage", () => {

    it("should have title set", () => {

        const mockNavController: NavController = new MockNavController() as NavController;

        const doseMedicationService: DoseMedicationService = new MockDoseMedicationService() as DoseMedicationService;

        const newDoseMedicationPage: NewDoseMedicationPage = new NewDoseMedicationPage(
            mockNavController,
            doseMedicationService
        );

        return newDoseMedicationPage.ngOnInit().then(
            () => {
                expect(
                    newDoseMedicationPage.title
                ).toEqual(
                    "New Dose Medication",
                    "should have title set"
                );
            }
        );

    });

});
