//https://javascript.info/json
module.exports = () => {
    const axios = require('axios');


    var strr = [];
    axios.get('https://dog.ceo/api/breeds/list/all')
        .then(function (response) {
            strr.push(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    return {
        wimeData: strr
    }
};
