import {Component, OnInit, Type} from "@angular/core";
import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";
import {DoseAmigosUserService} from "../../dose-amigos-user-service/dose-amigos-user.service";
import {DoseAmigosUser} from "../../dose-amigos-user/dose-amigos-user";
import {UserStatusCardComponent} from "../../user-status-card/user-status-card.component";
import {FeedPage} from "../feed/feed";
import {AmigoRequestCreateComponent} from "../../amigo-request-create-component/amigo-request-create.component";
import {LogonPanelComponent} from "../../logon-panel-component/logon-panel.component";
import {Events} from "ionic-angular/index";

@Component(
    {
        templateUrl: "build/pages/amigos/amigos.html",
        directives: [
            DoseAmigosToolbar,
            UserStatusCardComponent,
            AmigoRequestCreateComponent,
            LogonPanelComponent
        ]
    }
)
export class AmigosPage implements OnInit {

    public title: string = "Amigos";
    public doseAmigosUsers: Array<DoseAmigosUser> = [];
    public userStatusClickPage: Type;

    constructor(
        private doseAmigosUserService: DoseAmigosUserService,
        private events: Events
    ) {

        /* Refresh page data when a new request is created. */
        events.subscribe(
            "amigoShareRequest:created",
            () => {
                this.loadUsers();
            }
        );

    }

    /**
     * Loads and sets users.
     * @returns {any}.
     */
    public loadUsers(): any {
        return this.doseAmigosUserService.list().then(
            doseAmigosUsers => {
                this.doseAmigosUsers = doseAmigosUsers;
            }
        );
    }

    /**
     * Initialize the page.
     * @returns {Promise}
     */
    ngOnInit(): any {

        this.userStatusClickPage = FeedPage;

        return this.loadUsers();
    }

}
