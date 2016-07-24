import {Component, OnInit} from "@angular/core";
import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";
import {DoseEventSliderComponent} from "../../dose-event-slider/dose-event-slider.component";
import {DoseEventService} from "../../dose-event-service/dose-event.service";
import {DoseEvent} from "../../dose-event/dose-event";
import {LogonPanelComponent} from "../../logon-panel-component/logon-panel.component";
import {AuthService} from "../../auth-service/auth.service";
import {DoseEventFabComponent} from "../../dose-event-fab/dose-event-fab.component";
import {LoadingStatusService} from "../../loading-status-service/loading-status.service";
import {NavController} from "ionic-angular/index";
import {LoadingStatus} from "../../loading-status/loading-status";

@Component(
    {
        templateUrl: "build/pages/dose/dose.html",
        directives: [
            DoseAmigosToolbar,
            DoseEventSliderComponent,
            LogonPanelComponent,
            DoseEventFabComponent
        ]
    }
)
export class DosePage implements OnInit {

    public title: string = "Dose";
    public doseEvents: Array<DoseEvent> = [];
    public currentDate: number;

    constructor(
        private doseEventService: DoseEventService,
        private auth: AuthService,
        private nav: NavController,
        private loadingStatusService: LoadingStatusService
    ) {

    }

    private updateDoseEvents = (
        doseEvents: Array<DoseEvent>
    ) => {
        this.doseEvents = doseEvents;
        if (doseEvents.length) {
            this.currentDate = doseEvents[0].scheduledDateTime;
        }
    };

    public ngOnInit(): any {
        return this.loadCurrentList();
    }

    private loadCurrentList = () => {

        const loadingStatus: LoadingStatus = this.loadingStatusService.start(this.nav);

        const listPromise = this.doseEventService.list().then(
            (doseEvents) => {
                this.updateDoseEvents(doseEvents);
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

    private loadPage = (dir: string) => {

        const loadingStatus: LoadingStatus = this.loadingStatusService.start(this.nav);

        const pagePromise = this.doseEventService.loadPage(
            this.currentDate,
            dir
        ).then(
            (doseEvents) => {
                this.updateDoseEvents(doseEvents);
            }
        );

        /* Wait on request to resolve, and loading mask to display, then stop loading status. */
        return Promise.all(
            [
                pagePromise,
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

    public loadNext = () => {
        return this.loadPage("next");
    };

    public loadPrev = () => {
        return this.loadPage("prev");
    };

}
