import {Component, Input, Type} from "@angular/core";
import {DoseAmigosUser} from "../dose-amigos-user/dose-amigos-user";
import {NextDoseComponent} from "../next-dose/next-dose.component";
import {LastDoseComponent} from "../last-dose/last-dose.component";
import {DoseAmigosUserService} from "../dose-amigos-user-service/dose-amigos-user.service";

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
        private doseAmigosUserService: DoseAmigosUserService
    ) {
    }

    @Input()
    public onClickPage: Type;


    remove(doseAmigoUser: DoseAmigosUser){
        const amigoPromise = this.doseAmigosUserService.remove(doseAmigoUser).then(
            
        ).catch(
            this.handleError
        );
    }

    /**
     * Handles any errors communicating with backend.
     * @param error
     * @returns {Promise<void>|Promise<T>}
     */
    private handleError(error: any) {
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);
    }

}