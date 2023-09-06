

class Shape {
    constructor() {
        this.color=''
    }
    setColor(chosenColor) {
        this.color= chosenColor;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="0,200 300,200 150,0" fill="${this.color}"/>`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="150" r="100" fill="${this.color}"/>`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}"/>`;
    }
}


module.exports = {Shape, Triangle, Circle, Square}
