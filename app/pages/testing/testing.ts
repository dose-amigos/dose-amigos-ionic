import {Component, OnInit} from "@angular/core";
import {DoseMedicationService} from "../../dose-medication-service/dose-medication.service";
import {DoseMedication} from "../../dose-medication/dose-medication";

@Component(
    {
        templateUrl: "build/pages/testing/testing.html",
    }
)
export class TestingPage implements OnInit {

    public doseMedications: Array<DoseMedication>;

    constructor(
        private doseMedicationService: DoseMedicationService
    ) {

    }

    public ngOnInit(): any {

        return this.doseMedicationService.list().then(
            doseMedications => {
                this.doseMedications = doseMedications;
            }
        );

    }

}
