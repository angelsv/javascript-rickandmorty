import { create } from "domain";

var loading = document.createElement('div');
loading.setAttribute('class', 'col-sm-12 text-center');
var loading_ = document.createElement('div');
loading_.setAttribute('class', 'fa-3x');
var icon_loading = document.createElement('i');
icon_loading.setAttribute('class', 'fas fa-circle-notch fa-spin');
loading_.appendChild(icon_loading);
loading.appendChild(loading_);

export function makeCard(character) {
    var divCard = document.createElement("div");
    divCard.classList.add("card");

    var img = document.createElement("img");
    img.src = character.image;
    img.alt = character.name;

    divCard.appendChild(img);

    var divCardBody_0 = document.createElement("div");
    divCardBody_0.classList.add("card-body");

    var cardTitle = document.createElement("h5");
    cardTitle.classList.add('card-title');
    cardTitle.innerHTML = character.name;

    divCardBody_0.appendChild(cardTitle);

    var cardText = document.createElement("p");
    cardText.classList.add("card-text");
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    var date = new Date(character.created);
    cardText.innerHTML = 'Created: ' + date.getDate() + ' - ' + months[date.getMonth()] + ' - ' + date.getFullYear();

    divCardBody_0.appendChild(cardText);
    divCard.appendChild(divCardBody_0);

    var cardUl = document.createElement("ul");
    cardUl.setAttribute('class', 'list-group list-group-flush');

    var cardLi_0 = document.createElement('li');
    cardLi_0.classList.add('list-group-item');
    cardLi_0.innerHTML = 'Status: ' + character.status;
    cardUl.appendChild(cardLi_0);

    var cardLi_1 = document.createElement('li');
    cardLi_1.classList.add('list-group-item');
    cardLi_1.innerHTML = 'Species: ' + character.species;
    cardUl.appendChild(cardLi_1);

    divCard.appendChild(cardUl);

    var divCardBody_1 = document.createElement("div");
    divCardBody_1.classList.add("card-body");

    var cardLink = document.createElement('a');
    cardLink.classList.add('card-link');
    cardLink.href = 'character.html?id=' + character.id;
    // var linkText = document.createTextNode("my title text");
    // cardLink.addEventListener('click', function () { goToPage('character/' + character.id, false) }, false);
    cardLink.innerHTML = 'Detail: id#' + character.id;

    divCardBody_1.appendChild(cardLink);
    divCard.appendChild(divCardBody_1);

    var divCol = document.createElement("div");
    divCol.classList.add("col-sm-3");

    divCol.appendChild(divCard);

    var cont = document.getElementById("div-container");
    cont.appendChild(divCol);
}

export function showOne(data){

    var divCard = document.createElement('div');
    divCard.setAttribute('class', 'card');

    var divRow = document.createElement('div');
    divRow.setAttribute('class', 'row no-gutters');

    var divCol = document.createElement('div');
    divCol.classList.add('col-md-4');

    var img = document.createElement('img');
    img.src = data.image;
    img.classList.add('card-img');
    img.alt = data.name;

    divCol.appendChild(img);
    divRow.appendChild(divCol)

    var div8 = document.createElement('div');
    div8.classList.add('col-md-8');

    var divBody = document.createElement('div');
    divBody.classList.add('card-body');

    var h5 = document.createElement('h5');
    h5.classList.add('card-title');
    h5.innerHTML = data.name;

    divBody.appendChild(h5);

    var p0 = document.createElement('p');
    p0.classList.add('card-text');
    
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    var date = new Date(data.created);
    p0.innerHTML = 'Created: ' + date.getDate() + ' - ' + months[date.getMonth()] + ' - ' + date.getFullYear();
    divBody.appendChild(p0);

    var p1 = document.createElement('p');
    p1.classList.add('card-text');
    p1.innerHTML = 'Gender: ' + data.gender;
    divBody.appendChild(p1);

    var p2 = document.createElement('p');
    p2.classList.add('card-text');
    p2.innerHTML = 'Species: ' + data.species;
    divBody.appendChild(p2);

    var p3 = document.createElement('p');
    p3.classList.add('card-text');
    p3.innerHTML = 'Status: ' + data.status;
    divBody.appendChild(p3);

    var p4 = document.createElement('p');
    p4.classList.add('card-text');
    p4.innerHTML = 'Episodes: ' + data.episode.length;
    divBody.appendChild(p4);

    div8.appendChild(divBody);
    divRow.appendChild(div8);
    divCard.appendChild(divRow);

    var div12 = document.createElement('div');
    div12.classList.add('col-sm-12');

    div12.appendChild(divCard);

    var cont = document.getElementById("div-container");
    cont.innerHTML = '';
    cont.appendChild(div12);

    // list episodes
    listEpisodesCharacter(data.episode);

}

