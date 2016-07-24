import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";
import {Component, OnInit} from "@angular/core";
import {DoseMedication} from "../../dose-medication/dose-medication";
import {DoseSeries} from "../../dose-series/dose-series";
import {NavController, Events} from "ionic-angular/index";
import {DoseSeriesService} from "../../dose-series-service/dose-series.service";
import * as moment from "moment";
import {DoseAmigosUserService} from "../../dose-amigos-user-service/dose-amigos-user.service";
import {LoadingStatus} from "../../loading-status/loading-status";
import {LoadingStatusService} from "../../loading-status-service/loading-status.service";

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
    public doseTime: string;

    constructor(
        private nav: NavController,
        private doseSeriesService: DoseSeriesService,
        private doseAmigosUserService: DoseAmigosUserService,
        private events: Events,
        private loadingStatusService: LoadingStatusService
    ) {

    }

    public ngOnInit(): any {
        this.doseSeries = new DoseSeries();
        this.doseSeries.med = new DoseMedication();

        this.doseAmigosUserService.getCurrent().then(
            (currentUser) => {
                this.doseSeries.med.user = currentUser;
            }
        );

        this.doseSeries.daysOfWeek = [];
        this.doseSeries.timesOfDay = [];

        return Promise.resolve(
            this.doseSeries
        );
    }

    public onSubmit(): any {

        const loadingStatus: LoadingStatus = this.loadingStatusService.start(this.nav);

        if (this.everyday) {
            this.doseSeries.daysOfWeek = [1, 2, 3, 4, 5, 6, 7];
        } else {
            this.doseSeries.daysOfWeek = [1];
        }

        this.doseSeries.timesOfDay.push(
            moment(this.doseTime, "h:mm").valueOf()
        );

        const savePromise = this.doseSeriesService.save(
            this.doseSeries
        ).then(
            (doseSeries: DoseSeries) => {
                this.events.publish(
                    "doseSeries:created",
                    doseSeries as DoseSeries
                );
            }
        );

        /* Wait on request to resolve, and loading mask to display, then stop loading status. */
        return Promise.all(
            [
                savePromise,
                loadingStatus.displayPromise
            ]
        ).then(
            () => {
                loadingStatus.loading.dismiss();
                this.nav.pop();
            }
        ).catch(
            () => {
                loadingStatus.loading.dismiss();
            }
        );
    }

    public cancel() {
        this.nav.pop();
    }

}