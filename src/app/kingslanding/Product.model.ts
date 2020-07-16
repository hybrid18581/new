export class Product {
    public id:number;
    public price:number;
    public name:string;
    public imageurl:string;

    constructor ( id:number, price:number, name:string, imageurl:string,){
        this.name = name;
        this.price=price;
        this.id= id;
        this.imageurl = imageurl;
    }

}
