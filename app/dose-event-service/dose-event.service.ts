import {Injectable} from "@angular/core";
import {DoseEvent} from "../dose-event/dose-event";
import {DOSE_EVENTS} from "./dose-event-mocks";

/**
 * Service for fetching and saving DoseEvent instances.
 */
@Injectable()
export class DoseEventService {

    /**
     * Get a list of DoseEvents.
     * @returns {Promise<Array<DoseEvent>>}
     */
    public list(): Promise<Array<DoseEvent>> {
        return Promise.resolve(
            DOSE_EVENTS
        );
    }

    /**
     * Get a single DoseEvent by ID.
     * @param id {number} of DoseEvent.
     * @returns {Promise<DoseEvent>}
     */
    public get(
        id: number
    ): Promise<DoseEvent> {
        return Promise.resolve(
            DOSE_EVENTS.filter(
                (doseEvent) => doseEvent.id === id
            )[0]
        );
    }

}

