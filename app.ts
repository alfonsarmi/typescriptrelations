/// <reference path="./circleMath.ts" />
/// <reference path="./rectangleMath.ts" />

import Circle = MyMath.Circle;
import calculateRectangle =  MyMath.Rectangle.calculateRectangle;

console.log(Circle.PI); // Prints: 3.14
console.log(Circle.calculateCircumference(10)); // Prints 31.42
console.log(calculateRectangle(25, 25)); // Prints: 625