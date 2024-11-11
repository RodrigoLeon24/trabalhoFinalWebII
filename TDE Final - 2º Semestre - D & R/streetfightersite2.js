/*Anotações:
obs: as do Ryu são chamadas de "breakWall2-5" mas as dos outros personagens não, por exemplo o Ken está "kenWall2-5" assim como todo o resto do elenco exceto pelo Ryu.

varíaveis importantes que gerei pelo getElementById:

breakWallAnimation'NomedoPersonagem' - id importado do html do id ('nomedopersongem'version) do video que contém a parede quebrada com o cenário destaque do personagem.
'nomeDoPersonagem'Wall2 - id importado do html do id ('nomedopersonagem'version2) do video que contém a animação de entrada quebrando a parade ou aparecendo mesmo.
'nomeDoPersonagem'Wall3 - id importado do html do id ('nomedopersonagem'version3) do vídeo que contem a animação dos tijolos da parede quebrando.
'nomeDoPersonagem'Wall4 - id importado do html do id ('nomedopersonagem'version4) do vídeo que contém a animação do personagem parado esperando em loop.
'nomeDoPersonagem'Wall5 - id importado do html do id ('nomedopersonagem'version5) do vídeo que contém a animação ociosa do persongem que só ativa quando clicada,
pois chama a função "randomIdle'1-14'"(14 pois tem 14 personagens selecionaveis, e deixei fácil de indentificar, tá na ordem do site do Davi quando a responsividade chega no máximo).
'nomeDoAtaqueEspecial'Idle - id importado do html do id ('nomedopersonagem'version6) do vídeo que contém a animação do Especial do personagem.
'nomeDoPersonagem'Div - id importado do html do id ('nomedopersonagem') que contém as informações gráficas do personagem

Funções criadas:

'nomedopersonagem'Off(); - função que esconde as informações completa dos personagens e eles também, essa função esconde o personagem, foi feita pra esconder
o persongem quando trocar de personagem na aba de seleção.
'nomedopersonagem'Call(); - função onClick criada no html localizado dentro das tags <img> que estão dentro da div "characterSelect", essa função serve pra mostrar
o personagem quando clicasse na imagem dele, dentro dessa função é chamado todas as informações do personagem da foto e as funções 'Off();' de todos os personagens
exceto o escolhido.
playBreakWall'1-14'(); - função onClick criada no html localizado dentro da div dos ids #click'númerosImpares', a div invisivel serve como um botão para chamar a animação
de quebra de parede dos personagens.
radomIdle'1-14'(); - função onClick criada no html localizado dentro da div dos ids #click'númerosPares', a div invisivel serve como um botão que
só aparece quando a função "playBreakWall();", quando apertado acontece a animação ociosa do personagem.
specialIdle'1-14'(); - função onClick criada no html localizado dentro da div dos ids #hadClick'1-14', a div invisivel serve como um botão que
caso apertado mostra o ataque especial do persongem.
stand'NomeDoPersonagem'(); - função que contém a animação de espera do personagem só chamada depois das animações de quebra de parede, ociosa e de ataques especiais dos personagens

*/

//Logo header ------------------------------------------------
let logo = document.getElementById("logo");

logo.addEventListener('click', function(){
    window.location.href = 'streetfighter.html';
})

//Spots ------------------------------------------------------
let japan = document.getElementById("japan");
let japan2 = document.getElementById("japan2");
let china = document.getElementById("china");
let usa = document.getElementById("usa");
let uk = document.getElementById("uk");
let japan3 = document.getElementById("japan3");
let thai = document.getElementById("thai");
let usa2 = document.getElementById("usa2");
let india = document.getElementById("india");
let japan4 = document.getElementById("japan3");
let spain = document.getElementById("spain");
let russia = document.getElementById("russia");
let brazil = document.getElementById("brazil");
let shadaloo = document.getElementById("shadaloo");

//Birthdays ---------------------------------------------------

let ryuBirthday = document.getElementById("ryuDay");
let kenBirthday = document.getElementById("kenDay");
let chunBirthday = document.getElementById("chunDay");
let guileBirthday = document.getElementById("guileDay");
let cammyBirthday = document.getElementById("cammyDay");
let akumaBirthday = document.getElementById("akumaDay");
let sagatBirthday = document.getElementById("sagatDay");
let bisonBirthday = document.getElementById("bisonDay");
let balrogBirthday = document.getElementById("balrogDay");
let zangiefBirthday = document.getElementById("zangiefDay");
let dhalsimBirthday = document.getElementById("dhalsimDay");
let ehondaBirthday = document.getElementById("ehondaDay");
let vegaBirthday = document.getElementById("vegaDay");
let blankaBirthday = document.getElementById("blankaDay");

//Fight Style -------------------------------------------------

let karate = document.getElementById("karate");
let macial = document.getElementById("machinese");
let wrestling = document.getElementById("wrestling");
let shadelta = document.getElementById("shadaloodelta");
let ansatsuken = document.getElementById("ansatsuken");
let muaythai = document.getElementById("muaythai");
let psychopower = document.getElementById("psychopower");
let boxing = document.getElementById("boxing");
let yoga = document.getElementById("yoga");
let sumo = document.getElementById("sumo");
let spanishninjutsu = document.getElementById("spanishninjutsu");
let electricattacks = document.getElementById("electricattacks");

//Special Moveset ---------------------------------------------

let hadouken = document.getElementById("hadouken");
let shoryuken = document.getElementById("shoryuken");
let hyakuretsukyaku = document.getElementById("hyakuretsukyaku");
let sonicboom = document.getElementById("sonicboom");
let cannonspike = document.getElementById("cannonspike");
let shungokusatsu = document.getElementById("shungokusatsu");
let tigeruppercut = document.getElementById("tigeruppercut");
let psychocrusher = document.getElementById("psychocrusher");
let turnpunch = document.getElementById("turnpunch");
let spinningpiledriver = document.getElementById("spinningpiledriver");
let yogaflame = document.getElementById("yogaflame");
let hundredhandslap = document.getElementById("hundredhandslap");
let flyingbarcelona = document.getElementById("flyingbarcelona");
let electricthunder = document.getElementById("electricthunder");

//Release ----------------------------------------------------

let streetFighterI = document.getElementById("sf1");
let streetFighterII = document.getElementById("sf2");

//Turn Off Characters -----------------------------------------

function ryuOff(){
    breakWallAnimationRyu.pause();
    breakWallAnimationRyu.currentTime = 0;
    breakWallAnimationRyu.load();
    breakWall2.pause();
    breakWall2.currentTime = 0;
    breakWall2.load();
    breakWall3.pause();
    breakWall3.currentTime = 0;
    breakWall2.load();
    breakWall4.pause();
    breakWall4.currentTime = 0;
    breakWall2.load();
    breakWall5.pause();
    breakWall5.currentTime = 0;
    breakWall2.load();
    breakWallAnimationRyu.style.visibility = 'hidden';
    breakWall2.style.visibility = 'hidden';
    breakWall3.style.visibility = 'hidden';
    breakWall4.style.visibility = 'hidden';
    breakWall5.style.visibility = 'hidden';
    hadoukenIdle.style.visibility = 'hidden';
    ryuidlesclick.style.display = 'none';
    ryuTitle.style.visibility = 'hidden';
    ryuDiv.style.visibility = 'hidden';
    if(ryuDiv.style.visibility = 'hidden'){
        ryuBirthday.style.visibility = 'hidden';
        hadouken.style.visibility = 'hidden';
        hadDiv.style.visibility = 'hidden';
        hadDiv.style.display = 'none';
        japan.style.visibility = 'hidden';
        karate.style.visibility = 'hidden';
        streetFighterI.style.visibility = 'hidden';
    }
    breakWall4.style.visibility = 'hidden';
    ryuBirthday.style.visibility = 'hidden';
}

function kenOff(){
    kenDiv.style.visibility = 'hidden';
    breakWallAnimationKen.pause();
    breakWallAnimationKen.currentTime = 0;
    breakWallAnimationKen.load();
    kenWall2.pause();
    kenWall2.currentTime = 0;
    kenWall2.load();
    kenWall3.pause();
    kenWall3.currentTime = 0;
    kenWall2.load();
    kenWall4.pause();
    kenWall4.currentTime = 0;
    kenWall2.load();
    kenWall5.pause();
    kenWall5.currentTime = 0;
    breakWallAnimationKen.style.visibility = 'hidden';
    kenWall2.style.visibility = 'hidden';
    kenWall3.style.visibility = 'hidden';
    kenWall4.style.visibility = 'hidden';
    kenWall5.style.visibility = 'hidden';
    shoryukenIdle.style.visibility = 'hidden';
    kenidlesclick.style.display = 'none';
    kenTitle.style.visibility = 'hidden';
    if(kenDiv.style.visibility = 'hidden'){
        kenBirthday.style.visibility = 'hidden';
        shoryuken.style.visibility = 'hidden';
        hadDiv2.style.visibility = 'hidden';
        hadDiv2.style.display = 'none';
        japan2.style.visibility = 'hidden';
        karate.style.visibility = 'hidden';
        streetFighterI.style.visibility = 'hidden';
    }
    kenWall4.style.visibility = 'hidden';
    kenBirthday.style.visibility = 'hidden';
}

function chunLiOff(){
    breakWallAnimationChunLi.pause();
    breakWallAnimationChunLi.currentTime = 0;
    breakWallAnimationChunLi.load();
    chunLiWall2.pause();
    chunLiWall2.currentTime = 0;
    chunLiWall2.load();
    chunLiWall3.pause();
    chunLiWall3.currentTime = 0;
    chunLiWall2.load();
    chunLiWall4.pause();
    chunLiWall4.currentTime = 0;
    chunLiWall2.load();
    chunLiWall5.pause();
    chunLiWall5.currentTime = 0;
    breakWallAnimationChunLi.style.visibility = 'hidden';
    chunLiWall2.style.visibility = 'hidden';
    chunLiWall3.style.visibility = 'hidden';
    chunLiWall4.style.visibility = 'hidden';
    chunLiWall5.style.visibility = 'hidden';
    hyakuretsukyakuIdle.style.visibility = 'hidden';
    chunliidlesclick.style.display = 'none';
    chunTitle.style.visibility = 'hidden';
    chunDiv.style.visibility = 'hidden';
    chunBirthday.style.visibility = 'hidden';
    if(chunDiv.style.visibility = 'hidden'){
        china.style.visibility = 'hidden';
        macial.style.visibility = 'hidden';
        hyakuretsukyaku.style.visibility = 'hidden';
        hadDiv3.style.visibility = 'hidden';
        hadDiv3.style.display = 'none';
        streetFighterI.style.visibility = 'hidden';
    }
    chunLiWall4.style.visibility = 'hidden';
  
}

