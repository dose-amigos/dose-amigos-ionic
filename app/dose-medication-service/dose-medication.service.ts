import {Injectable} from "@angular/core";
import {DoseMedication} from "../dose-medication/dose-medication";
import {BACKEND_URL} from "../backend-config/backend-config";
import {AuthHttp} from "../angular2-jwt";
import {Headers} from "@angular/http";

/**
 * Service for fetching and saving DoseMedication instances.
 */
@Injectable()
export class DoseMedicationService {

    private medsUrl: string = `${BACKEND_URL}/meds`;

    constructor(
        private http: AuthHttp
    ) {
    }

    /**
     * Get a list of DoseMedications.
     * @returns {Promise<Array<DoseMedication>>}
     */
    public list(): Promise<Array<DoseMedication>> {
        return this.http.get(
            this.medsUrl
        ).toPromise().then(
            (response) => response.json()
        ).catch(
            this.handleError
        );
    }

    /**
     * Get a single DoseMedication by ID.
     * @param id {number} of DoseMedication.
     * @returns {Promise<DoseMedication>}.
     */
    public get(
        id: number
    ): Promise<DoseMedication> {
        return this.http.get(
            `${this.medsUrl}/${id}`
        ).toPromise().then(
            (response) => response.json()
        ).catch(
            this.handleError
        );
    }

    /**
     * Sends HTTP POST to server to create new DoseMedication.
     * @param doseMedication - DoseMedication.
     * @returns {Promise<DoseMedication>}.
     */
    private post(
        doseMedication: DoseMedication
    ): Promise<DoseMedication> {

        const headers = new Headers(
            {
                "Content-Type": "application/json"
            }
        );

        return this.http.post(
            this.medsUrl,
            JSON.stringify(doseMedication),
            {
                headers: headers
            }
        ).toPromise().then(
            res => res.json()
        ).catch(
            this.handleError
        );
    }

    /**
     * Sends HTTP PUT to server to edit existing DoseMedication.
     * @param doseMedication - DoseMedication.
     * @returns {Promise<DoseMedication>}.
     */
    private put(
        doseMedication: DoseMedication
    ): Promise<DoseMedication> {

        const headers = new Headers(
            {
                "Content-Type": "application/json"
            }
        );

        return this.http.put(
            `${this.medsUrl}/${doseMedication.id}`,
            JSON.stringify(doseMedication),
            {
                headers: headers
            }
        ).toPromise().then(
            res => res.json()
        ).catch(
            this.handleError
        );
    }

    /**
     * Saves the provided DoseMedication whether it is new or changed.
     * @param doseMedication to save.
     * @returns {Promise<DoseMedication>}.
     */
    public save(
        doseMedication: DoseMedication
    ): Promise<DoseMedication> {

        if (doseMedication.id) {
            return this.put(doseMedication);
        }

        return this.post(doseMedication);
    }

    /**
     * Deletes an existing DoseMedication.
     * @param doseMedication to delete.
     * @returns {Promise<DoseMedication>}
     */
    public remove(
        doseMedication: DoseMedication
    ) {
        return this.http.delete(
            `${this.medsUrl}/${doseMedication.id}`
        ).toPromise().then(
            (response) => response.json()
        ).catch(
            this.handleError
        );
    }

    /**
     * Handles any errors communicating with backend.
     * @param error
     * @returns {Promise<void>|Promise<T>}
     */
    private handleError(error: any) {
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);
    }

}
