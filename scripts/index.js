/**
 * Depositar
 * Retirar
 * Transferir
 * Iniciar Sesion
 * Operaciones Cajero
 */
/**
 * Variables:
 * saldo
 * pin-correcto
 * intentos restantes
 */

let saldo = 1000; //estarian en una base de datos

const PIN_CORRECTO = "1234"; //lo mismo que la de arriba.

let intentosRestantes = 3;

function mostrarSaldo() {
  console.log(`Su saldo actual es ${saldo.toFixed(2)} €`);
}

function depositarSaldo() {
  const deposito = parseFloat(prompt("Ingrese la cantidad a depositar"));

  if (isNaN(deposito) || deposito <= 0) {
    console.log(`Cantidad inválida. Intente de nuevo`);
  } else {
    saldo += deposito;

    console.log(`Saldo depositado ${deposito.toFixed(2)}`);

    mostrarSaldo();
  }
}

function retirar() {
  const retiro = parseFloat(prompt("Ingrese la cantidad a retirar"));
  if (isNaN(retiro) || retiro <= 0 || retiro > saldo) {
    console.log(`Cantidad inválida. Intente de nuevo`);
  } else {
    saldo -= retiro;
    console.log(`Saldo retirado ${retiro.toFixed(2)}`);
    mostrarSaldo();
  }
}

function transferir() {
  const monto = parseFloat(prompt("Ingrese la cantidad a transferir"));
  if (isNaN(monto) || monto <= 0 || monto > saldo) {
    console.log(`Cantidad inválida. Intente de nuevo`);
  } else {
    const cuentaDestino = prompt("Ingrese la cuenta destino");
    console.log(
      `Se han transferido €${monto.toFixed(2)} a la cuenta ${cuentaDestino}`
    );
    saldo -= monto;
    mostrarSaldo();
  }
}

function isValidStructureIBAN(cuentaAValidar) {
  return /[a-zA-Z]{2}[0-9]{20}$/g.test(cuentaAValidar);
} // Fin de la función isValidStructureIBAN.

function iniciarSesion() {
  let pin = prompt("Ingrese su pin");
  while (pin !== PIN_CORRECTO && intentosRestantes > 1) {
    intentosRestantes--;
    console.log(`PIN incorrecto. Intentos restantes: ${intentosRestantes}`);
    pin = prompt("Ingrese su pin");
  }
  if (pin === PIN_CORRECTO) {
    console.log(`PIN correcto`);
    mostrarSaldo();
    operacionesCajero();
  } else {
    console.log(`PIN incorrecto. El cajero se ha bloquado.`);
  }
}

  function operacionesCajero() {
    //esto seria el menu.
    let continuar = true;
    while (continuar) {
      console.log("Menú del Cajero");
      console.log("1 - Consultar saldo");
      console.log("2 - Depositar dinero");
      console.log("3 - Retirar dinero");
      console.log("4 - Transferir dinero");
      console.log("5 - Salir");
    

    const opcion = prompt("Elija una opcion: ");

    switch (opcion) {
      case "1":
        mostrarSaldo();
        break;

      case "2":
        depositarSaldo();
        break;

      case "3":
        retirar();
        break;

      case "4":
        transferir();
        break;

      case "5":
        console.log("Ha salido del cajero.");
        continuar = false;
        break;

        default:
          console.log("Opción incorrecta. Intente de nuevo");
    }
  }
}
operacionesCajero();
