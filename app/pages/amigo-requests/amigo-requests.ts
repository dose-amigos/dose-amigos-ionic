import {Component, OnInit} from "@angular/core";
import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";
import {AmigoShareRequestService} from "../../amigo-share-request-service/amigo-share-request.service";
import {AmigoShareRequest} from "../../amigo-share-request/amigo-share-request";
import {AmigoShareRequestCardComponent} from "../../amigo-share-request-card/amigo-share-request-card.component";
import {AmigoRequestCreateComponent} from "../../amigo-request-create-component/amigo-request-create.component";
import {LogonPanelComponent} from "../../logon-panel-component/logon-panel.component";
import {Events, NavController} from "ionic-angular/index";
import {LoadingStatusService} from "../../loading-status-service/loading-status.service";
import {LoadingStatus} from "../../loading-status/loading-status";

@Component(
    {
        templateUrl: "build/pages/amigo-requests/amigo-requests.html",
        directives: [
            AmigoShareRequestCardComponent,
            DoseAmigosToolbar,
            AmigoRequestCreateComponent,
            LogonPanelComponent
        ]
    }
)
export class AmigoRequestsPage implements OnInit {

    public title: string = "Amigo Requests";

    public amigoShareRequests: Array<AmigoShareRequest>;

    public accept: (AmigoShareRequest) => void;

    public decline: (AmigoShareRequest) => void;

    constructor(
        private amigoShareRequestService: AmigoShareRequestService,
        private events: Events,
        private nav: NavController,
        private loadingStatusService: LoadingStatusService
    ) {
        this.accept = this.acceptAmigoShareRequest.bind(this);
        this.decline = this.declineAmigoShareRequest.bind(this);

        /* Refresh page data when a new request is created. */
        events.subscribe(
            "amigoShareRequest:created",
            () => {
                this.loadRequests();
            }
        );
    }

    /**
     * Loads and sets requests.
     * @returns {any}.
     */
    public loadRequests(): any {

        const loadingStatus: LoadingStatus = this.loadingStatusService.start(this.nav);

        const listPromise = this.amigoShareRequestService.list().then(
            (amigoShareRequests) => {
                this.amigoShareRequests = amigoShareRequests;
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
    }

    /**
     * Initialize the page.
     * @returns {Promise}.
     */
    public ngOnInit(): any {
        return this.loadRequests();
    }

    private saveAmigoShareRequest(
        amigoShareRequest: AmigoShareRequest
    ) {

        const loadingStatus: LoadingStatus = this.loadingStatusService.start(this.nav);

        const savePromise = this.amigoShareRequestService.save(
            amigoShareRequest
        ).then(
            () => {
                this.amigoShareRequests = this.amigoShareRequests.filter(
                    (amigoShareRequestInList) => amigoShareRequest.id !== amigoShareRequestInList.id
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
            }
        ).catch(
            () => {
                loadingStatus.loading.dismiss();
            }
        );
    }

    private acceptAmigoShareRequest(
        amigoShareRequest: AmigoShareRequest
    ) {
        amigoShareRequest.accepted = true;
        this.saveAmigoShareRequest(amigoShareRequest);
    }

    private declineAmigoShareRequest(
        amigoShareRequest: AmigoShareRequest
    ) {
        amigoShareRequest.accepted = false;
        this.saveAmigoShareRequest(amigoShareRequest);
    }

}
