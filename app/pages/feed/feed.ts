import {Component, OnInit, Type} from "@angular/core";
import {FeedEvent} from "../../feed-event/feed-event";
import {FeedEventCardComponent} from "../../feed-event-card/feed-event-card.component";
import {FeedEventService} from "../../feed-event-service/feed-event-service";
import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";
import {AuthUserService} from "../../auth-user-service/auth-user.service";
import {AuthUser} from "../../auth-user/auth-user";
import {UserStatusCardComponent} from "../../user-status-card/user-status-card.component";
import {DosePage} from "../dose/dose";
import {LogonPanelComponent} from "../../logon-panel-component/logon-panel.component";

/**
 * Component that renders the Amigos Feed Page of dose events.
 */
@Component(
    {
        templateUrl: "build/pages/feed/feed.html",
        directives: [
            FeedEventCardComponent,
            DoseAmigosToolbar,
            UserStatusCardComponent,
            LogonPanelComponent
        ]
    }
)
export class FeedPage implements OnInit {

    public feedEvents: Array<FeedEvent> = [];
    public title: string = "News Feed";
    public authUser: AuthUser;
    public userStatusClickPage: Type;

    constructor(
        private feedEventService: FeedEventService,
        private authUserService: AuthUserService
    ) {

    }

    public ngOnInit(): any {

        this.authUser = this.authUserService.get();

        this.userStatusClickPage = DosePage;

        return this.feedEventService.list().then(
            feedEvents => {
                this.feedEvents = feedEvents;
            }
        );
    }

}
