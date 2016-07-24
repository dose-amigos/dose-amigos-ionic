import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";
import {Component, OnInit} from "@angular/core";
import {AmigoShareRequest} from "../../amigo-share-request/amigo-share-request";
import {NavController, Events} from "ionic-angular/index";
import {LogonPanelComponent} from "../../logon-panel-component/logon-panel.component";
import {AmigoShareRequestService} from "../../amigo-share-request-service/amigo-share-request.service";
import {LoadingStatus} from "../../loading-status/loading-status";
import {LoadingStatusService} from "../../loading-status-service/loading-status.service";

@Component(
    {
        templateUrl: "build/pages/new-amigo-request/new-amigo-request.html",
        directives: [
            DoseAmigosToolbar,
            LogonPanelComponent
        ]
    }
)
export class NewAmigoRequestPage implements OnInit {

    public title: string = "New Amigo Request";

    public amigoShareRequest: AmigoShareRequest;

    constructor(
        private nav: NavController,
        private amigoShareRequestService: AmigoShareRequestService,
        private events: Events,
        private loadingStatusService: LoadingStatusService
    ) {

    }

    public ngOnInit(): any {

        this.amigoShareRequest = new AmigoShareRequest();

        return Promise.resolve(
            this.amigoShareRequest
        );
    }

    public onSubmit(): any {

        const loadingStatus: LoadingStatus = this.loadingStatusService.start(this.nav);

        const savePromise = this.amigoShareRequestService.save(
            this.amigoShareRequest
        ).then(
            (amigoShareRequest: AmigoShareRequest) => {
                this.events.publish(
                    "amigoShareRequest:created",
                    amigoShareRequest as AmigoShareRequest
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