function guileOff(){
    breakWallAnimationGuile.pause();
    breakWallAnimationGuile.currentTime = 0;
    breakWallAnimationGuile.load();
    guileWall2.pause();
    guileWall2.currentTime = 0;
    guileWall2.load();
    guileWall3.pause();
    guileWall3.currentTime = 0;
    guileWall3.load();
    guileWall4.pause();
    guileWall4.currentTime = 0;
    guileWall4.load();
    guileWall5.pause();
    guileWall5.currentTime = 0;
    guileWall5.load();
    breakWallAnimationGuile.style.visibility = 'hidden';
    guileWall2.style.visibility = 'hidden';
    guileWall3.style.visibility = 'hidden';
    guileWall4.style.visibility = 'hidden';
    guileWall5.style.visibility = 'hidden';
    sonicboomIdle.style.visibility = 'hidden';
    guileidlesclick.style.display = 'none';
    guileTitle.style.visibility = 'hidden';
    guileDiv.style.visibility = 'hidden';
    if(guileDiv.style.visibility = 'hidden'){
        guileBirthday.style.visibility = 'hidden';
        sonicboom.style.visibility = 'hidden';
        hadDiv4.style.visibility = 'hidden';
        hadDiv4.style.display = 'none';
        usa.style.visibility = 'hidden';
        wrestling.style.visibility = 'hidden';
        streetFighterII.style.visibility = 'hidden';
    }
    guileWall4.style.visibility = 'hidden';
    guileBirthday.style.visibility = 'hidden';
}

function cammyOff(){
    breakWallAnimationCammy.pause();
    breakWallAnimationCammy.currentTime = 0;
    breakWallAnimationCammy.load();
    cammyWall2.pause();
    cammyWall2.currentTime = 0;
    cammyWall2.load();
    cammyWall3.pause();
    cammyWall3.currentTime = 0;
    cammyWall3.load();
    cammyWall4.pause();
    cammyWall4.currentTime = 0;
    cammyWall4.load();
    cammyWall5.pause();
    cammyWall5.currentTime = 0;
    cammyWall5.load();
    breakWallAnimationCammy.style.visibility = 'hidden';
    cammyWall2.style.visibility = 'hidden';
    cammyWall3.style.visibility = 'hidden';
    cammyWall4.style.visibility = 'hidden';
    cammyWall5.style.visibility = 'hidden';
    cannonspikeIdle.style.visibility = 'hidden';
    cammyidlesclick.style.display = 'none';
    cammyTitle.style.visibility = 'hidden';
    cammyDiv.style.visibility = 'hidden';
    if(cammyDiv.style.visibility = 'hidden'){
        cammyBirthday.style.visibility = 'hidden';
        cannonspike.style.visibility = 'hidden';
        hadDiv5.style.visibility = 'hidden';
        hadDiv5.style.display = 'none';
        uk.style.visibility = 'hidden';
        shadelta.style.visibility = 'hidden';
        streetFighterII.style.visibility = 'hidden';
    }
    cammyWall4.style.visibility = 'hidden';
    cammyBirthday.style.visibility = 'hidden';
}

function akumaOff(){
    breakWallAnimationAkuma.pause();
    breakWallAnimationAkuma.currentTime = 0;
    breakWallAnimationAkuma.load();
    akumaWall2.pause();
    akumaWall2.currentTime = 0;
    akumaWall2.load();
    akumaWall3.pause();
    akumaWall3.currentTime = 0;
    akumaWall3.load();
    akumaWall4.pause();
    akumaWall4.currentTime = 0;
    akumaWall4.load();
    akumaWall5.pause();
    akumaWall5.currentTime = 0;
    akumaWall5.load();
    breakWallAnimationAkuma.style.visibility = 'hidden';
    akumaWall2.style.visibility = 'hidden';
    akumaWall3.style.visibility = 'hidden';
    akumaWall4.style.visibility = 'hidden';
    akumaWall5.style.visibility = 'hidden';
    shungokusatsuIdle.style.visibility = 'hidden';
    akumaidlesclick.style.display = 'none';
    akumaTitle.style.visibility = 'hidden';
    akumaDiv.style.visibility = 'hidden';
    if(akumaDiv.style.visibility = 'hidden'){
        akumaBirthday.style.visibility = 'hidden';
        shungokusatsu.style.visibility = 'hidden';
        hadDiv6.style.visibility = 'hidden';
        hadDiv6.style.display = 'none';
        japan3.style.visibility = 'hidden';
        ansatsuken.style.visibility = 'hidden';
        streetFighterII.style.visibility = 'hidden';
    }
    akumaWall4.style.visibility = 'hidden';
    akumaBirthday.style.visibility = 'hidden';
}

function sagatOff(){
    breakWallAnimationSagat.pause();
    breakWallAnimationSagat.currentTime = 0;
    breakWallAnimationSagat.load();
    sagatWall2.pause();
    sagatWall2.currentTime = 0;
    sagatWall2.load();
    sagatWall3.pause();
    sagatWall3.currentTime = 0;
    sagatWall3.load();
    sagatWall4.pause();
    sagatWall4.currentTime = 0;
    sagatWall4.load();
    sagatWall5.pause();
    sagatWall5.currentTime = 0;
    sagatWall5.load();
    breakWallAnimationSagat.style.visibility = 'hidden';
    sagatWall2.style.visibility = 'hidden';
    sagatWall3.style.visibility = 'hidden';
    sagatWall4.style.visibility = 'hidden';
    sagatWall5.style.visibility = 'hidden';
    tigeruppercutIdle.style.visibility = 'hidden';
    sagatidlesclick.style.display = 'none';
    sagatTitle.style.visibility = 'hidden';
    sagatDiv.style.visibility = 'hidden';
    if(sagatDiv.style.visibility = 'hidden'){
        sagatBirthday.style.visibility = 'hidden';
        tigeruppercut.style.visibility = 'hidden';
        hadDiv7.style.visibility = 'hidden';
        hadDiv7.style.display = 'none';
        thai.style.visibility = 'hidden';
        muaythai.style.visibility = 'hidden';
        streetFighterI.style.visibility = 'hidden';
    }
    sagatWall4.style.visibility = 'hidden';
    sagatBirthday.style.visibility = 'hidden';
}

function bisonOff(){
    breakWallAnimationBison.pause();
    breakWallAnimationBison.currentTime = 0;
    breakWallAnimationBison.load();
    bisonWall2.pause();
    bisonWall2.currentTime = 0;
    bisonWall2.load();
    bisonWall3.pause();
    bisonWall3.currentTime = 0;
    bisonWall3.load();
    bisonWall4.pause();
    bisonWall4.currentTime = 0;
    bisonWall4.load();
    bisonWall5.pause();
    bisonWall5.currentTime = 0;
    bisonWall5.load();
    breakWallAnimationBison.style.visibility = 'hidden';
    bisonWall2.style.visibility = 'hidden';
    bisonWall3.style.visibility = 'hidden';
    bisonWall4.style.visibility = 'hidden';
    bisonWall5.style.visibility = 'hidden';
    psychocrusherIdle.style.visibility = 'hidden';
    bisonidlesclick.style.display = 'none';
    bisonTitle.style.visibility = 'hidden';
    bisonDiv.style.visibility = 'hidden';
    if(bisonDiv.style.visibility = 'hidden'){
        bisonBirthday.style.visibility = 'hidden';
        psychocrusher.style.visibility = 'hidden';
        hadDiv8.style.visibility = 'hidden';
        hadDiv8.style.display = 'none';
        shadaloo.style.visibility = 'hidden';
        psychopower.style.visibility = 'hidden';
        streetFighterII.style.visibility = 'hidden';
    }
    bisonWall4.style.visibility = 'hidden';
    bisonBirthday.style.visibility = 'hidden';
}


function balrogOff(){
    breakWallAnimationBalrog.pause();
    breakWallAnimationBalrog.currentTime = 0;
    breakWallAnimationBalrog.load();
    balrogWall2.pause();
    balrogWall2.currentTime = 0;
    balrogWall2.load();
    balrogWall3.pause();
    balrogWall3.currentTime = 0;
    balrogWall2.load();
    balrogWall4.pause();
    balrogWall4.currentTime = 0;
    balrogWall2.load();
    balrogWall5.pause();
    balrogWall5.currentTime = 0;
    balrogWall2.load();
    breakWallAnimationBalrog.style.visibility = 'hidden';
    balrogWall2.style.visibility = 'hidden';
    balrogWall3.style.visibility = 'hidden';
    balrogWall4.style.visibility = 'hidden';
    balrogWall5.style.visibility = 'hidden';
    turnpunchIdle.style.visibility = 'hidden';
    balrogidlesclick.style.display = 'none';
    balrogTitle.style.visibility = 'hidden';
    balrogDiv.style.visibility = 'hidden';
    if(balrogDiv.style.visibility = 'hidden'){
        balrogBirthday.style.visibility = 'hidden';
        turnpunch.style.visibility = 'hidden';
        hadDiv9.style.visibility = 'hidden';
        hadDiv9.style.display = 'none';
        usa2.style.visibility = 'hidden';
        boxing.style.visibility = 'hidden';
        streetFighterII.style.visibility = 'hidden';
    }
    balrogWall4.style.visibility = 'hidden';
    balrogBirthday.style.visibility = 'hidden';
}

