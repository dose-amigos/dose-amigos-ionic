import {Component, OnInit} from "@angular/core";
import {NavController} from "ionic-angular";
import {DoseEvent} from "../../dose-event/dose-event";
import {DoseEventCardComponent} from "../../dose-event-card/dose-event-card.component";
import {DoseEventService} from "../../dose-event-service/dose-event-service";
import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";

/**
 * Component that renders the Amigos Feed Page of dose events.
 */
@Component(
    {
        templateUrl: "build/pages/feed/feed.html",
        directives: [
            DoseEventCardComponent,
            DoseAmigosToolbar
        ]
    }
)
export class FeedPage implements OnInit {

    public doseEvents: Array<DoseEvent> = [];
    public title: string = "News Feed";

    constructor(
        private navController: NavController,
        private doseEventService: DoseEventService
    ) {

    }

    public ngOnInit(): any {
        return this.doseEventService.list().then(
            doseEvents => {
                this.doseEvents = doseEvents;
            }
        );
    }

    /*
     pushPage(){
     this.navController.push(SomeImportedPage, { userId: "12345"});
     }
     */
}
