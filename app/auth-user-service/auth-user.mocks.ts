import {AuthUser} from "../auth-user/auth-user";

const now: Date = new Date();
const recentPast: Date = new Date(now.getTime() - 200 * 60000);

recentPast.setDate(now.getDate() - 1);

export const CURRENT_AUTH_USER: AuthUser = {
    authUserId: 50,
    userInfo: {
        id: 50,
        name: "Fred Flintstone",
        lastTimeDoseTaken: recentPast,
        nextTimeDoseScheduled: now
    },
    email: "current.user@example.org",
    googleId: 99999
};