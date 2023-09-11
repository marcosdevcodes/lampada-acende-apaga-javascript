//aqui nos chamamos o Id do button turnOn liga
const turnOn = document.getElementById('turnOn')
//aqui nos chamamos o Id do button turnOff desliga
const turnOff = document.getElementById('turnOff')
//vamos pegar id da lampada agora lamp dentro da img
const lamp = document.getElementById('lamp')

//essa funcao vai trocar a lampada do addEventListener quando 
//for clicada para lampada ligada
function lampOn () {  //2
// se a lampada estiver quebrada nao vai ligar 
//acontecer nem uma acao por causa da negação<!isLampBroken()>
// o !isLampBroken() esta negado por causa da esclamação
// o parenteses vasio é pra não acontecer nem uma ação
    if (!isLampBroken()){
        lamp.src = './img/lampada-ligada.png'
    }
}

//funcao para desligar a lampada
function lampOff(){    //1
    if (!isLampBroken()){
        lamp.src = './img/lampada-desligada.png'
    }
}

//vamos capturar o click da lampada lampOn quando for clicado
//o ouvinte troca a lampada quando clicado no button liga
turnOn.addEventListener('click', lampOn)//2

//outro evento pata desligar a lampada
turnOff.addEventListener('click', lampOff)//1

//agora vou pegar um evendo na lampada lamp
//para quando o mouse passar por ela vai acender mouseover
lamp.addEventListener('mouseover', lampOn)//1

//outro evento para quando o mouse sair da lampada 
//ela vai apagar mouseout
lamp.addEventListener('mouseout', lampOff)//2

//esa funcao aqui vai verificar se a lampada esta quebrada
//lamp.src.indexOf('quebrada') > -1
//o indexOf vai fazer uma varedura na istring para ver 
//se tem a palavra quebrado se tiver ela retorna -1
//mais aqui eu quero que ela saja maior que >-1 
//para que os outros eventos nao aconteção
function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1  //maior que -1
}

//essa funcao e para quebrar a lampada quando der 
//um duplo click nela dblclick
function lampBroken(){     //3
    lamp.src = './img/lampada-quebrada.png'
}

//agora vamos capturar outro evento para quando 
//der um duplo clique ela quebra dblclick
lamp.addEventListener('dblclick', lampBroken)//3