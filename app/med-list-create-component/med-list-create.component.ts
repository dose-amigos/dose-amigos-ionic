import {Component, Type} from "@angular/core";
import {NewDoseMedicationPage} from "../pages/new-dose-medication/new-dose-medication";

@Component(
    {
        selector: "med-list-fab",
        templateUrl: "build/med-list-create-component/med-list-create.component.html"
    }
)
export class MedListCreateComponent {

    public onClickPage: Type = NewDoseMedicationPage;

}