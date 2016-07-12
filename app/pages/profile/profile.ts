import {Component, Type} from "@angular/core";
import {AuthService} from "../../auth-service/auth.service";
import {FeedPage} from "../feed/feed";
import {NavController} from "ionic-angular/index";
import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";
import {LogonPanelComponent} from "../../logon-panel-component/logon-panel.component";

@Component(
    {
        templateUrl: "build/pages/profile/profile.html",
        directives: [
            DoseAmigosToolbar,
            LogonPanelComponent
        ]
    }
)
export class ProfilePage {

    public title: string = "Profile";

    constructor(
        private auth: AuthService,
        private nav: NavController
    ) {

    }

    public goToFeed() {
        this.nav.setRoot(FeedPage);
    }

    public logout() {
        this.auth.logout();
        this.goToFeed();
    }

    public cancel() {
        this.goToFeed();
    }

}
