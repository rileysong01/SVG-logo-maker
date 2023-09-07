const { Shape, Triangle, Circle, Square } = require('../lib/shapes.js')

describe('Shape', () => {
    describe('Instantiate', () => {
        it('should be an instance of Shape class', () => {
            const shape = new Shape();
            expect(shape).toBeInstanceOf(Shape);
        })
    })
    describe('Color', () => {
        it('should set color properly', () => {
            const shape = new Shape();
            const color = 'blue';
            shape.setColor('blue');
            expect(shape.color).toBe(color);
        })
    })
})

describe('Circle', () => {
    it('should set circle color properly', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="150" r="100" fill="blue"/>');
    })


})

describe('Triangle', () => {
    it('should set triangle color properly', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points=\"150,0 300,300 0,300\" fill=\"blue\"/>');
    })
})

describe('Square', () => {
    it('should set square color properly', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="blue"/>');
    })
})