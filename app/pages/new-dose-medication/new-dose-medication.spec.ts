import {it, describe, expect} from "@angular/core/testing";
import {NavController} from "ionic-angular/index";
import {NewDoseMedicationPage} from "./new-dose-medication";

class MockNavController {
    public pop() {

    }
}

/**
 * Tests for NewDoseMedicationPage component.
 */
describe("NewDoseMedicationPage", () => {

    it("should have title set", () => {

        const mockNavController: NavController = new MockNavController() as NavController;

        const newDoseMedicationPage: NewDoseMedicationPage = new NewDoseMedicationPage(
            mockNavController
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
