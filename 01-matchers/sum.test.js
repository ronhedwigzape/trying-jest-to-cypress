const sum = require('./sum');

// Arrange

describe("Example Tests", () => {
    it("Adds 1 + 1 to equal 2", () => {
        // Act
        const result = sum(1, 1);

        // Assert
        expect(result).toBe(2);
    });

    it("Object assignment", () => {
        const obj = {};

        // .toBe() is not like .toEqual()
        // expect(obj).toBe({})

        // If you want to look at equality of object you might want to use .toEqual()
        expect(obj).toEqual({});

    });
});


describe("truthy or falsy", () => {
    it('null', () => {
        const n = 0;

        // says it's better to have one expect, but i think it is good to have many conditions
        expect(n).toBeFalsy();
        expect(n).not.toBeTruthy()
        // expect(n).toBeNull()
        // expect(n).not.toBeUndefined()
    })
})

describe('numbers', () => {
    it('two plus two', function () {
        const value = 2 + 2;

        // this is miss one, miss all
        expect(value).toBe(4);
        expect(value).toBeGreaterThan(3)
        expect(value).toBeGreaterThanOrEqual(4)
        expect(value).toBeLessThan(5)
        expect(value).toBeLessThanOrEqual(4)
    });


    it('should be adding floats', function () {
        const value = 0.1 + 0.2;
        expect(value).toBeCloseTo(0.3)
        expect(value).toBeCloseTo(0.299999999)
    });
})


describe('strings', function () {
    it('should there is no I in team', function () {
        expect('team').not.toMatch(/I/)
    });
});

describe('arrays', function () {
    const shoppingLists = [
        'diapers', 'kleenex', 'trash bags', 'paper towels', 'milk'
    ]
    it('should have milk', function () {
        expect(shoppingLists).toContain('milk')
    });
});

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK')
}

describe('exceptions', function () {
    it('should compile android goes as expected', function () {
        expect(() => compileAndroidCode().toThrow('you are using the wrong JDK'))
    });
});