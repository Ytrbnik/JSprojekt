"use strict";

class Rectangle {
    constructor(height, widht) {
        this.height = height;
        this.widht = widht;
    }

    calcArea() {
        return this.height * this.widht;
    }
}

class ColoredRectengelWithText extends Rectangle {
    constructor(height, widht, text, bgColor) {
        super(height, widht);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectengelWithText(10, 20, 'Hello World!', 'Red');

div.showMyProps();
console.log(div.calcArea());

/*
const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(long.calcArea());
console.log(square.calcArea());
*/