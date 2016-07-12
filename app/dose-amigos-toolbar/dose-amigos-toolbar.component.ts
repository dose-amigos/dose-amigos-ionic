import {Component, Input} from "@angular/core";
import {AuthService} from "../auth-service/auth.service";

/**
 * DoseAmigosToolbar for showing title bar on each page.
 */
@Component(
    {
        selector: "dose-amigos-toolbar",
        templateUrl: "build/dose-amigos-toolbar/dose-amigos-toolbar.component.html"
    }
)
export class DoseAmigosToolbar {

    @Input()
    public title: string;


    constructor(
        private auth: AuthService
    ) {

    }

}
