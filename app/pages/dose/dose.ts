import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";

@Component(
    {
        templateUrl: "build/pages/dose/dose.html",
        directives: [
            DoseAmigosToolbar
        ]
    }
)
export class DosePage {

    public title: string = "Dose";

    constructor(public nav: NavController) {}
}
