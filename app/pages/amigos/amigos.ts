import {Component, OnInit, Type} from "@angular/core";
import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";
import {DoseAmigosUserService} from "../../dose-amigos-user-service/dose-amigos-user.service";
import {DoseAmigosUser} from "../../dose-amigos-user/dose-amigos-user";
import {UserStatusCardComponent} from "../../user-status-card/user-status-card.component";
import {FeedPage} from "../feed/feed";
import {AmigoRequestCreateComponent} from "../../amigo-request-create-component/amigo-request-create.component";

@Component(
    {
        templateUrl: "build/pages/amigos/amigos.html",
        directives: [
            DoseAmigosToolbar,
            UserStatusCardComponent,
            AmigoRequestCreateComponent
        ]
    }
)
export class AmigosPage implements OnInit {

    public title: string = "Amigos";
    public doseAmigosUsers: Array<DoseAmigosUser> = [];
    public userStatusClickPage: Type;

    constructor(
        private doseAmigosUserService: DoseAmigosUserService
    ) {

    }

    /**
     * Initialize the page.
     * @returns {Promise}
     */
    ngOnInit(): any {

        this.userStatusClickPage = FeedPage;

        return this.doseAmigosUserService.list().then(
            doseAmigosUsers => {
                this.doseAmigosUsers = doseAmigosUsers;
            }
        );
    }

}
