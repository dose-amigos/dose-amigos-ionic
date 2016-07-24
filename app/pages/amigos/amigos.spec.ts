import {it, describe, expect} from "@angular/core/testing";
import {AmigosPage} from "./amigos";
import {DoseAmigosUser} from "../../dose-amigos-user/dose-amigos-user";
import {DOSE_AMIGOS_USERS} from "../../dose-amigos-user-service/dose-amigos-user-mocks";
import {DoseAmigosUserService} from "../../dose-amigos-user-service/dose-amigos-user.service";
import {Events} from "ionic-angular/index";

class MockDoseAmigosUserService {

    list(): Promise<Array<DoseAmigosUser>> {
        return Promise.resolve(
            DOSE_AMIGOS_USERS
        );
    }

}

class MockEvents {

    subscribe(topic: string, ...handlers: Function[]): void {

    }

}

/**
 * Tests for AmigoPage component.
 */
describe("AmigoPage", () => {

    it("should get DoseAmigosUsers from the service", () => {

        const mockDoseAmigosUserService: DoseAmigosUserService = new MockDoseAmigosUserService() as DoseAmigosUserService;

        const mockEvents: Events = new MockEvents() as Events;

        const amigosPage: AmigosPage = new AmigosPage(
            mockDoseAmigosUserService,
            mockEvents
        );

        return amigosPage.ngOnInit().then(
            () => {
                expect(
                    amigosPage.doseAmigosUsers
                ).toEqual(
                    DOSE_AMIGOS_USERS,
                    "should get DoseAmigosUsers from the service"
                );
            }
        );

    });

    it("should have title set", () => {

        const mockDoseAmigosUserService: DoseAmigosUserService = new MockDoseAmigosUserService() as DoseAmigosUserService;

        const mockEvents: Events = new MockEvents() as Events;

        const amigosPage: AmigosPage = new AmigosPage(
            mockDoseAmigosUserService,
            mockEvents
        );

        return amigosPage.ngOnInit().then(
            () => {
                expect(
                    amigosPage.title
                ).toEqual(
                    "Amigos",
                    "should have title set"
                );
            }
        );

    });

});