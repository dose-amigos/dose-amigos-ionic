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
    public doseSeries: DoseSeries;
    public everyday: boolean;
    public doseTime: Date;

    constructor(
        private nav: NavController
    ) {

    }

    public ngOnInit(): any {
        this.doseSeries = new DoseSeries();
        this.doseSeries.med = new DoseMedication();

        this.doseSeries.daysOfWeek = new Array<number>();
        this.doseSeries.timesOfDay = new Array<Date>();

        return Promise.resolve(
            this.doseSeries
        );
    }

    public onSubmit(): DoseSeries {
        /* Will need to save via service. */
        if (this.everyday) {
            this.doseSeries.daysOfWeek = [1, 2, 3, 4, 5, 6, 7];
        } else {
            this.doseSeries.daysOfWeek = [1];
        }

        this.doseSeries.timesOfDay.push(this.doseTime);

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