function zangiefOff(){
    breakWallAnimationZangief.pause();
    breakWallAnimationZangief.currentTime = 0;
    breakWallAnimationZangief.load();
    zangiefWall2.pause();
    zangiefWall2.currentTime = 0;
    zangiefWall2.load();
    zangiefWall3.pause();
    zangiefWall3.currentTime = 0;
    zangiefWall3.load();
    zangiefWall4.pause();
    zangiefWall4.currentTime = 0;
    zangiefWall4.load();
    zangiefWall5.pause();
    zangiefWall5.currentTime = 0;
    zangiefWall5.load();
    breakWallAnimationZangief.style.visibility = 'hidden';
    zangiefWall2.style.visibility = 'hidden';
    zangiefWall3.style.visibility = 'hidden';
    zangiefWall4.style.visibility = 'hidden';
    zangiefWall5.style.visibility = 'hidden';
    spinningpiledriverIdle.style.visibility = 'hidden';
    zangiefidlesclick.style.display = 'none';
    zangiefTitle.style.visibility = 'hidden';
    zangiefDiv.style.visibility = 'hidden';
    if(zangiefDiv.style.visibility = 'hidden'){
        zangiefBirthday.style.visibility = 'hidden';
        spinningpiledriver.style.visibility = 'hidden';
        hadDiv10.style.visibility = 'hidden';
        hadDiv10.style.display = 'none';
        russia.style.visibility = 'hidden';
        wrestling.style.visibility = 'hidden';
        streetFighterII.style.visibility = 'hidden';
    }
    zangiefWall4.style.visibility = 'hidden';
    zangiefBirthday.style.visibility = 'hidden';
}

function dhalsimOff(){
    dhalsimWall2.pause();
    dhalsimWall2.currentTime = 0;
    dhalsimWall2.load();
    dhalsimWall4.pause();
    dhalsimWall4.currentTime = 0;
    dhalsimWall4.load();
    dhalsimWall5.pause();
    dhalsimWall5.currentTime = 0;
    dhalsimWall5.load();
    dhalsimWall2.style.visibility = 'hidden';
    dhalsimWall4.style.visibility = 'hidden';
    dhalsimWall5.style.visibility = 'hidden';
    yogaflameIdle.style.visibility = 'hidden';
    dhalsimidlesclick.style.display = 'none';
    dhalsimTitle.style.visibility = 'hidden';
    dhalsimDiv.style.visibility = 'hidden';
    if(dhalsimDiv.style.visibility = 'hidden'){
        dhalsimBirthday.style.visibility = 'hidden';
        yogaflame.style.visibility = 'hidden';
        hadDiv11.style.visibility = 'hidden';
        hadDiv11.style.display = 'none';
        india.style.visibility = 'hidden';
        yoga.style.visibility = 'hidden';
        streetFighterII.style.visibility = 'hidden';
    }
    dhalsimWall4.style.visibility = 'hidden';
    dhalsimBirthday.style.visibility = 'hidden';
}

function ehondaOff(){
    breakWallAnimationEhonda.pause();
    breakWallAnimationEhonda.currentTime = 0;
    breakWallAnimationEhonda.load();
    ehondaWall2.pause();
    ehondaWall2.currentTime = 0;
    ehondaWall2.load();
    ehondaWall3.pause();
    ehondaWall3.currentTime = 0;
    ehondaWall3.load();
    ehondaWall4.pause();
    ehondaWall4.currentTime = 0;
    ehondaWall4.load();
    ehondaWall5.pause();
    ehondaWall5.currentTime = 0;
    ehondaWall5.load();
    breakWallAnimationEhonda.style.visibility = 'hidden';
    ehondaWall2.style.visibility = 'hidden';
    ehondaWall3.style.visibility = 'hidden';
    ehondaWall4.style.visibility = 'hidden';
    ehondaWall5.style.visibility = 'hidden';
    hundredhandslapIdle.style.visibility = 'hidden';
    ehondaidlesclick.style.display = 'none';
    ehondaTitle.style.visibility = 'hidden';
    ehondaDiv.style.visibility = 'hidden';
    if(ehondaDiv.style.visibility = 'hidden'){
        ehondaBirthday.style.visibility = 'hidden';
        hundredhandslap.style.visibility = 'hidden';
        hadDiv12.style.visibility = 'hidden';
        hadDiv12.style.display = 'none';
        japan4.style.visibility = 'hidden';
        sumo.style.visibility = 'hidden';
        streetFighterII.style.visibility = 'hidden';
    }
    ehondaWall4.style.visibility = 'hidden';
    ehondaBirthday.style.visibility = 'hidden';
}

function vegaOff(){
    breakWallAnimationVega.pause();
    breakWallAnimationVega.currentTime = 0;
    breakWallAnimationVega.load();
    vegaWall2.pause();
    vegaWall2.currentTime = 0;
    vegaWall2.load();
    vegaWall3.pause();
    vegaWall3.currentTime = 0;
    vegaWall3.load();
    vegaWall4.pause();
    vegaWall4.currentTime = 0;
    vegaWall4.load();
    vegaWall5.pause();
    vegaWall5.currentTime = 0;
    vegaWall5.load();
    breakWallAnimationVega.style.visibility = 'hidden';
    vegaWall2.style.visibility = 'hidden';
    vegaWall3.style.visibility = 'hidden';
    vegaWall4.style.visibility = 'hidden';
    vegaWall5.style.visibility = 'hidden';
    flyingbarcelonaIdle.style.visibility = 'hidden';
    vegaidlesclick.style.display = 'none';
    vegaTitle.style.visibility = 'hidden';
    vegaDiv.style.visibility = 'hidden';
    if(vegaDiv.style.visibility = 'hidden'){
        vegaBirthday.style.visibility = 'hidden';
        flyingbarcelona.style.visibility = 'hidden';
        hadDiv13.style.visibility = 'hidden';
        hadDiv13.style.display = 'none';
        spain.style.visibility = 'hidden';
        spanishninjutsu.style.visibility = 'hidden';
        streetFighterII.style.visibility = 'hidden';
    }
    vegaWall4.style.visibility = 'hidden';
    vegaBirthday.style.visibility = 'hidden';
}

function blankaOff(){
    breakWallAnimationBlanka.pause();
    breakWallAnimationBlanka.currentTime = 0;
    breakWallAnimationBlanka.load();
    blankaWall2.pause();
    blankaWall2.currentTime = 0;
    blankaWall2.load();
    blankaWall3.pause();
    blankaWall3.currentTime = 0;
    blankaWall3.load();
    blankaWall4.pause();
    blankaWall4.currentTime = 0;
    blankaWall4.load();
    blankaWall5.pause();
    blankaWall5.currentTime = 0;
    blankaWall5.load();
    breakWallAnimationBlanka.style.visibility = 'hidden';
    blankaWall2.style.visibility = 'hidden';
    blankaWall3.style.visibility = 'hidden';
    blankaWall4.style.visibility = 'hidden';
    blankaWall5.style.visibility = 'hidden';
    electricthunderIdle.style.visibility = 'hidden';
    blankaidlesclick.style.display = 'none';
    blankaTitle.style.visibility = 'hidden';
    blankaDiv.style.visibility = 'hidden';
    if(blankaDiv.style.visibility = 'hidden'){
        blankaBirthday.style.visibility = 'hidden';
        electricthunder.style.visibility = 'hidden';
        hadDiv14.style.visibility = 'hidden';
        hadDiv14.style.display = 'none';
        brazil.style.visibility = 'hidden';
        electricattacks.style.visibility = 'hidden';
        streetFighterII.style.visibility = 'hidden';
    }
    blankaWall4.style.visibility = 'hidden';
    blankaBirthday.style.visibility = 'hidden';
}

//Ryu------------------------------------------------------------

let ryuActive = document.getElementById("ryuButton");
let ryuDiv = document.getElementById("ryu");
let ryuTitle = document.getElementById("ryuTitle")

function ryuCall(){
    if(ryuDiv.style.visibility = 'hidden'){
        ryuDiv.style.visibility = 'visible';
        kenOff();
        chunLiOff();
        guileOff();
        cammyOff();
        akumaOff();
        sagatOff();
        bisonOff();
        balrogOff();
        zangiefOff();
        dhalsimOff();
        ehondaOff();
        vegaOff();
        blankaOff();   
        ryufirstclick.style.display = 'flex';
        ryuTitle.style.visibility = 'visible';
        japan.style.visibility = 'visible';
        ryuBirthday.style.visibility = 'visible';
        karate.style.visibility = 'visible';
        hadouken.style.visibility = 'visible';
        hadDiv.style.display = 'flex';
        streetFighterI.style.visibility = 'visible';
        ryuDiv.style.visibility = 'visible';
        if(streetFighterI.style.visibility = 'hidden'){
            streetFighterI.style.visibility = 'visible';
        }
    }
}

let breakWallAnimationRyu = document.getElementById("ryuversion");
let breakWall2 = document.getElementById("ryuversion2");
let breakWall3 = document.getElementById("ryuversion3");
let breakWall4 = document.getElementById("ryuversion4");
let breakWall5 = document.getElementById("ryuversion5");
let hadoukenIdle = document.getElementById("ryuversion6");
let hadDiv = document.getElementById("hadClick");
let ryufirstclick = document.getElementById("click1");
let ryuidlesclick = document.getElementById("click2");

hadDiv.style.visibility = 'hidden';

function playBreakWall(){
    if(breakWallAnimationRyu.paused){
        breakWallAnimationRyu.style.visibility = 'visible';
        breakWallAnimationRyu.currentTime = 0;
        breakWallAnimationRyu.play();
    }

    if(breakWall2.paused){
        breakWall2.style.visibility = 'visible';
        breakWall2.play();
    }

    if(breakWall3.paused){
        breakWall3.style.visibility = 'visible';
        breakWall3.play();
    }

    ryufirstclick.style.display = 'none';
}

breakWall2.addEventListener('ended', standRyu, false);

