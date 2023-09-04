alert("Bienvenidos a la verduleria virtual")

const comprarProductos = () => {
    let producto = " ";
    let cantidad = 0;
    let precio = 0;
    let subtotal = 0;
    let seguirCompreando = true;

    do {
        producto = prompt("¿Que estabas buscando? Tenemos bananas, manzanas, mandarinas y paltas") .toUpperCase();
        if (producto !== null) {
            cantidad = prompt("¿Cuantos kilos queres?");
            cantidad = parseFloat(cantidad);
        } else {
            seguirCompreando = false;
        }
    
        switch (producto) {
            case "BANANAS":
                precio = 1500;
                break;
            case "MANZANAS":
                precio = 800;
                break;
            case "MANDARINAS":
                precio = 550;
                break;
            case "PALTAS":
                precio = 12000;
                break;
            default:
                alert("Debes elegir productos en stock e indicar con numeros cuantos kilos buscas :)");
                precio = 0;
                cantidad = 0;
        }

        subtotal += precio * cantidad;

        if (seguirCompreando) {
            seguirCompreando = confirm("¿Desea seguir comprando?");
        }
    } while (seguirCompreando)

    return subtotal;
}

const pagar = (subtotal) => {
    let metodoDePago;
    do{
        metodoDePago = prompt("¿Como desea abonar? Transferencia/MercadoPago/Credito (Abonando con credito hay un recargo del 25%)") .toUpperCase();

        switch(metodoDePago){
            case"TRANSFERENCIA":
                break;
            case "MERCADOPAGO":
                break;
            case "CREDITO":
                subtotal = subtotal * 1.25
                break;
            default:
                alert("Datos incorrectos")

        }
    }while(metodoDePago !== "CREDITO" && metodoDePago !== "TRANSFERENCIA" && metodoDePago !== "MERCADOPAGO");

    alert("El precio final es: " + subtotal)

    return subtotal;
}

const subtotal = comprarProductos();

const formaDePago = pagar(subtotal);

