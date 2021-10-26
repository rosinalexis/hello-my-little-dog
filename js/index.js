import 'regenerator-runtime/runtime';
import axios from 'axios';

//les constantes
const main = document.querySelector("main");


//les fonctions utilies pour le projet
const utils = {
    pageContent: function (title, content, btn) {
        document.querySelector("h1").innerHTML = title;
        main.innerHTML = content;
        main.classList = "";
        document.querySelector(".btn-container").innerHTML = btn;
    },

    getDogsInformation: function () {
        axios.head()
        axios.get('https://fakerapi.it/api/v1/custom?_quantity=5&name=name&race=pokemon&image=image&description=text')
            .then(response => {
                main.innerHTML = '';
                let rowEl = document.createElement('div');
                rowEl.classList.add('row');


                response.data.data.forEach(element => {

                    // création d'une div 
                    let carteEl = document.createElement('div');
                    carteEl.classList.add('card')
                    carteEl.classList.add('p-0')
                    carteEl.classList.add('col-3')
                    carteEl.classList.add('my-2')
                    carteEl.classList.add('mx-1')
                    carteEl.innerHTML = `
                        <img src="${element.image}" class="card-img-top" widht="100px">
                        <div class ="card-body">
                        <h5 class ="card-title">${element.name}</h5>
                        <p class ="card-text">
                        <strong>Race :</strong>${element.race}<br/>
                        <strong>Description</strong>${element.description}
                        </p>
                        </div>
                    
                    `
                    rowEl.appendChild(carteEl);
                });
                main.appendChild(rowEl);

            })
            .catch(error => {
                main.innerHTML = `Error : ${error.message}`;
                console.error('There was an error!', error);
            })
    },

};

//objet page
const page = {

    lobby: function () {
        utils.pageContent(
            "Liste des Chiens sur le site <i id='reboot' class='fas fa-dog'></i>",
            null,
            "<button id='start' class='mx-5 btn btn-light text-uppercase fw-bold'> voir la liste <i class='fas fa-play-circle'></i></button>",
        );
    },

    routine: function () {
        utils.pageContent("Routine", "Exercice avec chrono", null);
    },

    finish: function () {
        utils.pageContent(
            "C'est terminé !", "<button id='start' class='mx-5 btn btn-light'>Recommencer</button>", "<button id='reboot' class='mx-5 btn btn-light'>Réinitialiser <i class='fas fa-times-circle'></i> </button>"
        )
    }
};


utils.getDogsInformation();


