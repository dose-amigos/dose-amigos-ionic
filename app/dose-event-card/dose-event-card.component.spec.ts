import {it, describe, expect, inject} from "@angular/core/testing";
import {TestComponentBuilder} from "@angular/compiler/testing";
import {DoseEventCardComponent} from "./dose-event-card.component";
import {DoseEvent} from "../dose-event/dose-event";
import {DoseAmigosUser} from "../dose-amigos-user/dose-amigos-user";

/**
 * Tests for DoseEventCardComponent.
 */
describe("DoseEventCardComponent", () => {

    it("should render DoseEvent as card", inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(DoseEventCardComponent).then(componentFixture => {
            const element = componentFixture.nativeElement;

            componentFixture.componentInstance.doseEvent = new DoseEvent();
            componentFixture.componentInstance.doseEvent.id = 1;
            componentFixture.componentInstance.doseEvent.time = new Date();

            componentFixture.componentInstance.doseEvent.user = new DoseAmigosUser();
            componentFixture.componentInstance.doseEvent.user.id = 100;
            componentFixture.componentInstance.doseEvent.user.name = "John Doe";
            componentFixture.componentInstance.doseEvent.user.lastTimeDoseTaken = new Date();
            componentFixture.componentInstance.doseEvent.user.nextTimeDoseScheduled = new Date();

            componentFixture.detectChanges();
            expect(
                element.querySelectorAll("ion-card").length
            ).toBe(
                1,
                "should render DoseEvent as card"
            );
        });
    }));

});
