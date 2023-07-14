const axios = require('axios');

const fetchData = async (id) => {
    const results = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
    );
   console.log(results);
    return results.data;
}

fetchData(1).then(r => {
    console.log('Success!')
});

module.exports = fetchData;