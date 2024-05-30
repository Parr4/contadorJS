precio = 1800;
// let precioTotal = 0 ;
console.log(precio);
// console.log(precioTotal);
// alert(precio * 2)
precioItem = document.querySelector(".precio-base");
precioItem.innerHTML = precio;

precioItem.innerHTML = precio;
let cantidad = 0
contador = document.querySelector(".cantidad");
contador.innerHTML = cantidad;

total = document.querySelector(".valor-total");
total.innerHTML = cantidad * precio;


// precioItem.document.getElementsByClassName(".precio-base");
console.log(precioItem)

let sumar = document.querySelector("#sumar")
let restar = document.querySelector("#restar")


sumar.addEventListener("click", ()=>{suma()})
restar.addEventListener("click", ()=>{resta()})


function suma(){
    cantidad = cantidad + 1,
    contador.innerHTML = cantidad,
    actTotal()

}

function resta(){
    if (cantidad <= 0){
        alert("No puedes quitar mas productos")
    } else {
    cantidad = cantidad - 1,
    contador.innerHTML = cantidad,
    actTotal()
}
}

function actTotal(){
    total.innerHTML = cantidad * precio;
}