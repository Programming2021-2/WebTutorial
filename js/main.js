var rowId=0;

document.getElementById("petsave-button").onclick = function(){
    rowId +=1;
    let pet ={
        dateInput: document.getElementById("date-input").value,
        ownerInput: document.getElementById("owner-input").value,
        petNameInput: document.getElementById("petname-input").value,
        petAgeInput: +document.getElementById("petage-input").value,
        petSpeciesInput: document.getElementById("petspecies-input").value,
        petSizeInput: document.getElementById("petsize-input").value,
    }
    let tr = document.createElement("tr");
    tr.setAttribute("id", "row-" + rowId);

    let tdId = document.createElement("td");
    tdId.innerHTML = rowId;
    tr.appendChild(tdId);
  
    Object.keys(pet).forEach((key)=> {
        console.log(key);
        let td = document.createElement("td");
        td.innerHTML=pet[key];
        tr.appendChild(td);
    });

    let tdActions = document.createElement("td");

    let input = document.createElement("input");
    input.setAttribute("id", "delete-" +rowId);
    input.setAttribute("type","button");
    input.value="Eliminar";
    input.onclick = function(){

        let id = this.getAttribute("id");
        //ya tenemos el id, ahora vamos a eliminar el registo
        id = +id.replace("delete-","");
        document.getElementById("row-" + id).remove();


        //console.log(this.getAttribute("id"));
    };

    tdActions.appendChild(input); 
    tr.appendChild(tdActions);

    document.getElementById("body-table").appendChild(tr);

};
document.getElementById("show-image").onclick = function(){
    fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => console.log(data));

};
















//comentarios

/*var rowId = 0;

document.getElementById("petsave-button").onclick = function () {
    rowId += 1;
    let pet = {
        dateInput: document.getElementById("date-input").value,
        ownerInput: document.getElementById("owner-input").value,
        petNameInput: document.getElementById("petname-input").value,
        petAgeInput: +document.getElementById("petage-input").value,
        petSpeciesInput: document.getElementById("petspecies-input").value,
        petSizeInput: document.getElementById("petsize-input").value,
    }
    //se crea el elemento pero este queda en el limbo, todavia no esta asignado a nada dentro de mi HTML
    let tr = document.createElement("tr");

    let tdId = document.createElement("td");
    tdId.innerHTML = rowId;
    tr.appendChild(tdId);
    //todas los objetos de js estan compuesto por claves y valores
    //al probar en consola las claves son una lista de strings
    //ya estamos seguros que podemos iterar sobre cada uno de los valores de la clave 

    Object.keys(pet).forEach((key) => {
        console.log(key);

        //dentro de este for hago lo mismo, 1.creo el elemento td que me representa una columna de una table en html
        let td = document.createElement("td");
        //le agrego todo el contenido que hay dentro de ese td a partir de innerHtml
        td.innerHTML = pet[key];
        //ya lo tengo contruido como lo quiero, ahora si lo pinto utilizando el appendChild en este caso pegandoselo al td
        tr.appendChild(td);
    });

    //aqui construyo mi input
    //1. creo el td que esta vacio
    let tdActions = document.createElement("td");
    //2.creo el input que hasta ahora esta vacio
    let input = document.createElement("input");
    //3.le agregamos el atributo type
    // le ponemos el valor "eliminar"
    //cuando considero que esta listo, le hago un appendal td
    input.setAttribute("type", "button");
    input.value = "Eliminar";
    tdActions.appendChild(input);

    //lo que falta es hacerle un append del td al tr
    tr.appendChild(tdActions);

    //ahora lo adjunto al td

    //la documentacion me pide que cree un elemento con el tag que se quiera, lo asignamos a una variable, todavia no se ha agregado al html, se intancia en memoria ram pero todavia no se agrega a la pagina web y para eso lo hago con el appendChild

    //el appendChild lo apunta como un nuevo hijo al body-table
    document.getElementById("body-table").appendChild(tr);

};

*/



/*var i = true;

var student = {
    name: "Pepito Perez",
    age: 20,
    faculty: "systems",
    active: true,
    sayHello: function () {
        console.log("Hey, my name is:", this.name);
    },
    sayHelloWithArrow: () => {
        let message = "HEY x2";
        console.log(message);
    }
};
var printMessage = function printMessage(i = false) {
    if (i) {
        console.log("Hello XD");
    } else {
        console.log("Good bye..");
    }
}*/
