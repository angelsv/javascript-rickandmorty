// modules
import $ from 'jquery';
import 'bootstrap';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

// custom javascript for this project
import { goToPage } from './functions';
import { makeCard } from './functions';
import { pagination } from './functions';


// custom styles
import './styles.scss';

// document.getElementById('btn-alert').addEventListener('click', showAlert)

// functions on load
goToPage('character/?page=1', true);
// fetch('https://rickandmortyapi.com/api/character/?page=4')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (myJson) {
//         console.log(myJson);
        
//         pagination(myJson.info);

//         myJson.results.forEach(function (character) {
//             console.log(character);
//             makeCard(character);
//         });
//     });
