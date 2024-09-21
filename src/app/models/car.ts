export class Car 
{
    id:number;
    modelName:string;
    year:string;
    price:number;
    distance: number;
    engineType:string;
    sellerType:string;
    transmission:string;
    owner:string;
    constructor()
    {
        this.id=0;
        this.modelName='';
        this.year='';
        this.price=0;
        this.distance=0;
        this.engineType='';
        this.sellerType='';
        this.transmission='';
        this.owner='';
    }
}
