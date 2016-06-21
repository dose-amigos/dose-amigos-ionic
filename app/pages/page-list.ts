import {Page} from "./page";
import {FeedPage} from "./feed/feed";
import {AmigosPage} from "./amigos/amigos";
import {DosePage} from "./dose/dose";

export var PAGE_LIST: Array<Page> = [
    {
        title: "News Feed",
        component: FeedPage,
        icon: "md-list-box"
    },
    {
        title: "Dose",
        component: DosePage,
        icon: "md-medkit"
    },
    {
        title: "Amigos",
        component: AmigosPage,
        icon: "md-people"
    }
];
