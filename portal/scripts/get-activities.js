/* JSON Reader Code */
const requestLocal = '../portal/data/assignments.json';
//const requestURL = 'https://jeldredge3.github.io/WDD-230/portal/data/assignments.json'
const requestURL = 'https://run.mocky.io/v3/32e7422d-3f73-452e-a1fd-a9fff28765b9'

const week01 = document.querySelector('#week01');
const week02 = document.querySelector('#week02');
const week03 = document.querySelector('#week03');
const week04 = document.querySelector('#week04');
const week05 = document.querySelector('#week05');
const week06 = document.querySelector('#week06');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const assignments = jsonObject['assignments'];
    assignments.forEach(displayAssignments); 
  });

  console.log("Page is loaded");

function displayAssignments(assignment) {
    const week = assignment.week;
    const name = assignment.name;
    const url = assignment.url;
    
    /* Create elements */
    let p = document.createElement('p');
    let a = document.createElement('a');
  
    /* Combine first & last name, add text to birthdate & birthplace information */
    a.textContent = name;

    /* Build image using 'src', 'alt', 'loading', 'width', and 'height' */
    a.setAttribute('href', url);
  
    // Add/append the existing HTML div with the cards class with the section(card)

    switch(week) {
      case "1":
        week01.appendChild(a);
        break;
      case "2":
        week02.appendChild(a);
        break;
      case "3":
        week03.appendChild(a);
        break;
      case "4":
        week04.appendChild(a);
        break;
      case "5":
        week05.appendChild(a);
        break;
      case "6":
        week06.appendChild(a);
        break;
    }
}
