import {LocalNotifications} from 'ionic-native';

export class DoseNotifications {

    /**
     *  Method for scheduling a daily local notification.
     *
     *  @startDate javascript long representing the time to take a medication.
     */
    public schedule(startDate) {
        var d = new Date(startDate);

        LocalNotifications.schedule({
            title: "Dose Amigos Reminder",
            text: "Time to take your medication!",
            at: new Date(d.getTime()),
            sound: null
        });
    }

}
