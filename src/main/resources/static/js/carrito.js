
//------------------------CARRITO DE COMPRAS-------------------------------

const carrito = [];
    var total = 0;
    console.log('Total:', total);
function mostrarContador(boton) {
    var contador = boton.nextElementSibling;
    contador.style.display = 'block';
    boton.style.display = 'none';

    var nombreProducto = boton.parentNode.querySelector('h2').textContent;
    var precioProducto = boton.parentNode.querySelector('.precio').textContent;
    // Obtén la URL de la imagen del producto desde el botón
    var productoImagen = boton.parentNode.querySelector('img');
    var src = productoImagen.getAttribute('src');
    // Obtener el id del producto desde el atributo data-id del botón
    var id = boton.getAttribute('data-id');

    // Verificar si el producto ya está en el carrito y actualizar la cantidad en lugar de agregar uno nuevo
    const productoExistente = carrito.find(item => item.nombre === nombreProducto);

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({
            nombre: nombreProducto,
            precioUnitario: parseFloat(precioProducto),
            cantidad: 1,
            subtotal: parseFloat(precioProducto),
            imagen: src,
            id: id, // Agregar el id del producto al objeto del carrito
        });
    }

   agregarProductoAlResumen(carrito);
    console.log('carrito en mostrarboton:',carrito);
return carrito;

    var finalizarCompraBtn = document.getElementById('finalizarCompraBtn');
    finalizarCompraBtn.disabled = carrito.length === 0;

}

function cambiarCantidad(elemento, cambio) {
    var inputCantidad = elemento.parentNode.querySelector('input');
    var cantidad = parseInt(inputCantidad.value) + cambio;

    if (cantidad < 0) {
        cantidad = 0; // No permitir cantidades menores a 0
    }

    // Mostrar el botón "Añadir al menú" si la cantidad es 0
    var boton = inputCantidad.parentNode.previousElementSibling;
    if (cantidad === 0) {
        boton.style.display = 'block';
        elemento.parentNode.style.display = 'none';

        // Eliminar el producto del carrito si la cantidad es 0
        var nombreProducto = boton.parentNode.querySelector('h2').textContent;
        const index = carrito.findIndex(item => item.nombre === nombreProducto);
        if (index !== -1) {
            carrito.splice(index, 1);
        }
        } else {
        boton.style.display = 'none';
        inputCantidad.value = cantidad;

        var nombreProducto = boton.parentNode.querySelector('h2').textContent;
        // Actualiza la cantidad en el carrito
        const productoExistente = carrito.find(item => item.nombre === nombreProducto);
        if (productoExistente) {
            productoExistente.cantidad = cantidad;
            var precioProducto = boton.parentNode.querySelector('.precio').textContent;
            var subtotal = cantidad * parseFloat(precioProducto); // Calcula el subtotal
            productoExistente.subtotal = subtotal;
            const total = calcularTotal(carrito);
            agregarProductoAlResumen(carrito);

        }
    }
}

function calcularTotal(carrito) {
    let total= 0;
    for (const producto of carrito) {
        total += producto.subtotal;
    }
     console.log('Total en calcularTotal:', total);
    return total;
}


 const finalizarCompraButton = document.getElementById("finalizarCompra");
 const resumenCompraSection = document.getElementById("resumenCompra");
 const seleccionMetodoPagoSection = document.getElementById("seleccionMetodoPago");

        // Lógica para mostrar el resumen de compra al hacer clic en "Finalizar compra"
        finalizarCompraButton.addEventListener("click", () => {
         var total_productos_comprados = 0;


           // Muestra el resumen de compra y oculta el botón "Finalizar compra"
                     resumenCompraSection.style.display = "block";
                     finalizarCompraButton.style.display = "none";
                 });

const $contenedor__pedidos = document.getElementById("contenedor__pedidos");


function agregarProductoAlResumen(carrito) {
    const contenedorPedidos = document.getElementById("contenedor__pedidos");
    contenedorPedidos.innerHTML = '';

    carrito.forEach(producto => {

        const productoResumen = document.createElement('div');
        productoResumen.className = "producto";


        const productoImagen = document.createElement('img');
        productoImagen.src = producto.imagen; // Utiliza la propiedad imagen del producto
        productoImagen.alt = 'Imagen';
        productoImagen.className = "imagen"; // Corrige la clase
        productoImagen.width = 200;
        const nombreProducto = document.createElement('h3');
        nombreProducto.className = "nombre-producto";
        nombreProducto.innerHTML = producto.nombre;

        const cantidad = document.createElement('p');
        cantidad.className = "cantidad";
        cantidad.innerHTML= `Cantidad: ${producto.cantidad}`;
        const subtotal = document.createElement('p');
        subtotal.className = "subtotal";
        subtotal.innerHTML = `Subtotal: $${producto.subtotal}`;

        productoResumen.appendChild(productoImagen);
        productoResumen.appendChild(nombreProducto);
         productoResumen.appendChild(cantidad);
        productoResumen.appendChild(subtotal);


        contenedorPedidos.appendChild(productoResumen);
        let total = calcularTotal(carrito);
        document.getElementById('total').textContent = `Total de la Compra: $${total}`;

    });
}


function obtenerFoto(carrito) {
  const mime = 'image/jpeg';
  const dataURL = `data:${mime};base64,${pedidos.producto.foto.contenido}`;

  return dataURL;
}



