
module.exports = () => {
    const axios = require('axios');
    var strr = [];
    axios.get('https://dog.ceo/api/breeds/list/all').then(response => {
        // returning the data here allows the caller to get it through another .then(...)
        strr.push(response.data);

    })
    return {  strr }

 

};