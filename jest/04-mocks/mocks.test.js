const axios = require('axios')

const fetchData = async (id) => {
    const results = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    console.log(results)
    return results.data;
}
const forEach = (items, callback) => {
    for (let i = 0; i < items.length; i++) {
        callback(items[i]);
    }
}

const mock = (x) => 42 + x;

it('mock callback', function () {
    const mockCalledBack = jest.fn(x => 42 + x);

    forEach([0,1],mockCalledBack);

    expect(mockCalledBack.mock.calls.length).toBe(2)
    // [ call1, call2 ]
    expect(mockCalledBack.mock.calls[0][0]).toBe(0);

    expect(mockCalledBack.mock.calls[1][0]).toBe(1);

    expect(mockCalledBack.mock.results[0].value).toBe(42);

    expect(mockCalledBack.mock.results[1].value).toBe(43);

});

it('should mock return', function () {
    const mock = jest.fn();

    mock.mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce('hello')

    const results = mock();
    const results1 = mock();
    const results2 = mock();

    expect(results).toBe(true);
    expect(results1).toBe(false);
    expect(results2).toBe('hello');
});

it('should mock axios', async () => {
    jest.spyOn(axios, 'get').mockReturnValueOnce({
        data: {
            id: 1,
            todo: 'Get 3M for Logo'
        }
    })
    const results = await fetchData(1);

    expect(results.todo).toBe('Get 3M for Logo');
});