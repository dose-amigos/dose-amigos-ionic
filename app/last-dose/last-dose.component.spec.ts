import {it, describe, expect, inject} from "@angular/core/testing";
import {TestComponentBuilder} from "@angular/compiler/testing";
import {LastDoseComponent} from "./last-dose.component";

/**
 * Tests for LastDoseComponent.
 */
describe("LastDoseComponent", () => {

    it("should render last dose", inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(LastDoseComponent).then(componentFixture => {
            const element = componentFixture.nativeElement;

            componentFixture.componentInstance.doseTime = new Date();

            componentFixture.detectChanges();

            expect(
                element.querySelectorAll("span.last-dose").length
            ).toBe(
                1,
                "should render the last-dose element"
            );

            expect(
                element.querySelectorAll("ion-icon").length
            ).toBe(
                1,
                "should render an icon"
            );
        });
    }));

});