module.exports = () => {
    const axios = require('axios');
    var strr = [];

    function axiosTest() {
        axios.get('https://dog.ceo/api/breeds/list/all').then(response => {
            // returning the data here allows the caller to get it through another .then(...)
            strr.push(response.data);
        })
    }
    axiosTest();


    let users = [
        { id: 1, name: "John" },
        { id: 2, name: "Pete" },
        { id: 3, name: "Mary" }
    ];

    let user = users.find(item => item.id == 1);

    console.log(user.name);
    [1, -2, 15, 2, 0, 8].sort(function(a, b) {
        console.log( a + " <> " + b );
      });


































































    return { strr };
}
