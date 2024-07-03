import { subHours } from "date-fns";
import { AnimalColor } from "./types/animal-color";
import { AnimalType } from "./types/animal-type";

export class Pet {
    name: string;
    animalType: AnimalType;
    color: AnimalColor;
    age: number;
    happy: boolean;
    timeOfLastMeal: Date;

    constructor(name: string, animalType: AnimalType, color: AnimalColor, age: number) {
        this.name = name;
        this.animalType = animalType;
        this.color = color;
        this.age = age;
    }

    getInfo() {
        const info = `Your animal is: ${this.animalType} ${this.name} ${this.age}y.o. with ${this.color} color`;
        return info;
    }

    happyBirthdayMyPet() {
        this.age += 1;
    }

    petting() {
        this.happy = true;
        setTimeout(() => this.happy = false, 5000);
    }

    feeding() {
        this.timeOfLastMeal = new Date();
    }

    get isHungry() {
        return this.timeOfLastMeal > subHours(new Date(), 1);
    }
}