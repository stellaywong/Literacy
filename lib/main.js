import * as parseData from './parseData';
import codeFlower from './codeFlower';
// const d3 = require('https://d3js.org/d3.v4.min.js');


let worldData = null;
let asiaData = null;
let europeData = null;
let africaData = null;
let northamericaData = null;
let southamericaData = null;
let oceaniaData = null;

document.addEventListener("DOMContentLoaded", () => {

    let continents = document.getElementsByClassName('btn');

    for(let i = 0; i < continents.length; i++) {
        continents[i].addEventListener('click', e => { renderData(e) });
    }
    

    d3.json('lib/literacy.json', function (error, data) { 
        if (error) throw error;    
        worldData = parseData.world(data);
        asiaData = parseData.asia(data);
        europeData = parseData.europe(data);
        africaData = parseData.africa(data);
        northamericaData = parseData.northamerica(data);
        southamericaData = parseData.southamerica(data);
        oceaniaData = parseData.oceania(data);
        // debugger

        codeFlower(oceaniaData);
        // the last line is THE default loading page
    })
    
    // codeFlower('../literacy.json');
});



function renderData(e) {
    switch (e.target.getAttribute('id')) {
        case "world":
            codeFlower(worldData);
            break;
        case "asia":
            codeFlower(asiaData);
            break;
        case "europe":
            codeFlower(europeData);
            break;
        case "africa":
            codeFlower(africaData);
            break;
        case "northamerica":
            codeFlower(northamericaData);
            break;
        case "southamerica":
            codeFlower(southamericaData);
            break;
        case "oceania":
            codeFlower(oceaniaData);
            break;
    }
}