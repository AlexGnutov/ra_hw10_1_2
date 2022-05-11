import {v4} from "uuid";

export class ServiceModel{
    constructor(title, price) {
        this.id = v4();
        this.title = title;
        this.price = price;
    }
}
