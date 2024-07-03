import { Pet } from "./pet";
import { AnimalColor } from "./types/animal-color";
import { AnimalType } from "./types/animal-type";

export const cat = new Pet('barsik', AnimalType.Cat, AnimalColor.Black, 12);
console.log('isHungry', cat.isHungry);
cat.feeding();
console.log('isHungry', cat.isHungry);
console.log('_______');
console.log('age', cat.age);
cat.happyBirthdayMyPet();
console.log('age', cat.age);