export function listEpisodesCharacter(episodes){

    var div = document.createElement('div');
    div.classList.add('card');

    var divBody = document.createElement('div');
    divBody.setAttribute('class', 'card-body');

    episodes.forEach(function (item) {
        var episode_arr = item.split('/');
        var episode = episode_arr[episode_arr.length-1];

        var link = document.createElement('a');
        // link.href = 'javascript:;';
        link.setAttribute('class', 'btn btn-info');
        link.href = 'episode.html?id=' + episode;
        var text = 'Episode ' + episode;
        
        link.innerHTML = text;
        divBody.appendChild(link);
    });

    div.appendChild(divBody);

    var div12 = document.createElement('div');
    div12.classList.add('col-sm-12');
    div12.appendChild(div);

    document.getElementById('div-container').appendChild(div12);
}

export function pagination(data, page) {

    var navigation = document.getElementById('navigation');
    navigation.innerHTML = '';

    var liPre = document.createElement('li');
    liPre.classList.add('page-item');
    
    var a = document.createElement('a');
    a.classList.add('page-link');
    a.innerHTML = '<span aria-hidden="true">&laquo;</span>';
    
    if (parseInt(page) > 1) {
        a.href = './?id=' + (parseInt(page) - 1);
    }else{
        liPre.classList.add('disabled');
    }

    liPre.appendChild(a);
    navigation.appendChild(liPre);

    var limit = 3;
    var prev, next = false;
    for (var i = 1; i < data.pages + 1; i++) {

        if (
            i > (page + limit) && page < data.pages && !next
        ) {
            var liPre = document.createElement('li');
            liPre.setAttribute('class', 'page-item disabled');

            var a = document.createElement('a');
            a.setAttribute('class', 'page-link');
            a.innerHTML = '<span aria-hidden="true">...</span>';

            liPre.appendChild(a);
            navigation.appendChild(liPre);

            next = true;
        }

        var li = document.createElement('li');
        li.classList.add('page-item');

        var a = document.createElement('a');
        a.classList.add('page-link');
        a.innerHTML = i;
        
        if (page != i) {
            a.href = './?id=' + i;
        } else {
            li.classList.add('active');
        }
        li.appendChild(a);

        if( 
            ( i==1 || i==data.pages ) 
            || 
            ( i > (page - limit) && i < (page + limit) ) 
            ){
            navigation.appendChild(li);
        }


        if (
            i < (page - limit) && page > i && !prev
        ) {
            var liPre = document.createElement('li');
            liPre.setAttribute('class', 'page-item disabled');

            var a = document.createElement('a');
            a.setAttribute('class', 'page-link');
            a.innerHTML = '<span aria-hidden="true">...</span>';

            liPre.appendChild(a);
            navigation.appendChild(liPre);

            prev = true;
        }

    }

    var liNext = document.createElement('li');
    liNext.classList.add('page-item');

    var a = document.createElement('a');
    a.classList.add('page-link');
    a.innerHTML = '<span aria-hidden="true">&raquo;</span>';
    if (parseInt(page) < parseInt(data.pages)) {
        a.href = './?id=' + (parseInt(page) + 1);
    }else{
        liNext.classList.add('disabled');
    }
    liNext.appendChild(a);
    navigation.appendChild(liNext);
}

const apiUrl = 'https://rickandmortyapi.com/api/';

export function goToPage(page, multiple) {
    var cont = document.getElementById("div-container");
    cont.innerHTML = '';
    cont.appendChild(loading);

    // document.getElementById('div-pagination').style.visibility = "hidden";

    var episode = page.split('/') ;

    fetch(apiUrl + page)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {

            // if multiple
            if (multiple) {
                // document.getElementById('div-pagination').style.visibility = "visible";
                var url_next = new URL(apiUrl + page);
                var next = parseInt(url_next.searchParams.get("page"));
                cont.innerHTML = '';
                pagination(myJson.info, next);
                myJson.results.forEach(function (element) {
                    makeCard(element);
                });
            }else if( episode[0]=='episode' ){
                showEpisode(myJson);
            } else {
                showOne(myJson);
            }

        });
}

export function showEpisode(data){

    var card = document.createElement('div');
    card.setAttribute('class', 'card border-dark mb-3');

    var header = document.createElement('div');
    header.setAttribute('class', 'card-header');
    header.innerHTML = 'Episode code: ' + data.episode;

    card.appendChild(header);

    var body = document.createElement('div');
    body.setAttribute('class', 'card-body text-dark');

    var h5 = document.createElement('h5');
    h5.setAttribute('class', 'card-title');
    h5.innerHTML = 'Episode Name: ' + data.name;

    body.appendChild(h5);

    var p = document.createElement('p');
    p.setAttribute('class', 'card-text');
    p.innerHTML = 'Air date: ' + data.air_date;

    body.appendChild(p);

    var p0 = document.createElement('p');
    p0.setAttribute('class', 'card-text');
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    var date = new Date(data.created);
    p0.innerHTML = 'Created: ' + date.getDate() + ' - ' + months[date.getMonth()] + ' - ' + date.getFullYear();

    body.appendChild(p0);
    card.appendChild(body);

    var cont = document.getElementById('div-container');
    cont.innerHTML = '';

    var div = document.createElement('div');
    div.classList.add('col-sm-12');
    
    div.appendChild(card);
    cont.appendChild(div);

}