import {Component} from "@angular/core";
import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";
import {NavController} from "ionic-angular";

/*
  Generated class for the MedListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: "build/pages/med-list/med-list.html",
  directives: [DoseAmigosToolbar]
})
export class MedListPage {
    public title: string = "My Medications";
    constructor(public nav: NavController) {}
}
