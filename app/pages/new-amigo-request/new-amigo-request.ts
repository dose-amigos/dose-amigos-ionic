import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";
import {Component, OnInit} from "@angular/core";
import {AmigoShareRequest} from "../../amigo-share-request/amigo-share-request";
import {NavController, Events} from "ionic-angular/index";
import {LogonPanelComponent} from "../../logon-panel-component/logon-panel.component";
import {AmigoShareRequestService} from "../../amigo-share-request-service/amigo-share-request.service";

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
        private events: Events
    ) {

    }

    public ngOnInit(): any {

        this.amigoShareRequest = new AmigoShareRequest();

        return Promise.resolve(
            this.amigoShareRequest
        );
    }

    public onSubmit(): any {
        return this.amigoShareRequestService.save(
            this.amigoShareRequest
        ).then(
            (amigoShareRequest: AmigoShareRequest) => {

                this.events.publish(
                    "amigoShareRequest:created",
                    amigoShareRequest as AmigoShareRequest
                );

                this.nav.pop();
            }
        );
    }

    public cancel() {
        this.nav.pop();
    }

}