function standRyu(e) {
    breakWall2.style.visibility = 'hidden';
    breakWall5.style.visibility = 'hidden';
    hadoukenIdle.style.visibility = 'hidden';
    ryuidlesclick.style.visibility = 'visible';
    ryuidlesclick.style.display = 'flex';
    
    if(breakWall4.style.visibility = 'hidden'){
        hadDiv.style.visibility = 'visible';
        breakWall4.style.visibility = 'visible';
        if(breakWall4.paused){
            breakWall4.play();
        }
    }

}

function randomIdle() {
    if(breakWall4.play()){
        breakWall4.style.visibility = 'hidden';
        hadDiv.style.visibility = 'hidden';
        if(breakWall5.paused){
            breakWall5.style.visibility = 'visible';
            breakWall5.play();
        }
    }
}

breakWall5.addEventListener('ended', standRyu, false);

function specialIdle(){
    if(breakWall4.paused){
        hadDiv.style.visibility = 'hidden';
    }else if (breakWall4.play()){
        hadDiv.style.cursor = 'pointer';
        hadDiv.style.visibility = 'visible';
        if(hadoukenIdle.paused){
            breakWall4.style.visibility = 'hidden';
            hadoukenIdle.style.visibility = 'visible';
            hadoukenIdle.play();
        }
    }
}

hadoukenIdle.addEventListener('ended', standRyu, false);

//Ken--------------------------------------------------------------

let kenActive = document.getElementById("kenButton");
let kenDiv = document.getElementById("ken");
let kenTitle = document.getElementById("kenTitle");

function kenCall(){
    if(kenDiv.style.visibility = 'hidden'){
        kenDiv.style.visibility = 'visible';
        kenfirstclick.style.display = 'flex';
        kenTitle.style.visibility = 'visible';
        japan2.style.visibility = 'visible';
        ryuOff();
        chunLiOff();
        guileOff();
        cammyOff();
        akumaOff();
        sagatOff();
        bisonOff();
        balrogOff();
        zangiefOff();
        dhalsimOff();
        ehondaOff();
        vegaOff();
        blankaOff();
        kenBirthday.style.visibility = 'visible';
        karate.style.visibility = 'visible';
        shoryuken.style.visibility = 'visible';
        hadDiv2.style.display = 'flex';
        if(streetFighterI.style.visibility = 'hidden'){
            streetFighterI.style.visibility = 'visible';
        }
    }
}

let breakWallAnimationKen = document.getElementById("kenversion");
let kenWall2 = document.getElementById("kenversion2");
let kenWall3 = document.getElementById("kenversion3");
let kenWall4 = document.getElementById("kenversion4");
let kenWall5 = document.getElementById("kenversion5");
let shoryukenIdle = document.getElementById("kenversion6");
let hadDiv2 = document.getElementById("hadClick2");
let kenfirstclick = document.getElementById("click3");
let kenidlesclick = document.getElementById("click4");

hadDiv2.style.visibility = 'hidden';

function playBreakWall2(){
    if(breakWallAnimationKen.paused){
        breakWallAnimationKen.style.visibility = 'visible';
        breakWallAnimationKen.play();
    }

    if(kenWall2.paused){
        kenWall2.style.visibility = 'visible';
        kenWall2.play();
    }

    if(kenWall3.paused){
        kenWall3.style.visibility = 'visible';
        kenWall3.play();
    }

    kenfirstclick.style.display = 'none';
}

kenWall2.addEventListener('ended', standKen, false);

function standKen(e) {
    kenWall2.style.visibility = 'hidden';
    kenWall5.style.visibility = 'hidden';
    shoryukenIdle.style.visibility = 'hidden';
    kenidlesclick.style.visibility = 'visible';
    kenidlesclick.style.display = 'flex';

    if(kenWall4.style.visibility = 'hidden'){
        hadDiv2.style.visibility = 'visible';
        kenWall4.style.visibility = 'visible';
        if(kenWall4.paused){
            kenWall4.play();
        }
    }
}

function randomIdle2() {
    if(kenWall4.play()){
        kenWall4.style.visibility = 'hidden';
        hadDiv2.style.visibility = 'hidden';
        if(kenWall5.paused){
            kenWall5.style.visibility = 'visible';
            kenWall5.play();
        }
    }
}

kenWall5.addEventListener('ended', standKen, false);

function specialIdle2(){
    if(kenWall4.paused){
        hadDiv2.style.visibility = 'hidden';
    }else if (kenWall4.play()){
        hadDiv2.style.cursor = 'pointer';
        hadDiv2.style.visibility = 'visible';
        if(shoryukenIdle.paused){
            kenWall4.style.visibility = 'hidden';
            shoryukenIdle.style.visibility = 'visible';
            shoryukenIdle.play();
        }
    }
}

/*if(shoryukenIdle.style.visibility = 'hidden'){
    kenWall4.style.visibility = 'hidden';
}else if(shoryukenIdle.style.visibility = 'visible'){
    if(shoryukenIdle.paused){
       shoryukenIdle.addEventListener('pause', standKen, false);
    }
}*/

/*if(kenDiv.style.visibility = 'hidden'){
    shoryukenIdle.pause();
    kenWall4.style.visibility = 'hidden';
}else if(shoryukenIdle.style.visibility = 'visible'){
    shoryukenIdle.addEventListener('ended', standKen, false);
}*/

shoryukenIdle.addEventListener('ended', standKen, false);

//Chun Li------------------------------------------------------------

let chunLiActive = document.getElementById("chunButton");
let chunDiv = document.getElementById("chunli");
let chunTitle = document.getElementById("chunTitle");

function chunCall(){
    if(chunDiv.style.visibility = 'hidden'){
        chunDiv.style.visibility = 'visible';
        ryuOff();
        kenOff();
        guileOff();
        cammyOff();
        akumaOff();
        sagatOff();
        bisonOff();
        balrogOff();
        zangiefOff();
        dhalsimOff();
        ehondaOff();
        vegaOff();
        blankaOff();
        chunlifirstclick.style.display = 'flex';
        chunTitle.style.visibility = 'visible';
        china.style.visibility = 'visible';
        chunBirthday.style.visibility = 'visible';
        macial.style.visibility = 'visible';
        hyakuretsukyaku.style.visibility = 'visible';
        hadDiv3.style.visibility = 'visible';
        hadDiv3.style.display = 'flex';
        if(streetFighterI.style.visibility = 'hidden'){
            streetFighterI.style.visibility = 'visible';
        }
    }
}

let breakWallAnimationChunLi = document.getElementById("chunliversion");
let chunLiWall2 = document.getElementById("chunliversion2");
let chunLiWall3 = document.getElementById("chunliversion3");
let chunLiWall4 = document.getElementById("chunliversion4");
let chunLiWall5 = document.getElementById("chunliversion5");
let hyakuretsukyakuIdle = document.getElementById("chunliversion6");
let hadDiv3 = document.getElementById("hadClick3");
let chunlifirstclick = document.getElementById("click5");
let chunliidlesclick = document.getElementById("click6");

hadDiv3.style.visibility = 'hidden';
hyakuretsukyakuIdle.style.visibility = 'hidden';

function playBreakWall3(){
    if(breakWallAnimationChunLi.paused){
        breakWallAnimationChunLi.style.visibility = 'visible';
        breakWallAnimationChunLi.currentTime = 0;
        breakWallAnimationChunLi.play();
    }

    if(chunLiWall2.paused){
        chunLiWall2.style.visibility = 'visible';
        chunLiWall2.play();
    }

    if(chunLiWall3.paused){
        chunLiWall3.style.visibility = 'visible';
        chunLiWall3.play();
    }

    chunlifirstclick.style.display = 'none';
}

chunLiWall2.addEventListener('ended', standChunLi, false);

function standChunLi(e) {
    chunLiWall2.style.visibility = 'hidden';
    chunLiWall5.style.visibility = 'hidden';
    hyakuretsukyakuIdle.style.visibility = 'hidden';
    chunliidlesclick.style.visibility = 'visible';
    chunliidlesclick.style.display = 'flex';

    
    if(chunLiWall4.style.visibility = 'hidden'){
        hadDiv3.style.visibility = 'visible';
        chunLiWall4.style.visibility = 'visible';
        if(chunLiWall4.paused){
            chunLiWall4.play();
        }
    }

}

function randomIdle3() {
    if(chunLiWall4.play()){
        chunLiWall4.style.visibility = 'hidden';
        hadDiv3.style.visibility = 'hidden';
        if(chunLiWall5.paused){
            chunLiWall5.style.visibility = 'visible';
            chunLiWall5.play();
        }
    }
}

chunLiWall5.addEventListener('ended', standChunLi, false);

function specialIdle3(){
    if(chunLiWall4.paused){
        hadDiv3.style.visibility = 'hidden';
    }else if (chunLiWall4.play()){
        hadDiv3.style.cursor = 'pointer';
        hadDiv3.style.visibility = 'visible';
        if(hyakuretsukyakuIdle.paused){
            chunLiWall4.style.visibility = 'hidden';
            hyakuretsukyakuIdle.style.visibility = 'visible';
            hyakuretsukyakuIdle.play();
        }
    }
}

hyakuretsukyakuIdle.addEventListener('ended', standChunLi, false);

//Guile ------------------------------------------------------------

let guileActive = document.getElementById("guileButton");
let guileDiv = document.getElementById("guile");
let guileTitle = document.getElementById("guileTitle")

function guileCall(){
    if(guileDiv.style.visibility = 'hidden'){
        guileDiv.style.visibility = 'visible';
        ryuOff();
        kenOff();
        chunLiOff();
        cammyOff();
        akumaOff();
        sagatOff();
        bisonOff();
        balrogOff();
        zangiefOff();
        dhalsimOff();
        ehondaOff();
        vegaOff();
        blankaOff();      
        guilefirstclick.style.display = 'flex';
        guileTitle.style.visibility = 'visible';
        usa.style.visibility = 'visible';
        guileBirthday.style.visibility = 'visible';
        wrestling.style.visibility = 'visible';
        sonicboom.style.visibility = 'visible';
        hadDiv4.style.display = 'flex';
        streetFighterII.style.visibility = 'visible';
        guileDiv.style.visibility = 'visible';
        if(streetFighterII.style.visibility = 'hidden'){
            streetFighterII.style.visibility = 'visible';
        }
    }
}

