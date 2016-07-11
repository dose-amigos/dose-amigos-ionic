import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";
import {Component, OnInit} from "@angular/core";
import {DoseMedication} from "../../dose-medication/dose-medication";
import {NavController} from "ionic-angular/index";

@Component(
    {
        templateUrl: "build/pages/new-dose-medication/new-dose-medication.html",
        directives: [
            DoseAmigosToolbar
        ]
    }
)
export class NewDoseMedicationPage implements OnInit {

    public title: string = "New Dose Medication";

    public doseMedication: DoseMedication;

    constructor(
        private nav: NavController
    ) {

    }

    public ngOnInit(): any {

        this.doseMedication = new DoseMedication();

        return Promise.resolve(
            this.doseMedication
        );
    }

    public onSubmit(): DoseMedication {
        /* Will need to save via service. */
        this.nav.pop();
        return this.doseMedication;
    }

    public cancel() {
        this.nav.pop();
    }

}