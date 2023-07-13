const sum = require('./sum')

// Arrange
it("Adds 1 + 1 to equal 2", () => {
    // Act
    const result = sum(1, 1);

    // Assert
    expect(result).toBe(2);
})