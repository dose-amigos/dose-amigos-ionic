import {Component, ViewChild, provide} from "@angular/core";
import {Platform, ionicBootstrap, Nav} from "ionic-angular";
import {StatusBar} from "ionic-native";
import {FeedPage} from "./pages/feed/feed";
import {FeedEventService} from "./feed-event-service/feed-event-service";
import {PAGE_LIST} from "./pages/page-list";
import {Page} from "./pages/page";
import {DoseTimeService} from "./dose-time-service/dose-time.service";
import {DoseAmigosUserService} from "./dose-amigos-user-service/dose-amigos-user.service";
import {AmigoShareRequestService} from "./amigo-share-request-service/amigo-share-request.service";
import {DoseEventService} from "./dose-event-service/dose-event.service";
import {DoseMedicationService} from "./dose-medication-service/dose-medication.service";
import {Http} from "@angular/http";
import {AuthService} from "./auth-service/auth.service";
import "./rxjs-operators";
import {AuthHttp, AuthConfig} from "./angular2-jwt";
import {DoseSeriesService} from "./dose-series-service/dose-series.service";
import {LoadingStatusService} from "./loading-status-service/loading-status.service";
import {DoseNotifications} from "./dose-notifications/dose-notifications";
import {DoseEvent} from "./dose-event/dose-event";

/**
 * DoseAmigosApp component for initializing app and routes.
 */
@Component(
    {
        templateUrl: "build/app.html",
        providers: [
            provide(
                AuthHttp,
                {
                    useFactory: (http) => {
                        return new AuthHttp(
                            new AuthConfig(),
                            http
                        );
                    },
                    deps: [
                        Http
                    ]
                }
            ),
            AuthService,
            AmigoShareRequestService,
            FeedEventService,
            DoseTimeService,
            DoseAmigosUserService,
            DoseEventService,
            DoseSeriesService,
            DoseMedicationService,
            LoadingStatusService,
            DoseNotifications
        ]
    }
)
export class DoseAmigosApp {

    @ViewChild(Nav)
    nav: Nav;

    pages: Array<Page>;
    rootPage: any = FeedPage;
    doseEvents: Array<DoseEvent> = [];

    constructor(
        private platform: Platform,
        private authHttp: AuthHttp,
        private auth: AuthService,
        private notification: DoseNotifications,
        private doseEventService: DoseEventService
    ) {
        this.initializeApp();

        this.pages = PAGE_LIST;
    }

    public openPage(page: Page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }

    private initializeApp(): void {
        this.platform.ready().then(
            () => {
                // Okay, so the platform is ready and our plugins are available.
                // Here you can do any higher level native things you might need.
                StatusBar.styleDefault();

                // When the app starts up, there might be a valid
                // token in local storage. If there is, we should
                // schedule an initial token refresh for when the
                // token expires
                this.auth.startupTokenRefresh();

                //clear all previous notifications.
                this.notification.clearAll();

                //get a list of weekly events
                const doseEventsPromise = this.doseEventService.getAllForWeek().then(
                    (doseEvents) => {
                        this.doseEvents = doseEvents;
                    }
                );

                //set notifications for all events  
                for (let event of this.doseEvents) {
                    this.notification.schedule(event.scheduledDateTime);
                }

            }
        );
    }

}

ionicBootstrap(
    DoseAmigosApp,
    [], /* custom providers */
    {
        mode: "md"
    }
);
