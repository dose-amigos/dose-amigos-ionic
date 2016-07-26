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
import {DayOfWeek} from "../../day-of-week/day-of-week";
import {DAYS_OF_WEEK} from "../../day-of-week/days-of-week";

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
    public doseTime: string;
    public daysOfWeekOptions: Array<DayOfWeek>;

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

        this.daysOfWeekOptions = DAYS_OF_WEEK;

        this.doseSeries.daysOfWeek = [1, 2, 3, 4, 5, 6, 7];
        this.doseSeries.timesOfDay = [];

        return Promise.resolve(
            this.doseSeries
        );
    }

    public onSubmit(): any {

        const loadingStatus: LoadingStatus = this.loadingStatusService.start(this.nav);

        if (!this.doseSeries.daysOfWeek.length) {
            /* Default to every day if blank. */
            this.doseSeries.daysOfWeek = [1, 2, 3, 4, 5, 6, 7];
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