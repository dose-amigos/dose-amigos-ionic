import {LocalNotifications} from "ionic-native";
import {Injectable} from "@angular/core";
import {DoseEventService} from "../dose-event-service/dose-event.service";
import {AuthService} from "../auth-service/auth.service";
import {DoseEvent} from "../dose-event/dose-event";

@Injectable()
export class DoseNotificationService {

    constructor(
        private doseEventService: DoseEventService,
        private auth: AuthService
    ) {
    }

    /**
     *  Method for scheduling a daily local notification.
     *
     *  @startTime javascript long representing the ms time to take a medication.
     */
    public schedule(startTime) {

        const startDate = new Date(startTime);

        console.log(startDate);

        LocalNotifications.schedule(
            {
                id: Math.random() * 999999,
                text: "Time to take your medication!",
                at: startDate
            }
        );
    }

    public cancelAll() {
        return LocalNotifications.cancelAll();
    }

    public refreshSchedule = () => {

        if (this.auth.authenticated()) {

            this.doseEventService.getAllForWeek().then(
                (doseEvents: Array<DoseEvent>) => {

                    /* Remove existing. */
                    this.cancelAll().then(
                        () => {
                            doseEvents.forEach(
                                (doseEvent: DoseEvent) => {
                                    this.schedule(
                                        doseEvent.scheduledDateTime
                                    );
                                }
                            );
                        }
                    );

                }
            );

        }

    };

    public startRecurringRefresh = () => {

        this.refreshSchedule();

        /* Run every 5 minutes. */
        setInterval(
            this.refreshSchedule,
            300000
        );
    };

}
