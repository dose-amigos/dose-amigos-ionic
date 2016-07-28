import {Component, OnInit} from "@angular/core";
import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";
import {DoseSeriesSliderComponent} from "../../dose-series-slider/dose-series-slider.component";
import {DoseSeries} from "../../dose-series/dose-series";
import {DoseSeriesService} from "../../dose-series-service/dose-series.service";

import {MedListCreateComponent} from "../../med-list-create-component/med-list-create.component";
import {Events, NavController} from "ionic-angular/index";
import {LoadingStatusService} from "../../loading-status-service/loading-status.service";
import {LoadingStatus} from "../../loading-status/loading-status";

@Component(
    {
        templateUrl: "build/pages/med-list/med-list.html",
        directives: [
            DoseAmigosToolbar,
            DoseSeriesSliderComponent,
            MedListCreateComponent
        ]
    }
)
export class MedListPage implements OnInit {

    public title: string = "Medications";
    public listOfDoseSeries: Array<DoseSeries> = [];

    constructor(
        private doseSeriesService: DoseSeriesService,
        private events: Events,
        private nav: NavController,
        private loadingStatusService: LoadingStatusService
    ) {

        /* Refresh page data when a new doseSeries is created. */
        events.subscribe(
            "doseSeries:created",
            () => {
                this.loadMedicationList();
            }
        );

        events.subscribe(
            "doseSeries:deleted",
            () => {
                this.loadMedicationList();
            }

        );

    }

    public loadMedicationList = (): any => {

        const loadingStatus: LoadingStatus = this.loadingStatusService.start(this.nav);

        const listPromise = this.doseSeriesService.list().then(
            (listOfDoseSeries) => {
                this.listOfDoseSeries = listOfDoseSeries;
            }
        );

        /* Wait on request to resolve, and loading mask to display, then stop loading status. */
        return Promise.all(
            [
                listPromise,
                loadingStatus.displayPromise
            ]
        ).then(
            () => {
                loadingStatus.loading.dismiss();
            }
        ).catch(
            () => {
                loadingStatus.loading.dismiss();
            }
        );
    };

    public ngOnInit(): any {
        return this.loadMedicationList();
    }

}