let breakWallAnimationGuile = document.getElementById("guileversion");
let guileWall2 = document.getElementById("guileversion2");
let guileWall3 = document.getElementById("guileversion3");
let guileWall4 = document.getElementById("guileversion4");
let guileWall5 = document.getElementById("guileversion5");
let sonicboomIdle = document.getElementById("guileversion6");
let hadDiv4 = document.getElementById("hadClick4");
let guilefirstclick = document.getElementById("click7");
let guileidlesclick = document.getElementById("click8");

hadDiv4.style.visibility = 'hidden';

function playBreakWall4(){
    if(breakWallAnimationGuile.paused){
        breakWallAnimationGuile.style.visibility = 'visible';
        breakWallAnimationGuile.currentTime = 0;
        breakWallAnimationGuile.play();
    }

    if(guileWall2.paused){
        guileWall2.style.visibility = 'visible';
        guileWall2.play();
    }

    if(guileWall3.paused){
        guileWall3.style.visibility = 'visible';
        guileWall3.play();
    }

    guilefirstclick.style.display = 'none';
}

guileWall2.addEventListener('ended', standGuile, false);

function standGuile(e) {
    guileWall2.style.visibility = 'hidden';
    guileWall5.style.visibility = 'hidden';
    sonicboomIdle.style.visibility = 'hidden';
    guileidlesclick.style.visibility = 'visible';
    guileidlesclick.style.display = 'flex';
    
    if(guileWall4.style.visibility = 'hidden'){
        hadDiv4.style.visibility = 'visible';
        guileWall4.style.visibility = 'visible';
        if(guileWall4.paused){
            guileWall4.play();
        }
    }

}

function randomIdle4() {
    if(guileWall4.play()){
        guileWall4.style.visibility = 'hidden';
        hadDiv4.style.visibility = 'hidden';
        if(guileWall5.paused){
            guileWall5.style.visibility = 'visible';
            guileWall5.play();
        }
    }
}

guileWall5.addEventListener('ended', standGuile, false);

function specialIdle4(){
    if(guileWall4.paused){
        hadDiv4.style.visibility = 'hidden';
    }else if (guileWall4.play()){
        hadDiv4.style.cursor = 'pointer';
        hadDiv4.style.visibility = 'visible';
        if(sonicboomIdle.paused){
            guileWall4.style.visibility = 'hidden';
            sonicboomIdle.style.visibility = 'visible';
            sonicboomIdle.play();
        }
    }
}

sonicboomIdle.addEventListener('ended', standGuile, false);

//Cammy------------------------------------------------------------

let cammyActive = document.getElementById("cammyButton");
let cammyDiv = document.getElementById("cammy");
let cammyTitle = document.getElementById("cammyTitle")

function cammyCall(){
    if(cammyDiv.style.visibility = 'hidden'){
        cammyDiv.style.visibility = 'visible';
        ryuOff();
        kenOff();
        chunLiOff();
        guileOff();
        akumaOff();
        sagatOff();
        bisonOff();
        balrogOff();
        zangiefOff();
        dhalsimOff();
        ehondaOff();
        vegaOff();
        blankaOff();       
        cammyfirstclick.style.display = 'flex';
        cammyTitle.style.visibility = 'visible';
        uk.style.visibility = 'visible';
        cammyBirthday.style.visibility = 'visible';
        shadelta.style.visibility = 'visible';
        cannonspike.style.visibility = 'visible';
        cammyWall2.style.visibility = 'hidden';
        hadDiv5.style.display = 'flex';
        streetFighterII.style.visibility = 'visible';
        cammyDiv.style.visibility = 'visible';
        if(streetFighterII.style.visibility = 'hidden'){
            streetFighterII.style.visibility = 'visible';
        }
    }
}

let breakWallAnimationCammy = document.getElementById("cammyversion");
let cammyWall2 = document.getElementById("cammyversion2");
let cammyWall3 = document.getElementById("cammyversion3");
let cammyWall4 = document.getElementById("cammyversion4");
let cammyWall5 = document.getElementById("cammyversion5");
let cannonspikeIdle = document.getElementById("cammyversion6");
let hadDiv5 = document.getElementById("hadClick5");
let cammyfirstclick = document.getElementById("click9");
let cammyidlesclick = document.getElementById("click10");

hadDiv5.style.visibility = 'hidden';

function playBreakWall5(){
    if(breakWallAnimationCammy.paused){
        breakWallAnimationCammy.style.visibility = 'visible';
        breakWallAnimationCammy.currentTime = 0;
        breakWallAnimationCammy.play();
    }

    if(cammyWall2.paused){
        cammyWall2.style.visibility = 'visible';
        cammyWall2.play();
    }

    if(cammyWall3.paused){
        cammyWall3.style.visibility = 'visible';
        cammyWall3.play();
    }

    cammyfirstclick.style.display = 'none';
}

cammyWall2.addEventListener('ended', standCammy, false);

function standCammy(e) {
    cammyWall2.style.visibility = 'hidden';
    cammyWall5.style.visibility = 'hidden';
    cannonspikeIdle.style.visibility = 'hidden';
    cammyidlesclick.style.visibility = 'visible';
    cammyidlesclick.style.display = 'flex';
    if(cammyWall4.style.visibility = 'hidden'){
        hadDiv5.style.visibility = 'visible';
        cammyWall4.style.visibility = 'visible';
        if(cammyWall4.paused){
            cammyWall4.play();
        }
    }

}

function randomIdle5() {
    if(cammyWall4.play()){
        cammyWall4.style.visibility = 'hidden';
        hadDiv5.style.visibility = 'hidden';
        if(cammyWall5.paused){
            cammyWall5.style.visibility = 'visible';
            cammyWall5.play();
        }
    }
}

cammyWall5.addEventListener('ended', standCammy, false);

function specialIdle5(){
    if(cammyWall4.paused){
        hadDiv5.style.visibility = 'hidden';
    }else if (breakWall4.play()){
        hadDiv5.style.cursor = 'pointer';
        hadDiv5.style.visibility = 'visible';
        if(cannonspikeIdle.paused){
            cammyWall4.style.visibility = 'hidden';
            cannonspikeIdle.style.visibility = 'visible';
            cannonspikeIdle.play();
        }
    }
}

cannonspikeIdle.addEventListener('ended', standCammy, false);

//Akuma------------------------------------------------------------

let akumaActive = document.getElementById("akumaButton");
let akumaDiv = document.getElementById("akuma");
let akumaTitle = document.getElementById("akumaTitle")

function akumaCall(){
    if(akumaDiv.style.visibility = 'hidden'){
        akumaDiv.style.visibility = 'visible';
        ryuOff();
        kenOff();
        chunLiOff();
        guileOff();
        cammyOff();
        sagatOff();
        bisonOff();
        balrogOff();
        zangiefOff();
        dhalsimOff();
        ehondaOff();
        vegaOff();
        blankaOff();   
        akumafirstclick.style.display = 'flex';
        akumaTitle.style.visibility = 'visible';
        japan3.style.visibility = 'visible';
        akumaBirthday.style.visibility = 'visible';
        ansatsuken.style.visibility = 'visible';
        shungokusatsu.style.visibility = 'visible';
        shungokusatsuIdle.style.visibility = 'hidden';
        hadDiv6.style.display = 'flex';
        streetFighterII.style.visibility = 'visible';
        akumaDiv.style.visibility = 'visible';
        if(streetFighterII.style.visibility = 'hidden'){
            streetFighterII.style.visibility = 'visible';
        }
    }
}

let breakWallAnimationAkuma = document.getElementById("akumaversion");
let akumaWall2 = document.getElementById("akumaversion2");
let akumaWall3 = document.getElementById("akumaversion3");
let akumaWall4 = document.getElementById("akumaversion4");
let akumaWall5 = document.getElementById("akumaversion5");
let shungokusatsuIdle = document.getElementById("akumaversion6");
let hadDiv6 = document.getElementById("hadClick6");
let akumafirstclick = document.getElementById("click11");
let akumaidlesclick = document.getElementById("click12");

hadDiv6.style.visibility = 'hidden';

function playBreakWall6(){
    if(breakWallAnimationAkuma.paused){
        breakWallAnimationAkuma.style.visibility = 'visible';
        breakWallAnimationAkuma.currentTime = 0;
        breakWallAnimationAkuma.play();
    }

    if(akumaWall2.paused){
        akumaWall2.style.visibility = 'visible';
        akumaWall2.play();
    }

    if(akumaWall3.paused){
        akumaWall3.style.visibility = 'visible';
        akumaWall3.play();
    }

    akumafirstclick.style.display = 'none';
}

akumaWall2.addEventListener('ended', standAkuma, false);

function standAkuma(e) {
    akumaWall2.style.visibility = 'hidden';
    akumaWall5.style.visibility = 'hidden';
    shungokusatsuIdle.style.visibility = 'hidden';
    akumaidlesclick.style.visibility = 'visible';
    akumaidlesclick.style.display = 'flex';
    
    if(akumaWall4.style.visibility = 'hidden'){
        hadDiv6.style.visibility = 'visible';
        akumaWall4.style.visibility = 'visible';
        if(akumaWall4.paused){
            akumaWall4.play();
        }
    }
}

function randomIdle6() {
    if(akumaWall4.play()){
        akumaWall4.style.visibility = 'hidden';
        hadDiv6.style.visibility = 'hidden';
        if(akumaWall5.paused){
            akumaWall5.style.visibility = 'visible';
            akumaWall5.play();
        }
    }
}

akumaWall5.addEventListener('ended', standAkuma, false);

function specialIdle6(){
    if(akumaWall4.paused){
        hadDiv6.style.visibility = 'hidden';
    }else if (akumaWall4.play()){
        hadDiv6.style.cursor = 'pointer';
        hadDiv6.style.visibility = 'visible';
        if(shungokusatsuIdle.paused){
            akumaWall4.style.visibility = 'hidden';
            shungokusatsuIdle.style.visibility = 'visible';
            shungokusatsuIdle.play();
        }
    }
}

