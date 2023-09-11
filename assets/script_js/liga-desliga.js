const turnOnOff = document.getElementById("turnOnOff");
const lamp = document.getElementById("lamp");

function lampOn() {
  if (!isLampBroken()) {
    lamp.src = "./img/lampada-ligada.png";
  }
}
function lampOff() {
  if (!isLampBroken()) {
    lamp.src = "./img/lampada-desligada.png";
  }
}
function isLampBroken() {
  return lamp.src.indexOf("quebrada") > -1; 
}
function lampBroken() {
  lamp.src = "./img/lampada-quebrada.png";
}
function lampOnOff() {
  if (!isLampBroken()) {
    if (turnOnOff.textContent == "Ligar") {
      lampOn();
      turnOnOff.textContent = "Desligar";
    } else {
      lampOff();
      turnOnOff.textContent = "Ligar";
    }
  }
}
turnOnOff.addEventListener("click", lampOnOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseout", lampOff);
lamp.addEventListener("dblclick", lampBroken);


//essa funcao nao vai receber parametro nenhum lampOnOff()
//vai ligar a lampada  lampOnOff()
//mais quando ligar pega o button turnOnOff e trocao texto dele
//se o button turnOnOff.textContent estiver ligado
//eu coloquei esse codigo aqui em baixo dentro do outo if
//para quando a lampada estiver quebrada o button nao acionar
//o butao vai ficar como esta parado

//dentro do => if (!isLampBroken()) {}

// if (turnOnOff.textContent == "Ligar") {
     // lampOn();
     // turnOnOff.textContent = "Desligar";
    //} else {
    //  lampOff();
   //   turnOnOff.textContent = "Ligar";
    //}