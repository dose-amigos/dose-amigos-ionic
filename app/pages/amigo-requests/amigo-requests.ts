import {Component, OnInit} from "@angular/core";
import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";
import {AmigoShareRequestService} from "../../amigo-share-request-service/amigo-share-request.service";
import {AmigoShareRequest} from "../../amigo-share-request/amigo-share-request";
import {AmigoShareRequestCardComponent} from "../../amigo-share-request-card/amigo-share-request-card.component";
import {AmigoRequestCreateComponent} from "../../amigo-request-create-component/amigo-request-create.component";

@Component(
    {
        templateUrl: "build/pages/amigo-requests/amigo-requests.html",
        directives: [
            AmigoShareRequestCardComponent,
            DoseAmigosToolbar,
            AmigoRequestCreateComponent
        ]
    }
)
export class AmigoRequestsPage implements OnInit {

    public title: string = "Amigo Requests";

    public amigoShareRequests: Array<AmigoShareRequest>;

    constructor(
        private amigoShareRequestService: AmigoShareRequestService
    ) {
    }

    /**
     * Initialize the page.
     * @returns {Promise}
     */
    ngOnInit(): any {
        return this.amigoShareRequestService.list().then(
            amigoShareRequests => {
                this.amigoShareRequests = amigoShareRequests;
            }
        );
    }

}
