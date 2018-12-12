'use strict';

// Definir variable, que será la ubicación en el html donde pintaremos la paleta de colores. Por ejemplo en un div con clase "palette".

// Voy a llamar a una api para cuando cargue la página que me salga una paleta con colores

/* 
Función que se ejecuta al cargar la página:
Hace un fetch
- Obtiene los datos del nombre
- Obtiene los datos de la imagen
- Pinta la paleta y el nombre en el html
*/

function init () {
    fetch('https://raw.githubusercontent.com/Adalab/dorcas-repaso-sprint2/master/data/palettes.json')
    .then(response => response.json())
    .then(function (data){
        // console.log(data) // Devuelve "{version: "v0.0.0", palettes: Array(5)}" con flechita hacia abajo con la que se pueden ver más datos. 'data' es un objeto.
        // console.log(data.palettes) // Devuelve el array de 'palettes'.

        const palettesArr = data.palettes; // Array de objetos, cada objeto una paleta
        let paletteList = document.querySelector('.palette-list');

        // Reseteamos contenido de lista de paletas
        paletteList.innerHTML = '';

        // Cada paleta es un objeto con nombre (campo name) y una lista de colores (campo colors)
        for (let i = 0; i < palettesArr.length; i++) {
            // Objeto de paleta
            let currentPalette = palettesArr[i];
            console.log(currentPalette.name);  // Nombre de la paleta
            console.log(currentPalette.colors);  // Array de colores

            // Creamos un elemento <li>
            let listItemElem = document.createElement('li');

            // Añadimos el nombre de la paleta como texto hijo del <li>
            let listItemContent = document.createTextNode(`${currentPalette.name}`);
            listItemElem.appendChild(listItemContent);

            // Por cada color de la paleta
            for (const color of currentPalette.colors) {
                // Creamos un elemento div con background color el de la paleta y le damos unas dimensiones para visualizarlo
                let divElem = document.createElement('div');
                divElem.style.backgroundColor = `#${color}`;
                divElem.style.width = '20px';
                divElem.style.height = '20px';
                divElem.style.display = 'inline-block';

                // Añadimos el div al <li> que nos ocupa
                listItemElem.appendChild(divElem);
            }

            // Finalmente, añadimos el <li> a la lista de paletas
            paletteList.appendChild(listItemElem);
        }
    })
}

init();

// console.log(fetch()); // Devuelve "Promise"
