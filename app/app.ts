import {Component, ViewChild} from "@angular/core";
import {Platform, ionicBootstrap, Nav} from "ionic-angular";
import {StatusBar} from "ionic-native";
import {FeedPage} from "./pages/feed/feed";
import {DoseEventService} from "./dose-event-service/dose-event-service";
import {PAGE_LIST} from "./pages/page-list";
import {Page} from "./pages/page";
import {AuthUserService} from "./auth-user-service/auth-user.service";
import {DoseTimeService} from "./dose-time-service/dose-time.service";

/**
 * DoseAmigosApp component for initializing app and routes.
 */
@Component(
    {
        templateUrl: "build/app.html",
        providers: [
            AuthUserService,
            DoseEventService,
            DoseTimeService
        ]
    }
)
export class DoseAmigosApp {

    @ViewChild(Nav)
    nav: Nav;

    pages: Array<Page>;
    rootPage: any = FeedPage;

    constructor(private platform: Platform) {
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
