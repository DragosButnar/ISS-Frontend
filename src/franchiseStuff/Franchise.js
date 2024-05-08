export default class Franchise{
    constructor(name, id) {
        this._name = name;
        this._id = id;
    }

    get name(){
        return this._name;
    }

    set name(value) {
        this._name = value;
    }


    get id() {
        return this._id;
    }

    static equal(a, b){
        return a._name === b._name;
    }

    toString(){
        return "" + this._name;
    }
}