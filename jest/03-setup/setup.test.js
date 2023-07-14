
let animals = []

// beforeAll(() => {
//     console.log('Before All')
//     animals = ['elephant', 'zebra', 'bear', 'tiger']
// })

// every test will initialize this, it will run this before each on all group of tests here
// beforeEach(() => {
//     console.log('Before each')
//     animals = ['elephant', 'zebra', 'bear', 'tiger']
// })

// afterEach(() => {
//     console.log('After each')
//     animals = ['elephant', 'zebra', 'bear', 'tiger']
// })
//
// afterAll(() => {
//     console.log('After all')
//     animals = ['elephant', 'zebra', 'bear', 'tiger']
// })

describe('animals array', function () {

    // initialize and run only in this group of test
    beforeEach(() => {
        console.log('Before each')
        animals = ['elephant', 'zebra', 'bear', 'tiger']
    })

    it('should add animal to end of array', function () {
        animals.push('aligator');
        expect(animals[animals.length - 1]).toBe('aligator');
    });

    it('should add animal to beginning of array', function () {
        animals.unshift('monkey');
        expect(animals[0]).toBe('monkey')
    });

    it('should have initial length of 4', function () {
        expect(animals.length).toBe(4);
    });
});

describe('testing something else', function () {
    // it.only if you want to test this only, and skipped the tests above
    it.only('true should be truthy', function () {
        expect(true).toBeTruthy()
    });
});