import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";
import {Component, OnInit} from "@angular/core";
import {DoseMedication} from "../../dose-medication/dose-medication";
import {DoseSeries} from "../../dose-series/dose-series";
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
    public doseSeries: DoseSeries;

    constructor(
        private nav: NavController
    ) {

    }

    public ngOnInit(): any {

        this.doseMedication = new DoseMedication();
        this.doseSeries = new DoseSeries();
        this.doseSeries.timesOfDay = new Array<Date>();

        return Promise.resolve(
            this.doseSeries
        );
    }

    public onSubmit(): DoseSeries {
        /* Will need to save via service. */

        this.doseSeries.med = this.doseMedication;

        this.nav.pop();
        return this.doseSeries;
    }

    public cancel() {
        this.nav.pop();
    }

    public newTime() {
        this.doseSeries.timesOfDay.push(new Date());
    }

}