function finalizarCompra() {
 const metodoPago = metodoPagoSeleccionado;
  const metodoEntrega = modoEntregaSeleccionado;


    let mensajeWhatsApp = 'Hola PipiCucu! Quiero comprar los siguientes productos:\n';

    carrito.forEach(producto => {
        mensajeWhatsApp += `- ${producto.cantidad}  ${producto.nombre}, Subtotal: $${producto.precioUnitario * producto.cantidad}\n`;
    });

    // Calcula el total de la compra
    const total = carrito.reduce((total, producto) => total + producto.precioUnitario * producto.cantidad, 0);
    mensajeWhatsApp += `\nTotal de la compra: $${total}\nMétodo de Pago: ${metodoPago}\nModo de Entrega: ${metodoEntrega}`;

    // Abre WhatsApp con el mensaje
    const tel = '+5493513364508'; // Reemplaza con el número de teléfono al que deseas enviar el mensaje
    const encodedMensaje = encodeURIComponent(mensajeWhatsApp);
    const urlWp = `https://wa.me/${tel}?text=${encodedMensaje}`;
    window.open(urlWp);
}

//--------------CHECKBOX PARA ELEGIR FORMA DE PAGO Y METODO DE ENTREGA----------------------------------


const checkboxEfectivo = document.getElementById('checkbox-efectivo');
const checkboxTransferencia = document.getElementById('checkbox-transferencia');
const checkboxMP = document.getElementById('checkboxMP');
const checkboxRetiro = document.getElementById('checkbox-retiro');
const checkboxEnvio = document.getElementById('checkbox-envio');

const checkmarkEfectivo = document.querySelector('.checkmark.efectivo');
const checkmarkTransferencia = document.querySelector('.checkmark.transferencia');
const checkmarkMP = document.querySelector('.checkmark.mp');
const checkmarkRetiro = document.querySelector('.checkmark.retiro');
const checkmarkEnvio = document.querySelector('.checkmark.envio');

const metodosPago = document.querySelectorAll('[name="metodo-pago"]');
const modosEntrega = document.querySelectorAll('[name="modo-entrega"]');


const finalizarCompraBtn = document.getElementById("finalizarCompraBtn")




checkboxEfectivo.addEventListener('change', function () {
  if (checkboxEfectivo.checked) {
    checkmarkEfectivo.style.backgroundColor = '#000000';
  } else {
    checkmarkEfectivo.style.backgroundColor = '#FFFFFF';
  }
});

checkboxTransferencia.addEventListener('change', function() {
  if (checkboxTransferencia.checked) {
    checkmarkTransferencia.style.backgroundColor = '#000000';
  } else {
    checkmarkTransferencia.style.backgroundColor = '#FFFFFF';
  }
});

checkboxMP.addEventListener('change', function() {
  if (checkboxMP.checked) {
    checkmarkMP.style.backgroundColor = '#000000';
  } else {
    checkmarkMP.style.backgroundColor = '#FFFFFF';
  }
});


checkboxRetiro.addEventListener('change', function() {
  if (checkboxRetiro.checked) {
    checkmarkRetiro.style.backgroundColor = '#000000';
  } else {
    checkmarkRetiro.style.backgroundColor = '#FFFFFF';
  }
});

checkboxEnvio.addEventListener('change', function() {
  if (checkboxEnvio.checked) {
    checkmarkEnvio.style.backgroundColor = '#000000';
  } else {
    checkmarkEnvio.style.backgroundColor = '#FFFFFF';
  }
});


//-------------FUNCIONES PARA QUE SE SELECCIONE SOLO UNA OPCION----------------
function gestionarCambioMetodoPago(checkboxSeleccionado) {
  metodosPago.forEach(checkbox => {
    if (checkbox !== checkboxSeleccionado) {
      checkbox.checked = false;
      checkbox.parentElement.querySelector('.checkmark').style.backgroundColor = '#FFFFFF';
    }
  });

  if (checkboxSeleccionado.checked) {
    checkboxSeleccionado.parentElement.querySelector('.checkmark').style.backgroundColor = '#000000';
  } else {
    checkboxSeleccionado.parentElement.querySelector('.checkmark').style.backgroundColor = '#FFFFFF';
  }
}

function gestionarCambioModoEntrega(checkboxSeleccionado) {
  modosEntrega.forEach(checkbox => {
    if (checkbox !== checkboxSeleccionado) {
      checkbox.checked = false;
      checkbox.parentElement.querySelector('.checkmark').style.backgroundColor = '#FFFFFF';
    }
  });

  if (checkboxSeleccionado.checked) {
    checkboxSeleccionado.parentElement.querySelector('.checkmark').style.backgroundColor = '#000000';
  } else {
    checkboxSeleccionado.parentElement.querySelector('.checkmark').style.backgroundColor = '#FFFFFF';
  }
}

metodosPago.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    gestionarCambioMetodoPago(this);
    comprobarHabilitarBoton()
  });
});

modosEntrega.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    gestionarCambioModoEntrega(this);
    comprobarHabilitarBoton()
  });
});


//------------------PARA HABILITAR EL BOTON DE FINALIZAR COMPRA------------------------------
let metodoPagoSeleccionado
let modoEntregaSeleccionado
let entregaSeleccionada
let pagoSeleccionado

function comprobarHabilitarBoton() {
  entregaSeleccionada = false
  pagoSeleccionado = false

  metodosPago.forEach(check => {
    if (check.checked) {
      metodoPagoSeleccionado = check.value
      pagoSeleccionado = true
    }
  })

 modosEntrega.forEach(check => {
     if (check.checked) {
       modoEntregaSeleccionado = check.getAttribute("data-label")
       entregaSeleccionada = true
     }
   })

  if (pagoSeleccionado && entregaSeleccionada) {
    finalizarCompraBtn.removeAttribute('disabled')
  } else {
    finalizarCompraBtn.setAttribute('disabled', 'true')
  }
}
