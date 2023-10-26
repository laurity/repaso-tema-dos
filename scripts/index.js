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
const menu = document.getElementById("menu");
const mostrar = document.getElementById("mostrar");
const depositarButton = document.getElementById("depositar");
const retirarButton = document.getElementById("retirar");
const transferirButton = document.getElementById("transferir");

let saldo = 1000; //estarian en una base de datos

const PIN_CORRECTO = "1234"; //lo mismo que la de arriba.

let intentosRestantes = 3;

function mostrarSaldo() {
  mostrar.innerHTML= `${saldo.toFixed(2)}€`;
}

function depositarSaldo() {
  const deposito = parseFloat(prompt("Ingrese la cantidad a depositar"));

  if (isNaN(deposito) || deposito <= 0) {
    alert(`Cantidad inválida. Intente de nuevo`);
  } else {
    saldo += deposito;

    alert(`Saldo depositado ${deposito.toFixed(2)}`);

    mostrarSaldo();
  }
}

function retirar() {
  const retiro = parseFloat(prompt("Ingrese la cantidad a retirar"));
  if (isNaN(retiro) || retiro <= 0 || retiro > saldo) {
    alert(`Cantidad inválida. Intente de nuevo`);
  } else {
    saldo -= retiro;
    alert(`Saldo retirado ${retiro.toFixed(2)}`);
    mostrarSaldo();
  }
}

function transferir() {
  const monto = parseFloat(prompt("Ingrese la cantidad a transferir"));
  if (isNaN(monto) || monto <= 0 || monto > saldo) {
    alert(`Cantidad inválida. Intente de nuevo`);
  } else {
    const cuentaDestino = prompt("Ingrese la cuenta destino");
    alert(
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
    alert(`PIN incorrecto. Intentos restantes: ${intentosRestantes}`);
    pin = prompt("Ingrese su pin");
  }
  if (pin === PIN_CORRECTO) {
    alert(`PIN correcto`);
    mostrarSaldo();
  } else {
    alert(`PIN incorrecto. El cajero se ha bloqueado.`);
    window.location.replace("./bloqueado.html");
  }
}
iniciarSesion();

//----------------------------------------------------------------
depositarButton.addEventListener("click", depositarSaldo);
retirarButton.addEventListener("click", retirar);
transferirButton.addEventListener("click", transferir);
