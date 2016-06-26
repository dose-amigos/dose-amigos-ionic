import {Component, OnInit, Type} from "@angular/core";
import {DoseEvent} from "../../dose-event/dose-event";
import {DoseEventCardComponent} from "../../dose-event-card/dose-event-card.component";
import {DoseEventService} from "../../dose-event-service/dose-event-service";
import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";
import {AuthUserService} from "../../auth-user-service/auth-user.service";
import {AuthUser} from "../../auth-user/auth-user";
import {UserStatusCardComponent} from "../../user-status-card/user-status-card.component";
import {DosePage} from "../dose/dose";

/**
 * Component that renders the Amigos Feed Page of dose events.
 */
@Component(
    {
        templateUrl: "build/pages/feed/feed.html",
        directives: [
            DoseEventCardComponent,
            DoseAmigosToolbar,
            UserStatusCardComponent
        ]
    }
)
export class FeedPage implements OnInit {

    public doseEvents: Array<DoseEvent> = [];
    public title: string = "News Feed";
    public authUser: AuthUser;
    public userStatusClickPage: Type;

    constructor(
        private doseEventService: DoseEventService,
        private authUserService: AuthUserService
    ) {

    }

    public ngOnInit(): any {

        this.authUser = this.authUserService.get();

        this.userStatusClickPage = DosePage;

        return this.doseEventService.list().then(
            doseEvents => {
                this.doseEvents = doseEvents;
            }
        );
    }

}
