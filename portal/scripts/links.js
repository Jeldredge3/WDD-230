
const requestURL = 'portal/data/data.json'; // retrieve the local JSON file
const output = document.querySelector("#json-ouput")

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject) // check for valid response
        const list_1 = jsonObject['week01']; // store results in an array
        const list_2 = jsonObject['week02']; 
        const list_3 = jsonObject['week03']; 
        const list_4 = jsonObject['week04']; 
        list_1.forEach(createObj); // loop through each item in the array, call a function to create <a> elements
        list_2.forEach(createObj);
        list_3.forEach(createObj);
        list_4.forEach(createObj);
    });

function createObj(item) {
    let li = document.createElement('li');
    let link = document.createElement('a');
    
}

    //outputDiv.textContent = url.;


    'https://designer.mocky.io/'