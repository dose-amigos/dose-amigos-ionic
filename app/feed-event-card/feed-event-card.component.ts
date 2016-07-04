import {Component, Input} from "@angular/core";
import {FeedEvent} from "../feed-event/feed-event";

/**
 * FeedEventCardComponent for rendering a feed-event as a card.
 */
@Component(
    {
        selector: "feed-event-card",
        templateUrl: "build/feed-event-card/feed-event-card.component.html"
    }
)
export class FeedEventCardComponent {

    @Input()
    public feedEvent: FeedEvent;

}
