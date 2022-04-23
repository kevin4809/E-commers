const allItemes = document.getElementById("all-items")  
let carrito = {}

allItemes.addEventListener("click", e =>{
    addCarrito(e)
})

const addCarrito = e =>{

    //Busca cual de los elementos capturados tiene la classe "botones-compra"
    if(e.target.classList.contains("botones-compra")){
     
        //Agrega todos los elementos del div a un objeto 
        setCarrito(e.target.parentElement)
    }
}

const setCarrito = objeto =>{
    
    const producto ={
        title: objeto.querySelector('h2').textContent,
        id: objeto.querySelector('.botones-compra').id++,
        cantidad: 1
    }

    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad+1
    }

    carrito[producto.id] ={...producto}

    console.log(carrito)
}