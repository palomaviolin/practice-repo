# EJERCICIO DE REPASO (Sprint2 de Adalab):

En este ejercicio trabajaremos con una [url que contiene información de 5 paletas de colores](https://raw.githubusercontent.com/Adalab/dorcas-repaso-sprint2/master/data/palettes.json).

Datos a tener en cuenta antes de empezar:
- Crear todas las carpetas y archivos desde la terminal con `mkdir` y `touch`.
- Escribir *antes* el planteamiento de cómo se hará el código JavaScript.
- Utilizar siempre `console.log()` para comprobar que va funcionando nuestro código.
- Recordar vincular correctamente los archivos *main.js* y *main.css*. Hacer una comprobación sencilla.
- Primero crear el repo, luego clonarlo, después creamos una RAMA y será ahí donde trabajemos.

Con la url dada, hacer una petición de información para:
1. Pintar en la consola un listado con los nombres de cada paleta de colores.
2. Pintar en el HTML dicho listado con los nombres de cada paleta de colores.
3. Pintar en la consola un listado de los colores que contiene cada paleta.
4. Pintar en el HTML dicho listado con los colores que contiene cada paleta.
5. Hacer que el listado de los colores de cada paleta se convierta realmente en una paleta de colores, por ejemplo un div que contenga los cuadraditos con el color de la paletas.

# PISTAS de la facilitadora (Nasiba) para realizar el ejercicio:

- Ejemplo de un array con dos objetos. Después un `for` que hace que para cada vuelta coge el primer item del array, luego en la segunda vuelta el segundo. Luego en la variable `currentAdalaber` se guarda la información de cada objeto en cada vuelta (en el orden en el que aparecen , de arriba hacia abajo).
```
const adalabers [
    {
        name: 'Marina',
        hair: 'brown'
    }
    {
        name: 'Altea',
        hair: 'black'
    }
]

for(let i=0; i<adalabers.length;i++){
   let currentAdalaber = adalabers[i];
}
```

- Este for+of funciona como antes en el caso del `for` donde pone `adalabers[i];`
```
for (const currentAdalaber of adalabers){
    console.log(currentAdalaber); 
}
```

- Para poner los colores de las paletas: `<div style="background-color:red;">` 