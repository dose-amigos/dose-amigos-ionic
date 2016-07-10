import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";
import {Component, OnInit} from "@angular/core";
import {AmigoShareRequest} from "../../amigo-share-request/amigo-share-request";
import {NavController} from "ionic-angular/index";

@Component(
    {
        templateUrl: "build/pages/new-amigo-request/new-amigo-request.html",
        directives: [
            DoseAmigosToolbar
        ]
    }
)
export class NewAmigoRequestPage implements OnInit {

    public title: string = "New Amigo Request";

    public amigoShareRequest: AmigoShareRequest;

    constructor(
        private nav: NavController
    ) {

    }

    public ngOnInit(): any {

        this.amigoShareRequest = new AmigoShareRequest();

        return Promise.resolve(
            this.amigoShareRequest
        );
    }

    public onSubmit(): AmigoShareRequest {
        /* Will need to save via service. */
        this.nav.pop();
        return this.amigoShareRequest;
    }

    public cancel() {
        this.nav.pop();
    }

}