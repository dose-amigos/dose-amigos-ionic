import {Injectable} from "@angular/core";
import {DOSE_MEDICATIONS} from "./dose-medication-mocks";
import {DoseMedication} from "../dose-medication/dose-medication";

/**
 * Service for fetching and saving DoseMedication instances.
 */
@Injectable()
export class DoseMedicationService {

    /**
     * Get a list of DoseMedications.
     * @returns {Promise<Array<DoseMedication>>}
     */
    public list(): Promise<Array<DoseMedication>> {
        return Promise.resolve(
            DOSE_MEDICATIONS
        );
    }

    /**
     * Get a single DoseMedication by ID.
     * @param id {number} of DoseMedication.
     * @returns {Promise<DoseMedication>}
     */
    public get(
        id: number
    ): Promise<DoseMedication> {
        return Promise.resolve(
            DOSE_MEDICATIONS.filter(
                (doseMedication) => doseMedication.id === id
            )[0]
        );
    }

}
