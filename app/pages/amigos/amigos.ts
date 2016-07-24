import {Component, OnInit, Type} from "@angular/core";
import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";
import {DoseAmigosUserService} from "../../dose-amigos-user-service/dose-amigos-user.service";
import {DoseAmigosUser} from "../../dose-amigos-user/dose-amigos-user";
import {UserStatusCardComponent} from "../../user-status-card/user-status-card.component";
import {FeedPage} from "../feed/feed";
import {AmigoRequestCreateComponent} from "../../amigo-request-create-component/amigo-request-create.component";
import {LogonPanelComponent} from "../../logon-panel-component/logon-panel.component";
import {Events, NavController} from "ionic-angular/index";
import {LoadingStatusService} from "../../loading-status-service/loading-status.service";
import {LoadingStatus} from "../../loading-status/loading-status";

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
        private events: Events,
        private nav: NavController,
        private loadingStatusService: LoadingStatusService
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

        const loadingStatus: LoadingStatus = this.loadingStatusService.start(this.nav);

        const listPromise = this.doseAmigosUserService.list().then(
            (doseAmigosUsers) => {
                this.doseAmigosUsers = doseAmigosUsers;
            }
        );

        /* Wait on request to resolve, and loading mask to display, then stop loading status. */
        return Promise.all(
            [
                listPromise,
                loadingStatus.displayPromise
            ]
        ).then(
            () => {
                loadingStatus.loading.dismiss();
            }
        ).catch(
            () => {
                loadingStatus.loading.dismiss();
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
