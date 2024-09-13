export class Food {
    food_id!: number;
    name! : string;
    price! : number;
    description!:string;
    favorite: boolean = false;
    star: number = 0;
    tags!: string[];
    imageUrl!:string;
    cookingTime!:string;
    origins!:string[];


} 