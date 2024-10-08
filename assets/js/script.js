let listaNombresGastos = [];
let listaValoresGastos = [];

//accion del boton AGREGAR GASTO
function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    console.log(nombreGasto);
    console.log(valorGasto);
    
    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    console.log(nombreGasto);
    console.log(valorGasto);
    //alert ('clic ususario');
    actualizarListasGastos();
}

function actualizarListasGastos(){
    //1.agrega en una lista los gastos registrados
    const listaElementos = document.getElementById('listaDeGastos');
    //2.suma el total de los gastos
    const totalElementos = document.getElementById('totalGastos');

    //1.creacion de una lista HTML con JS
    let htmlLista = '';
    let totalGasto = 0;
    listaNombresGastos.forEach((elemento,posicion) => {
         
       const valorGasto = Number(listaValoresGastos[posicion]);
       //ensena la informacion agregada en la pagina principal 
        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)}

       //boton editar
        <button onclick="editarGasto(${posicion});">Editar</button>

        //boton eliminar
        <button onclick="eliminarGasto(${posicion});">Eliminar</button>
        </li>`
     //2.suma el total gastos
     totalGasto += Number(valorGasto);
     console.log(totalGasto);
    })
    //1.sustitucion de la lista en el HTML por el creado en JS
    listaElementos.innerHTML = htmlLista;
    //2.sustitucion de la suma total en el HTML por el creado en JS
    totalElementos.innerHTML = totalGasto.toFixed(2);
    limpiar();
}
//limpia las casillas de registro
function limpiar(){
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}
//elimina elemento seleccionado
function eliminarGasto(posicion){
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    actualizarListasGastos();
}
//edita gasto seleccionado
function editarGasto(posicion){
    const cajaNombreGasto =  document.getElementById('nombreGasto');
    const cajaValorGasto = document.getElementById('valorGasto');
}