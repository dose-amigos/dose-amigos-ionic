import {Component, OnInit, Type} from "@angular/core";
import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";
import {MedListComponenet} from "../../med-list-event/med-list-event.component";
import {DoseMedication} from "../../dose-medication/dose-medication";
import {DoseMedicationService} from "../../dose-medication-service/dose-medication.service";
import {MedListCreateComponent} from "../../med-list-create-component/med-list-create.component";


@Component(
    {
        templateUrl: "build/pages/med-list/med-list.html",
        directives: [
            DoseAmigosToolbar,
            MedListComponenet,
            MedListCreateComponent
        ]
    }
)
export class MedListPage implements OnInit {

    public title: string = "Medications";
    public doseMedications: Array<DoseMedication> = [];

    constructor(
        private doseMedicationService: DoseMedicationService
    ) {}

    public ngOnInit(): any {

        return this.doseMedicationService.list().then(
            doseMedications => {
                this.doseMedications = doseMedications;
            }
        );

    }

}