import {Component, OnInit, Type} from "@angular/core";
import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";
import {DoseMedication} from "../../dose-medication/dose-medication";
// import {MedListCardComponent} from "../../med-list-card/med-list-card.component";
// import {DoseMedicationService} from "./dose-medication-service/dose-medication.service";

@Component(
    {
        templateUrl: "build/pages/med-list/med-list.html",
        directives: [
            DoseAmigosToolbar
        ]
    }
)
export class MedListPage {

    public title: string = "My Medications";
    public doseMedicationList: Array<DoseMedication> = [];
    public medListClickPage: Type;

    constructor(
        // private doseMedicationService: DoseMedicationService
    ) {

    }

}