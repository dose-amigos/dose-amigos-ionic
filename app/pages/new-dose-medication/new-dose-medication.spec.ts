import {it, describe, expect} from "@angular/core/testing";
import {NavController} from "ionic-angular/index";
import {NewDoseMedicationPage} from "./new-dose-medication";
import {DoseSeriesService} from "../../dose-series-service/dose-series.service";
import {DoseSeries} from "../../dose-series/dose-series";
import {DoseAmigosUserService} from "../../dose-amigos-user-service/dose-amigos-user.service";
import {DoseAmigosUser} from "../../dose-amigos-user/dose-amigos-user";
import {DOSE_AMIGOS_USERS} from "../../dose-amigos-user-service/dose-amigos-user-mocks";

class MockNavController {
    public pop() {

    }
}

class MockDoseSeriesService {

    public save(doseSeries: DoseSeries): Promise<DoseSeries> {
        return Promise.resolve(
            doseSeries
        );
    }

}

class MockDoseAmigosUserService {

    public getCurrent(): Promise<DoseAmigosUser> {
        return Promise.resolve(
            DOSE_AMIGOS_USERS[0]
        );
    }

}

/**
 * Tests for NewDoseMedicationPage component.
 */
describe("NewDoseMedicationPage", () => {

    it("should have title set", () => {

        const mockNavController: NavController = new MockNavController() as NavController;

        const mockDoseSeriesService: DoseSeriesService = new MockDoseSeriesService() as DoseSeriesService;

        const mockDoseAmigosUserService: DoseAmigosUserService = new MockDoseAmigosUserService() as DoseAmigosUserService;

        const newDoseMedicationPage: NewDoseMedicationPage = new NewDoseMedicationPage(
            mockNavController,
            mockDoseSeriesService,
            mockDoseAmigosUserService
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
