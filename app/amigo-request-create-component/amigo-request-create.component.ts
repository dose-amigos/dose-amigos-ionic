import {Component, Type} from "@angular/core";
import {NewAmigoRequestPage} from "../pages/new-amigo-request/new-amigo-request";

@Component(
    {
        selector: "amigo-request-fab",
        templateUrl: "build/amigo-request-create-component/amigo-request-create.component.html"
    }
)
export class AmigoRequestCreateComponent {

    public onClickPage: Type = NewAmigoRequestPage;

}