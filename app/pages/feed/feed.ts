import {Component, OnInit, Type} from "@angular/core";
import {FeedEvent} from "../../feed-event/feed-event";
import {FeedEventCardComponent} from "../../feed-event-card/feed-event-card.component";
import {FeedEventService} from "../../feed-event-service/feed-event-service";
import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";
import {UserStatusCardComponent} from "../../user-status-card/user-status-card.component";
import {DosePage} from "../dose/dose";
import {LogonPanelComponent} from "../../logon-panel-component/logon-panel.component";
import {DoseAmigosUser} from "../../dose-amigos-user/dose-amigos-user";
import {DoseAmigosUserService} from "../../dose-amigos-user-service/dose-amigos-user.service";
import {LoadingStatusService} from "../../loading-status-service/loading-status.service";
import {NavController} from "ionic-angular/index";
import {LoadingStatus} from "../../loading-status/loading-status";

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
    public currentUser: DoseAmigosUser;
    public userStatusClickPage: Type;

    constructor(
        private feedEventService: FeedEventService,
        private doseAmigosUserService: DoseAmigosUserService,
        private nav: NavController,
        private loadingStatusService: LoadingStatusService
    ) {

    }

    public loadData(): any {

        const loadingStatus: LoadingStatus = this.loadingStatusService.start(this.nav);

        const currentUserPromise = this.doseAmigosUserService.getCurrent().then(
            currentUser => {
                this.currentUser = currentUser;
            }
        );

        const feedEventsPromise = this.feedEventService.list().then(
            (feedEvents) => {
                this.feedEvents = feedEvents;
            }
        );

        /* Wait on both requests to resolve, and loading mask to display, then stop loading status. */
        return Promise.all(
            [
                currentUserPromise,
                feedEventsPromise,
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

    public ngOnInit(): any {

        this.userStatusClickPage = DosePage;

        return this.loadData();
    }

}