shungokusatsuIdle.addEventListener('ended', standAkuma, false);

//Sagat------------------------------------------------------------

let sagatActive = document.getElementById("sagatButton");
let sagatDiv = document.getElementById("sagat");
let sagatTitle = document.getElementById("sagatTitle")

function sagatCall(){
    if(sagatDiv.style.visibility = 'hidden'){
        sagatDiv.style.visibility = 'visible';
        ryuOff();
        kenOff();
        chunLiOff();
        guileOff();
        cammyOff();
        akumaOff();
        bisonOff();
        balrogOff();
        zangiefOff();
        dhalsimOff();
        ehondaOff();
        vegaOff();
        blankaOff();   
        sagatfirstclick.style.display = 'flex';
        sagatTitle.style.visibility = 'visible';
        thai.style.visibility = 'visible';
        sagatBirthday.style.visibility = 'visible';
        muaythai.style.visibility = 'visible';
        tigeruppercut.style.visibility = 'visible';
        hadDiv7.style.display = 'flex';
        streetFighterI.style.visibility = 'visible';
        sagatDiv.style.visibility = 'visible';
        if(streetFighterI.style.visibility = 'hidden'){
            streetFighterI.style.visibility = 'visible';
        }
    }
}

let breakWallAnimationSagat = document.getElementById("sagatversion");
let sagatWall2 = document.getElementById("sagatversion2");
let sagatWall3 = document.getElementById("sagatversion3");
let sagatWall4 = document.getElementById("sagatversion4");
let sagatWall5 = document.getElementById("sagatversion5");
let tigeruppercutIdle = document.getElementById("sagatversion6");
let hadDiv7 = document.getElementById("hadClick7");
let sagatfirstclick = document.getElementById("click13");
let sagatidlesclick = document.getElementById("click14");

hadDiv7.style.visibility = 'hidden';

function playBreakWall7(){
    if(breakWallAnimationSagat.paused){
        breakWallAnimationSagat.style.visibility = 'visible';
        breakWallAnimationSagat.currentTime = 0;
        breakWallAnimationSagat.play();
    }

    if(sagatWall2.paused){
        sagatWall2.style.visibility = 'visible';
        sagatWall2.play();
    }

    if(sagatWall3.paused){
        sagatWall3.style.visibility = 'visible';
        sagatWall3.play();
    }

    sagatfirstclick.style.display = 'none';
}

sagatWall2.addEventListener('ended', standSagat, false);

function standSagat(e) {
    sagatWall2.style.visibility = 'hidden';
    sagatWall5.style.visibility = 'hidden';
    tigeruppercutIdle.style.visibility = 'hidden';
    sagatidlesclick.style.visibility = 'visible';
    sagatidlesclick.style.display = 'flex';
    
    if(sagatWall4.style.visibility = 'hidden'){
        hadDiv7.style.visibility = 'visible';
        sagatWall4.style.visibility = 'visible';
        if(sagatWall4.paused){
            sagatWall4.play();
        }
    }

}

function randomIdle7() {
    if(sagatWall4.play()){
        sagatWall4.style.visibility = 'hidden';
        hadDiv7.style.visibility = 'hidden';
        if(sagatWall5.paused){
            sagatWall5.style.visibility = 'visible';
            sagatWall5.play();
        }
    }
}

sagatWall5.addEventListener('ended', standSagat, false);

function specialIdle7(){
    if(sagatWall4.paused){
        hadDiv7.style.visibility = 'hidden';
    }else if (sagatWall4.play()){
        hadDiv7.style.cursor = 'pointer';
        hadDiv7.style.visibility = 'visible';
        if(tigeruppercutIdle.paused){
            sagatWall4.style.visibility = 'hidden';
            tigeruppercutIdle.style.visibility = 'visible';
            tigeruppercutIdle.play();
        }
    }
}

tigeruppercutIdle.addEventListener('ended', standSagat, false);

//M. Bison------------------------------------------------------------

let bisonActive = document.getElementById("bisonButton");
let bisonDiv = document.getElementById("bison");
let bisonTitle = document.getElementById("bisonTitle")

function bisonCall(){
    if(bisonDiv.style.visibility = 'hidden'){
        bisonDiv.style.visibility = 'visible';
        ryuOff();
        kenOff();
        chunLiOff();
        guileOff();
        cammyOff();
        akumaOff();
        sagatOff();
        balrogOff();
        zangiefOff();
        dhalsimOff();
        ehondaOff();
        vegaOff();
        blankaOff();   
        bisonfirstclick.style.display = 'flex';
        bisonTitle.style.visibility = 'visible';
        shadaloo.style.visibility = 'visible';
        bisonBirthday.style.visibility = 'visible';
        psychopower.style.visibility = 'visible';
        psychocrusher.style.visibility = 'visible';
        hadDiv8.style.display = 'flex';
        streetFighterII.style.visibility = 'visible';
        bisonDiv.style.visibility = 'visible';
        if(streetFighterII.style.visibility = 'hidden'){
            streetFighterII.style.visibility = 'visible';
        }
    }
}

let breakWallAnimationBison = document.getElementById("bisonversion");
let bisonWall2 = document.getElementById("bisonversion2");
let bisonWall3 = document.getElementById("bisonversion3");
let bisonWall4 = document.getElementById("bisonversion4");
let bisonWall5 = document.getElementById("bisonversion5");
let psychocrusherIdle = document.getElementById("bisonversion6");
let hadDiv8 = document.getElementById("hadClick8");
let bisonfirstclick = document.getElementById("click15");
let bisonidlesclick = document.getElementById("click16");

hadDiv8.style.visibility = 'hidden';

function playBreakWall8(){
    if(breakWallAnimationBison.paused){
        breakWallAnimationBison.style.visibility = 'visible';
        breakWallAnimationBison.currentTime = 0;
        breakWallAnimationBison.play();
    }

    if(bisonWall2.paused){
        bisonWall2.style.visibility = 'visible';
        bisonWall2.play();
    }

    if(bisonWall3.paused){
        bisonWall3.style.visibility = 'visible';
        bisonWall3.play();
    }

    bisonfirstclick.style.display = 'none';
}

bisonWall2.addEventListener('ended', standBison, false);

function standBison(e) {
    bisonWall2.style.visibility = 'hidden';
    bisonWall5.style.visibility = 'hidden';
    psychocrusherIdle.style.visibility = 'hidden';
    bisonidlesclick.style.visibility = 'visible';
    bisonidlesclick.style.display = 'flex';
    
    if(bisonWall4.style.visibility = 'hidden'){
        hadDiv8.style.visibility = 'visible';
        bisonWall4.style.visibility = 'visible';
        if(bisonWall4.paused){
            bisonWall4.play();
        }
    }

}

function randomIdle8() {
    if(bisonWall4.play()){
        bisonWall4.style.visibility = 'hidden';
        hadDiv8.style.visibility = 'hidden';
        if(bisonWall5.paused){
            bisonWall5.style.visibility = 'visible';
            bisonWall5.play();
        }
    }
}

bisonWall5.addEventListener('ended', standBison, false);

function specialIdle8(){
    if(bisonWall4.paused){
        hadDiv8.style.visibility = 'hidden';
    }else if (bisonWall4.play()){
        hadDiv8.style.cursor = 'pointer';
        hadDiv8.style.visibility = 'visible';
        if(psychocrusherIdle.paused){
            bisonWall4.style.visibility = 'hidden';
            psychocrusherIdle.style.visibility = 'visible';
            psychocrusherIdle.play();
        }
    }
}

psychocrusherIdle.addEventListener('ended', standBison, false);

//Balrog ------------------------------------------------------------

let balrogActive = document.getElementById("balrogButton");
let balrogDiv = document.getElementById("balrog");
let balrogTitle = document.getElementById("balrogTitle")

function balrogCall(){
    if(balrogDiv.style.visibility = 'hidden'){
        balrogDiv.style.visibility = 'visible';
        ryuOff(); 
        kenOff();
        chunLiOff();
        guileOff();
        cammyOff();
        akumaOff();
        sagatOff();
        bisonOff();
        zangiefOff();
        dhalsimOff();
        ehondaOff();
        vegaOff();
        blankaOff();  
        balrogfirstclick.style.display = 'flex';
        balrogTitle.style.visibility = 'visible';
        usa2.style.visibility = 'visible';
        balrogBirthday.style.visibility = 'visible';
        boxing.style.visibility = 'visible';
        turnpunch.style.visibility = 'visible';
        hadDiv9.style.display = 'flex';
        streetFighterII.style.visibility = 'visible';
        balrogDiv.style.visibility = 'visible';
        if(streetFighterII.style.visibility = 'hidden'){
            streetFighterII.style.visibility = 'visible';
        }
    }
}

let breakWallAnimationBalrog = document.getElementById("balrogversion");
let balrogWall2 = document.getElementById("balrogversion2");
let balrogWall3 = document.getElementById("balrogversion3");
let balrogWall4 = document.getElementById("balrogversion4");
let balrogWall5 = document.getElementById("balrogversion5");
let turnpunchIdle = document.getElementById("balrogversion6");
let hadDiv9 = document.getElementById("hadClick9");
let balrogfirstclick = document.getElementById("click17");
let balrogidlesclick = document.getElementById("click18");

hadDiv9.style.visibility = 'hidden';

function playBreakWall9(){
    if(breakWallAnimationBalrog.paused){
        breakWallAnimationBalrog.style.visibility = 'visible';
        breakWallAnimationBalrog.currentTime = 0;
        breakWallAnimationBalrog.play();
    }

    if(balrogWall2.paused){
        balrogWall2.style.visibility = 'visible';
        balrogWall2.play();
    }

    if(balrogWall3.paused){
        balrogWall3.style.visibility = 'visible';
        balrogWall3.play();
    }

    balrogfirstclick.style.display = 'none';
}

balrogWall2.addEventListener('ended', standBalrog, false);

