import {Component, OnInit} from "@angular/core";
import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";
import {AmigoShareRequestService} from "../../amigo-share-request-service/amigo-share-request.service";
import {AmigoShareRequest} from "../../amigo-share-request/amigo-share-request";
import {AmigoShareRequestCardComponent} from "../../amigo-share-request-card/amigo-share-request-card.component";
import {AmigoRequestCreateComponent} from "../../amigo-request-create-component/amigo-request-create.component";
import {LogonPanelComponent} from "../../logon-panel-component/logon-panel.component";

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
        private amigoShareRequestService: AmigoShareRequestService
    ) {
        this.accept = this.acceptAmigoShareRequest.bind(this);
        this.decline = this.declineAmigoShareRequest.bind(this);
    }

    /**
     * Initialize the page.
     * @returns {Promise}
     */
    public ngOnInit(): any {
        return this.amigoShareRequestService.list().then(
            amigoShareRequests => {
                this.amigoShareRequests = amigoShareRequests;
            }
        );
    }

    private saveAmigoShareRequest(
        amigoShareRequest: AmigoShareRequest
    ) {
        this.amigoShareRequestService.save(
            amigoShareRequest
        ).then(
            function () {
                this.amigoShareRequests = this.amigoShareRequests.filter(
                    (amigoShareRequestInList) => amigoShareRequest.id !== amigoShareRequestInList.id
                );
            }.bind(this)
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
