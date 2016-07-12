import {AuthService} from "../auth-service/auth.service";
import {Component} from "@angular/core";

@Component(
    {
        selector: "logon-required",
        templateUrl: "build/logon-panel-component/logon-panel.component.html"
    }
)export class LogonPanelComponent {

    constructor(
        private auth: AuthService
    ) {

    }

}
