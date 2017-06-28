// This class exemplifies how to setup the local datastore to a MySQL table
// for the model represented by the class TestModel.

import { DFDataStore, DFResource, DFService } from 'ng-dfservice';
import { TestModel } from '../dfmodels/testModel';

export class TestDataStore extends DFDataStore {
    dfresource: DFResource = new DFResource('your-service-name', DFService.RESOURCE_TABLE, 'your-table-name') ;
    modelclass: any = TestModel;

    constructor( private dfs:DFService ) {
        super(dfs);

        // Optional parameters you can setup differently than the default
        this.dfresource.params.limit = 10;
        this.dfresource.params.include_count = true;
    }
}