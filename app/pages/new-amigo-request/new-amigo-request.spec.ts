import {it, describe, expect} from "@angular/core/testing";
import {NavController, Events} from "ionic-angular/index";
import {NewAmigoRequestPage} from "./new-amigo-request";
import {AmigoShareRequestService} from "../../amigo-share-request-service/amigo-share-request.service";

class MockNavController {
    public pop() {

    }
}

class MockAmigoShareRequestService {

}

class MockEvents {

    publish(topic: string, ...args: any[]): any[] {
        return [];
    }

}

/**
 * Tests for NewAmigoRequestPage component.
 */
describe("NewAmigoRequestPage", () => {

    it("should have title set", () => {

        const mockNavController: NavController = new MockNavController() as NavController;

        const amigoShareRequestService: AmigoShareRequestService = new MockAmigoShareRequestService() as AmigoShareRequestService;

        const mockEvents: Events = new MockEvents() as Events;

        const newAmigoRequestPage: NewAmigoRequestPage = new NewAmigoRequestPage(
            mockNavController,
            amigoShareRequestService,
            mockEvents
        );

        return newAmigoRequestPage.ngOnInit().then(
            () => {
                expect(
                    newAmigoRequestPage.title
                ).toEqual(
                    "New Amigo Request",
                    "should have title set"
                );
            }
        );

    });

});
