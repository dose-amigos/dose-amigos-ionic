import {it, describe, expect} from "@angular/core/testing";
import {NavController} from "ionic-angular/index";
import {NewAmigoRequestPage} from "./new-amigo-request";
import {AmigoShareRequestService} from "../../amigo-share-request-service/amigo-share-request.service";

class MockNavController {
    public pop() {

    }
}

class MockAmigoShareRequestService {

}

/**
 * Tests for NewAmigoRequestPage component.
 */
describe("NewAmigoRequestPage", () => {

    it("should have title set", () => {

        const mockNavController: NavController = new MockNavController() as NavController;

        const amigoShareRequestService: AmigoShareRequestService = new MockAmigoShareRequestService() as AmigoShareRequestService;

        const newAmigoRequestPage: NewAmigoRequestPage = new NewAmigoRequestPage(
            mockNavController,
            amigoShareRequestService
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
