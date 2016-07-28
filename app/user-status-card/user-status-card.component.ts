import {Component, Input, Type} from "@angular/core";
import {DoseAmigosUser} from "../dose-amigos-user/dose-amigos-user";
import {NextDoseComponent} from "../next-dose/next-dose.component";
import {LastDoseComponent} from "../last-dose/last-dose.component";
import {DoseAmigosUserService} from "../dose-amigos-user-service/dose-amigos-user.service";
import {Events} from "ionic-angular/index";

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

    constructor(
        private doseAmigosUserService: DoseAmigosUserService,
        private events: Events
    ) {
    }

    @Input()
    public onClickPage: Type;

    @Input()
    public allowDelete: boolean;

    /**
     * Deletes an amigo.
     * @param doseAmigoUser to delete.
     * @returns {Promise<TResult>}
     */
    public remove = (doseAmigoUser: DoseAmigosUser) => {
        return this.doseAmigosUserService.remove(
            doseAmigoUser
        ).then(
            (doseAmigoUser) => {
                this.events.publish(
                    "doseAmigoUser:deleted",
                    doseAmigoUser as DoseAmigosUser
                );

                return doseAmigoUser;
            }
        );
    };

}