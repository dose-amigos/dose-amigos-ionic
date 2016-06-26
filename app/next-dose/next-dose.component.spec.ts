import {it, describe, expect, inject, beforeEachProviders} from "@angular/core/testing";
import {TestComponentBuilder} from "@angular/compiler/testing";
import {NextDoseComponent} from "./next-dose.component";
import {DoseTimeService} from "../dose-time-service/dose-time.service";
import {provide} from "@angular/core";

class MockDoseTimeService {

    public isOverdue(): boolean {
        return false;
    }

}

/**
 * Tests for NextDoseComponent.
 */
describe("NextDoseComponent", () => {

    beforeEachProviders(() => [
        provide(DoseTimeService, {useClass: MockDoseTimeService})
    ]);

    it("should render next dose", inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(NextDoseComponent).then(componentFixture => {
            const element = componentFixture.nativeElement;

            componentFixture.componentInstance.doseTime = new Date();

            componentFixture.detectChanges();

            expect(
                element.querySelectorAll("span.next-dose").length
            ).toBe(
                1,
                "should render the next-dose element"
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