import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";

@Component(
    {
        templateUrl: "build/pages/amigos/amigos.html",
        directives: [
            DoseAmigosToolbar
        ]
    }
)
export class AmigosPage {

    public title: string = "Amigos";

    constructor(public nav: NavController) {}

}