function standBalrog(e) {
    balrogWall2.style.visibility = 'hidden';
    balrogWall5.style.visibility = 'hidden';
    turnpunchIdle.style.visibility = 'hidden';
    balrogidlesclick.style.visibility = 'visible';
    balrogidlesclick.style.display = 'flex';
    
    if(balrogWall4.style.visibility = 'hidden'){
        hadDiv9.style.visibility = 'visible';
        balrogWall4.style.visibility = 'visible';
        if(balrogWall4.paused){
            balrogWall4.play();
        }
    }

}

function randomIdle9() {
    if(balrogWall4.play()){
        balrogWall4.style.visibility = 'hidden';
        hadDiv9.style.visibility = 'hidden';
        if(balrogWall5.paused){
            balrogWall5.style.visibility = 'visible';
            balrogWall5.play();
        }
    }
}

balrogWall5.addEventListener('ended', standBalrog, false);

function specialIdle9(){
    if(balrogWall4.paused){
        hadDiv9.style.visibility = 'hidden';
    }else if (balrogWall4.play()){
        hadDiv9.style.cursor = 'pointer';
        hadDiv9.style.visibility = 'visible';
        if(turnpunchIdle.paused){
            balrogWall4.style.visibility = 'hidden';
            turnpunchIdle.style.visibility = 'visible';
            turnpunchIdle.play();
        }
    }
}

turnpunchIdle.addEventListener('ended', standBalrog, false);

//Zangief------------------------------------------------------------

let zangiefActive = document.getElementById("zangiefButton");
let zangiefDiv = document.getElementById("zangief");
let zangiefTitle = document.getElementById("zangiefTitle")

function zangiefCall(){
    if(zangiefDiv.style.visibility = 'hidden'){
        zangiefDiv.style.visibility = 'visible';
        ryuOff();
        kenOff();
        chunLiOff();
        guileOff();
        cammyOff();
        akumaOff();
        sagatOff();
        balrogOff();
        bisonOff();
        dhalsimOff();
        ehondaOff();
        vegaOff();
        blankaOff();   
        zangieffirstclick.style.display = 'flex';
        zangiefTitle.style.visibility = 'visible';
        russia.style.visibility = 'visible';
        zangiefBirthday.style.visibility = 'visible';
        wrestling.style.visibility = 'visible';
        spinningpiledriver.style.visibility = 'visible';
        zangiefWall2.style.visibility = 'hidden';
        hadDiv10.style.display = 'flex';
        streetFighterII.style.visibility = 'visible';
        zangiefDiv.style.visibility = 'visible';
        if(streetFighterII.style.visibility = 'hidden'){
            streetFighterII.style.visibility = 'visible';
        }
    }
}

let breakWallAnimationZangief = document.getElementById("zangiefversion");
let zangiefWall2 = document.getElementById("zangiefversion2");
let zangiefWall3 = document.getElementById("zangiefversion3");
let zangiefWall4 = document.getElementById("zangiefversion4");
let zangiefWall5 = document.getElementById("zangiefversion5");
let spinningpiledriverIdle = document.getElementById("zangiefversion6");
let hadDiv10 = document.getElementById("hadClick10");
let zangieffirstclick = document.getElementById("click19");
let zangiefidlesclick = document.getElementById("click20");

hadDiv10.style.visibility = 'hidden';

function playBreakWall10(){
    if(breakWallAnimationZangief.paused){
        breakWallAnimationZangief.style.visibility = 'visible';
        breakWallAnimationZangief.currentTime = 0;
        breakWallAnimationZangief.play();
    }

    if(zangiefWall2.paused){
        zangiefWall2.style.visibility = 'visible';
        zangiefWall2.play();
    }

    if(zangiefWall3.paused){
        zangiefWall3.style.visibility = 'visible';
        zangiefWall3.play();
    }

    zangieffirstclick.style.display = 'none';
}

zangiefWall2.addEventListener('ended', standZangief, false);

function standZangief(e) {
    zangiefWall2.style.visibility = 'hidden';
    zangiefWall5.style.visibility = 'hidden';
    spinningpiledriverIdle.style.visibility = 'hidden';
    zangiefidlesclick.style.visibility = 'visible';
    zangiefidlesclick.style.display = 'flex';
    
    if(zangiefWall4.style.visibility = 'hidden'){
        hadDiv10.style.visibility = 'visible';
        zangiefWall4.style.visibility = 'visible';
        if(zangiefWall4.paused){
            zangiefWall4.play();
        }
    }

}

function randomIdle10() {
    if(zangiefWall4.play()){
        zangiefWall4.style.visibility = 'hidden';
        hadDiv10.style.visibility = 'hidden';
        if(zangiefWall5.paused){
            zangiefWall5.style.visibility = 'visible';
            zangiefWall5.play();
        }
    }
}

zangiefWall5.addEventListener('ended', standZangief, false);

function specialIdle10(){
    if(zangiefWall4.paused){
        hadDiv10.style.visibility = 'hidden';
    }else if(zangiefWall4.play()){
        hadDiv10.style.cursor = 'pointer';
        hadDiv10.style.visibility = 'visible';
        if(spinningpiledriverIdle.paused){
            zangiefWall4.style.visibility = 'hidden';
            spinningpiledriverIdle.style.visibility = 'visible';
            spinningpiledriverIdle.play();
        }
    }
}

spinningpiledriverIdle.addEventListener('ended', standZangief, false);

//Dhalsim------------------------------------------------------------

let dhalsimActive = document.getElementById("dhalsimButton");
let dhalsimDiv = document.getElementById("dhalsim");
let dhalsimTitle = document.getElementById("dhalsimTitle")

function dhalsimCall(){
    if(dhalsimDiv.style.visibility = 'hidden'){
        dhalsimDiv.style.visibility = 'visible';
        ryuOff();
        kenOff();
        chunLiOff();
        guileOff();
        cammyOff();
        akumaOff();
        sagatOff();
        balrogOff();
        bisonOff();
        zangiefOff();
        ehondaOff();
        vegaOff();
        blankaOff();   
        dhalsimfirstclick.style.display = 'flex';
        dhalsimTitle.style.visibility = 'visible';
        india.style.visibility = 'visible';
        dhalsimBirthday.style.visibility = 'visible';
        yoga.style.visibility = 'visible';
        yogaflame.style.visibility = 'visible';
        hadDiv11.style.display = 'flex';
        streetFighterII.style.visibility = 'visible';
        dhalsimDiv.style.visibility = 'visible';
        dhalsimWall2.style.visibility = 'hidden'
        if(streetFighterII.style.visibility = 'hidden'){
            streetFighterII.style.visibility = 'visible';
        }
    }
}

let dhalsimWall2 = document.getElementById("dhalsimversion2");
let dhalsimWall4 = document.getElementById("dhalsimversion4");
let dhalsimWall5 = document.getElementById("dhalsimversion5");
let yogaflameIdle = document.getElementById("dhalsimversion6");
let hadDiv11 = document.getElementById("hadClick11");
let dhalsimfirstclick = document.getElementById("click21");
let dhalsimidlesclick = document.getElementById("click22");

hadDiv11.style.visibility = 'hidden';

function playBreakWall11(){
    if(dhalsimWall2.paused){
        dhalsimWall2.style.visibility = 'visible';
        dhalsimWall2.play();
    }

    dhalsimfirstclick.style.display = 'none';
}

dhalsimWall2.addEventListener('ended', standDhalsim, false);

function standDhalsim(e) {
    dhalsimWall2.style.visibility = 'hidden';
    dhalsimWall5.style.visibility = 'hidden';
    yogaflameIdle.style.visibility = 'hidden';
    dhalsimidlesclick.style.visibility = 'visible';
    dhalsimidlesclick.style.display = 'flex';
    if(dhalsimWall4.style.visibility = 'hidden'){
        hadDiv11.style.visibility = 'visible';
        dhalsimWall4.style.visibility = 'visible';
        if(dhalsimWall4.paused){
            dhalsimWall4.play();
        }
    }
}

function randomIdle11() {
    if(dhalsimWall4.play()){
        dhalsimWall4.style.visibility = 'hidden';
        hadDiv11.style.visibility = 'hidden';
        if(dhalsimWall5.paused){
            dhalsimWall5.style.visibility = 'visible';
            dhalsimWall5.play();
        }
    }
}

dhalsimWall5.addEventListener('ended', standDhalsim, false);

function specialIdle11(){
    if(dhalsimWall4.paused){
        hadDiv11.style.visibility = 'hidden';
    }else if(dhalsimWall4.play()){
        hadDiv11.style.cursor = 'pointer';
        hadDiv11.style.visibility = 'visible';
        if(yogaflameIdle.paused){
            dhalsimWall4.style.visibility = 'hidden';
            yogaflameIdle.style.visibility = 'visible';
            yogaflameIdle.play();
        }
    }
}

yogaflameIdle.addEventListener('ended', standDhalsim, false);

//E.Honda------------------------------------------------------------

let ehondaActive = document.getElementById("ehondaButton");
let ehondaDiv = document.getElementById("ehonda");
let ehondaTitle = document.getElementById("eHondaTitle")

function eHondaCall(){
    if(ehondaDiv.style.visibility = 'hidden'){
        ehondaDiv.style.visibility = 'visible';
        ryuOff();
        kenOff();
        chunLiOff();
        guileOff();
        cammyOff();
        akumaOff();
        sagatOff();
        bisonOff();
        balrogOff();
        zangiefOff();
        dhalsimOff();
        vegaOff();
        blankaOff();   
        ehondafirstclick.style.display = 'flex';
        ehondaTitle.style.visibility = 'visible';
        japan4.style.visibility = 'visible';
        ehondaBirthday.style.visibility = 'visible';
        sumo.style.visibility = 'visible';
        hundredhandslap.style.visibility = 'visible';
        ehondaWall2.style.visibility = 'hidden';
        hadDiv12.style.display = 'flex';
        streetFighterII.style.visibility = 'visible';
        ehondaDiv.style.visibility = 'visible';
        if(streetFighterII.style.visibility = 'hidden'){
            streetFighterII.style.visibility = 'visible';
        }
    }
}

