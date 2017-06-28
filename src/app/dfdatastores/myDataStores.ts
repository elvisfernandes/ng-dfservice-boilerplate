import { DFService } from 'ng-dfservice';
import { TestDataStore } from './testDataStore';

export const MY_DATASTORE_PROVIDERS = [
    // Include here as much datastores as you may have
    { provide: TestDataStore, useClass: TestDataStore, deps: [ DFService ] }
];