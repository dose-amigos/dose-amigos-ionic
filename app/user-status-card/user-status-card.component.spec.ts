import {it, describe, expect, inject, beforeEachProviders} from "@angular/core/testing";
import {TestComponentBuilder} from "@angular/compiler/testing";
import {DoseAmigosUser} from "../dose-amigos-user/dose-amigos-user";
import {UserStatusCardComponent} from "./user-status-card.component";
import {DoseTimeService} from "../dose-time-service/dose-time.service";

/**
 * Tests for UserStatusCardComponent.
 */
describe("UserStatusCardComponent", () => {

    beforeEachProviders(() => [
        DoseTimeService
    ]);

    it("should render User's status as card", inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(UserStatusCardComponent).then(componentFixture => {
            const element = componentFixture.nativeElement;

            componentFixture.componentInstance.user = new DoseAmigosUser();
            componentFixture.componentInstance.user.id = 100;
            componentFixture.componentInstance.user.name = "John Doe";
            componentFixture.componentInstance.user.lastTimeDoseTaken = new Date();
            componentFixture.componentInstance.user.nextTimeDoseScheduled = new Date();

            componentFixture.detectChanges();
            expect(
                element.querySelectorAll("ion-card").length
            ).toBe(
                1,
                "should render User's status as card"
            );
        });
    }));

});