let breakWallAnimationEhonda = document.getElementById("ehondaversion");
let ehondaWall2 = document.getElementById("ehondaversion2");
let ehondaWall3 = document.getElementById("ehondaversion3");
let ehondaWall4 = document.getElementById("ehondaversion4");
let ehondaWall5 = document.getElementById("ehondaversion5");
let hundredhandslapIdle = document.getElementById("ehondaversion6");
let hadDiv12 = document.getElementById("hadClick12");
let ehondafirstclick = document.getElementById("click23");
let ehondaidlesclick = document.getElementById("click24");

hadDiv12.style.visibility = 'hidden';

function playBreakWall12(){
    if(breakWallAnimationEhonda.paused){
        breakWallAnimationEhonda.style.visibility = 'visible';
        breakWallAnimationEhonda.currentTime = 0;
        breakWallAnimationEhonda.play();
    }

    if(ehondaWall2.paused){
        ehondaWall2.style.visibility = 'visible';
        ehondaWall2.play();
    }

    if(ehondaWall3.paused){
        ehondaWall3.style.visibility = 'visible';
        ehondaWall3.play();
    }

    ehondafirstclick.style.display = 'none';
}

ehondaWall2.addEventListener('ended', standEhonda, false);

function standEhonda(e) {
    ehondaWall2.style.visibility = 'hidden';
    ehondaWall5.style.visibility = 'hidden';
    hundredhandslapIdle.style.visibility = 'hidden';
    ehondaidlesclick.style.visibility = 'visible';
    ehondaidlesclick.style.display = 'flex';
    
    if(ehondaWall4.style.visibility = 'hidden'){
        hadDiv12.style.visibility = 'visible';
        ehondaWall4.style.visibility = 'visible';
        if(ehondaWall4.paused){
            ehondaWall4.play();
        }
    }

}

function randomIdle12() {
    if(ehondaWall4.play()){
        ehondaWall4.style.visibility = 'hidden';
        hadDiv12.style.visibility = 'hidden';
        if(ehondaWall5.paused){
            ehondaWall5.style.visibility = 'visible';
            ehondaWall5.play();
        }
    }
}

ehondaWall5.addEventListener('ended', standEhonda, false);

function specialIdle12(){
    if(ehondaWall4.paused){
        hadDiv12.style.visibility = 'hidden';
    }else if(ehondaWall4.play()){
        hadDiv12.style.cursor = 'pointer';
        hadDiv12.style.visibility = 'visible';
        if(hundredhandslapIdle.paused){
            ehondaWall4.style.visibility = 'hidden';
            hundredhandslapIdle.style.visibility = 'visible';
            hundredhandslapIdle.play();
        }
    }
}

hundredhandslapIdle.addEventListener('ended', standEhonda, false);

//Vega------------------------------------------------------------

let vegaActive = document.getElementById("vegaButton");
let vegaDiv = document.getElementById("vega");
let vegaTitle = document.getElementById("vegaTitle")

function vegaCall(){
    if(vegaDiv.style.visibility = 'hidden'){
        vegaDiv.style.visibility = 'visible';
        ryuOff();
        kenOff();
        chunLiOff();
        guileOff();
        cammyOff();
        akumaOff();
        sagatOff();
        bisonOff();
        balrogOff();
        zangiefOff();
        dhalsimOff();
        ehondaOff();
        blankaOff();   
        vegafirstclick.style.display = 'flex';
        vegaTitle.style.visibility = 'visible';
        spain.style.visibility = 'visible';
        vegaBirthday.style.visibility = 'visible';
        spanishninjutsu.style.visibility = 'visible';
        flyingbarcelona.style.visibility = 'visible';
        vegaWall2.style.visibility = 'hidden';
        hadDiv13.style.display = 'flex';
        streetFighterII.style.visibility = 'visible';
        vegaDiv.style.visibility = 'visible';
        if(streetFighterII.style.visibility = 'hidden'){
            streetFighterII.style.visibility = 'visible';
        }
    }
}

let breakWallAnimationVega = document.getElementById("vegaversion");
let vegaWall2 = document.getElementById("vegaversion2");
let vegaWall3 = document.getElementById("vegaversion3");
let vegaWall4 = document.getElementById("vegaversion4");
let vegaWall5 = document.getElementById("vegaversion5");
let flyingbarcelonaIdle = document.getElementById("vegaversion6");
let hadDiv13 = document.getElementById("hadClick13");
let vegafirstclick = document.getElementById("click25");
let vegaidlesclick = document.getElementById("click26");

hadDiv13.style.visibility = 'hidden';

function playBreakWall13(){
    if(breakWallAnimationVega.paused){
        breakWallAnimationVega.style.visibility = 'visible';
        breakWallAnimationVega.currentTime = 0;
        breakWallAnimationVega.play();
    }

    if(vegaWall2.paused){
        vegaWall2.style.visibility = 'visible';
        vegaWall2.play();
    }

    if(vegaWall3.paused){
        vegaWall3.style.visibility = 'visible';
        vegaWall3.play();
    }

    vegafirstclick.style.display = 'none';
}

vegaWall2.addEventListener('ended', standVega, false);

function standVega(e) {
    vegaWall2.style.visibility = 'hidden';
    vegaWall5.style.visibility = 'hidden';
    flyingbarcelonaIdle.style.visibility = 'hidden';
    vegaidlesclick.style.visibility = 'visible';
    vegaidlesclick.style.display = 'flex';
    
    if(vegaWall4.style.visibility = 'hidden'){
        hadDiv13.style.visibility = 'visible';
        vegaWall4.style.visibility = 'visible';
        if(vegaWall4.paused){
            vegaWall4.play();
        }
    }

}

function randomIdle13() {
    if(vegaWall4.play()){
        vegaWall4.style.visibility = 'hidden';
        hadDiv13.style.visibility = 'hidden';
        if(vegaWall5.paused){
            vegaWall5.style.visibility = 'visible';
            vegaWall5.play();
        }
    }
}

vegaWall5.addEventListener('ended', standVega, false);

function specialIdle13(){
    if(vegaWall4.paused){
        hadDiv13.style.visibility = 'hidden';
    }else if(vegaWall4.play()){
        hadDiv13.style.cursor = 'pointer';
        hadDiv13.style.visibility = 'visible';
        if(flyingbarcelonaIdle.paused){
            vegaWall4.style.visibility = 'hidden';
            flyingbarcelonaIdle.style.visibility = 'visible';
            flyingbarcelonaIdle.play();
        }
    }
}

flyingbarcelonaIdle.addEventListener('ended', standVega, false);

//Blanka------------------------------------------------------------

let blankaActive = document.getElementById("blankaButton");
let blankaDiv = document.getElementById("blanka");
let blankaTitle = document.getElementById("blankaTitle")

function blankaCall(){
    if(blankaDiv.style.visibility = 'hidden'){
        blankaDiv.style.visibility = 'visible';
        ryuOff();
        kenOff();
        chunLiOff();
        guileOff();
        cammyOff();
        akumaOff();
        sagatOff();
        bisonOff();
        balrogOff();
        zangiefOff();
        dhalsimOff();
        ehondaOff();
        vegaOff();   
        blankafirstclick.style.display = 'flex';
        blankaTitle.style.visibility = 'visible';
        brazil.style.visibility = 'visible';
        blankaBirthday.style.visibility = 'visible';
        electricattacks.style.visibility = 'visible';
        electricthunder.style.visibility = 'visible';
        hadDiv14.style.display = 'flex';
        streetFighterII.style.visibility = 'visible';
        blankaDiv.style.visibility = 'visible';
        if(streetFighterII.style.visibility = 'hidden'){
            streetFighterII.style.visibility = 'visible';
        }
    }
}

let breakWallAnimationBlanka = document.getElementById("blankaversion");
let blankaWall2 = document.getElementById("blankaversion2");
let blankaWall3 = document.getElementById("blankaversion3");
let blankaWall4 = document.getElementById("blankaversion4");
let blankaWall5 = document.getElementById("blankaversion5");
let electricthunderIdle = document.getElementById("blankaversion6");
let hadDiv14 = document.getElementById("hadClick14");
let blankafirstclick = document.getElementById("click27");
let blankaidlesclick = document.getElementById("click28");

hadDiv14.style.visibility = 'hidden';

function playBreakWall14(){
    if(breakWallAnimationBlanka.paused){
        breakWallAnimationBlanka.style.visibility = 'visible';
        breakWallAnimationBlanka.currentTime = 0;
        breakWallAnimationBlanka.play();
    }

    if(blankaWall2.paused){
        blankaWall2.style.visibility = 'visible';
        blankaWall2.play();
    }

    if(blankaWall3.paused){
        blankaWall3.style.visibility = 'visible';
        blankaWall3.play();
    }

    blankafirstclick.style.display = 'none';
}

blankaWall2.addEventListener('ended', standBlanka, false);

function standBlanka(e) {
    blankaWall2.style.visibility = 'hidden';
    blankaWall5.style.visibility = 'hidden';
    electricthunderIdle.style.visibility = 'hidden';
    blankaidlesclick.style.visibility = 'visible';
    blankaidlesclick.style.display = 'flex';
    
    if(blankaWall4.style.visibility = 'hidden'){
        hadDiv14.style.visibility = 'visible';
        blankaWall4.style.visibility = 'visible';
        if(blankaWall4.paused){
            blankaWall4.play();
        }
    }

}

function randomIdle14() {
    if(blankaWall4.play()){
        blankaWall4.style.visibility = 'hidden';
        hadDiv14.style.visibility = 'hidden';
        if(blankaWall5.paused){
            blankaWall5.style.visibility = 'visible';
            blankaWall5.play();
        }
    }
}

blankaWall5.addEventListener('ended', standBlanka, false);

function specialIdle14(){
    if(blankaWall4.paused){
        hadDiv14.style.visibility = 'hidden';
    }else if(blankaWall4.play()){
        hadDiv14.style.cursor = 'pointer';
        hadDiv14.style.visibility = 'visible';
        if(electricthunderIdle.paused){
            blankaWall4.style.visibility = 'hidden';
            electricthunderIdle.style.visibility = 'visible';
            electricthunderIdle.play();
        }
    }
}

electricthunderIdle.addEventListener('ended', standBlanka, false);