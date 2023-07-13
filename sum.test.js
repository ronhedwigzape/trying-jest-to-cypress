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

