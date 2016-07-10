import {Component, Input, Type} from "@angular/core";
import {DoseAmigosUser} from "../dose-amigos-user/dose-amigos-user";
import {NextDoseComponent} from "../next-dose/next-dose.component";
import {LastDoseComponent} from "../last-dose/last-dose.component";

/**
 * UserStatusCardComponent for rendering a user's status as a card.
 */
@Component(
    {
        selector: "user-status-card",
        templateUrl: "build/user-status-card/user-status-card.component.html",
        directives: [
            LastDoseComponent,
            NextDoseComponent
        ]
    }
)
export class UserStatusCardComponent {

    @Input()
    public user: DoseAmigosUser;

    @Input()
    public onClickPage: Type;

}