import { DFModel } from 'ng-dfservice';

export class TestModel extends DFModel {

    // Set your object's properties
    id:number;
    name:string = '';
    
    // Specify how to build your model from a JSON representation
    fromJSON( jsonmodel:any ):void {
        this.id = jsonmodel.id;
        this.name = jsonmodel.name;
    }

    // Define how you model should be represented in JSON
    toJSON():any {
        let jsonmodel = {
            id: this.id,
            name: this.name
        };
        return jsonmodel;
    }

    // Create a factory for your model. Maybe you only need to create a new instance of it
    factory():TestModel {
        return new TestModel();
    }
}