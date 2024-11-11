var personagens = {Ryu:"Ryu",Ken:"Ken",Chunli:"Chunli",Guile:"Guile",Bison:"Bison",Blanka:"Blanka",Sagat:"Sagat",Akuma:"Akuma",Dhalsim:"Dhalsim",Zangief:"Zangief"}

// montei a lista de personagens, onde cada personagem tem um valor com mesmo nome, que tá lá nos inputs do quiz

var resultado = {}

for(var personagem in personagens){
    resultado[personagem] = 0
}

// aqui tem um lista com cada personagem seguido de uma pontuação

document.getElementById('enviar').addEventListener('click',function(){

    var tudoRespondido = true // pra ver se o usuario respondeu todas as perguntas
    var perguntas = document.querySelectorAll('.q')

    perguntas.forEach(function(pergunta){
        var resposta = pergunta.querySelector('input[type="radio"]:checked')
        if(!resposta){ // se alguma pergunta nao foi respondida, aqui da falso e da o alerta ali embaixo
            tudoRespondido = false
        }

    })

    if(!tudoRespondido){
        alert("Por favor, responda todas a perguntas do questionário!!!")
        return
    }

    var respostas = document.querySelectorAll('input[type="radio"]:checked')

    respostas.forEach(function(resposta){
        valor = resposta.value
        resultado[valor]++
    })

    var personagemVencedor = ""
    var pontuacaoMaisAlta = 0

    for(personagem in resultado){
    if(resultado[personagem] > pontuacaoMaisAlta){
        pontuacaoMaisAlta = resultado[personagem]
        personagemVencedor = personagem
    }
}

switch (personagemVencedor) {
    case "Ryu":
        imagem = "imgsResultado/ryu.jpg"
        descricao = "Ryu é um dos personagens mais icônicos da série Street Fighter, conhecido por sua dedicação e seriedade nas artes marciais. Desde jovem, ele foi treinado pelo mestre Gouken ao lado de Ken Masters. Ryu é um lutador que busca constantemente melhorar suas habilidades e encontrar seu verdadeiro propósito, o que o leva a uma vida de treinamento intenso e batalhas pelo mundo."
        break;

    case "Ken":
        imagem = "imgsResultado/ken.jpg"
        descricao = "Ken Masters é o melhor amigo e rival de Ryu em Street Fighter. Diferente de Ryu, Ken é mais extrovertido, confiante e possui uma personalidade mais vibrante. Nascido em uma família rica nos Estados Unidos, ele treinou com o mesmo mestre, Gouken, que ensinou Ryu. Seu estilo de luta é uma variação mais agressiva do karatê, misturando sua técnica impecável com golpes rápidos e poderosos."
        break;

    case "Chunli":
        personagemVencedor = "Chun-Li"
        imagem = "imgsResultado/chunli.jpg"
        descricao = "Chun-Li é uma das personagens mais famosas e a primeira lutadora feminina da série Street Fighter. Ela é uma agente da Interpol, motivada a combater o crime e buscar justiça, especialmente contra a organização criminosa Shadaloo, liderada por M. Bison, que está ligada à morte de seu pai. Chun-Li é extremamente dedicada e disciplinada, equilibrando sua determinação com uma personalidade gentil e compassiva."
        break;

    case "Guile":
        imagem = "imgsResultado/guile.jpg"
        descricao = "Guile é facilmente identificado por seu visual marcante, com cabelo loiro, uniforme militar e tatuagens da bandeira americana em seus ombros. Seu estilo de luta é uma combinação de técnicas de combate militar com movimentos poderosos e precisos. Entre seus ataques mais famosos estão o Sonic Boom, um projétil de energia lançado com as mãos, e o Flash Kick, um chute giratório que ele realiza pulando para trás. Esses movimentos refletem sua força física e habilidades de combate. Guile representa o soldado determinado e incorruptível, sempre em busca de justiça e fiel aos seus valores."
        break;

    case "Bison":
        imagem = "imgsResultado/bison.jpg"
        descricao = "M. Bison é um personagem frio, calculista e implacável, com uma sede insaciável por poder. Sua personalidade é marcada pelo total desprezo pelos outros, tratando-os como meros peões em seu plano de dominação global. Ele é extremamente ambicioso, buscando controlar tanto o mundo quanto a mente das pessoas com seu poder psíquico, o Psycho Power. Bison é manipulador, cruel e usa a violência e a manipulação como ferramentas para alcançar seus objetivos. Apesar de sua brutalidade, ele é um estrategista brilhante, sempre um passo à frente de seus inimigos, e nunca hesita em eliminar quem se coloca no seu caminho."
        break;

    case "Blanka":
        imagem = "imgsResultado/blanka.jpg"
        descricao = "Blanka tem uma personalidade que mistura ferocidade e bondade. Apesar de sua aparência intimidadora e estilo de luta selvagem, ele é gentil e protetor com aqueles que considera amigos. Crescido na selva, Blanka é curioso e busca entender o mundo humano, sempre tentando se conectar com os outros de forma sincera. Sua lealdade e desejo de proteger os outros são aspectos centrais de sua personalidade, fazendo dele um personagem com um coração generoso."
        break;

    case "Sagat":
        imagem = "imgsResultado/sagat.jpg"
        descricao = "Sagat é um personagem marcado por sua imensa força e orgulho, mas também por uma grande dor emocional. Após ser derrotado por Ryu, Sagat desenvolveu uma profunda rivalidade com ele, o que despertou tanto seu desejo de vingança quanto um respeito silencioso. Sua personalidade é de um guerreiro disciplinado, que busca superar seus limites e alcançar a perfeição no combate, mas também carrega o peso de suas derrotas passadas. Ele é implacável e sério, e, embora tenha uma fachada de dureza, é um personagem com um código de honra e determinação inabaláveis."
        break;

    case "Akuma":
        imagem = "imgsResultado/akuma.jpg"
        descricao = "Akuma, também conhecido como Gouki no Japão, é um personagem sombrio e implacável, motivado pela busca incessante por poder. Ele é um mestre das artes marciais e pratica o Ansatsuken, um estilo de combate mortal que mistura ataques físicos e poderes sobrenaturais. Sua personalidade é dominada pelo desejo de atingir a perfeição através da destruição, sendo obcecado pela superação dos seus limites, mesmo que isso signifique sacrificar a própria humanidade. Akuma despreza fraquezas e mostra uma total falta de empatia, buscando apenas derrotar e destruir seus oponentes, sendo um dos mais temidos no universo Street Fighter."
        break;

    case "Dhalsim":
        imagem = "imgsResultado/dhalsim.jpg"
        descricao = "Dhalsim é um personagem tranquilo e sábio, conhecido por sua habilidade de manipular o corpo e a mente. Ele é um mestre do yoga e, ao contrário de muitos outros lutadores, suas motivações não são guiadas pela busca de poder ou vingança, mas pela paz interior e pelo desejo de proteger sua vila e sua família. Apesar de sua aparência inusitada, com seu corpo alongado e capacidade de esticar membros, Dhalsim é um personagem calmo e equilibrado, sempre buscando a harmonia. Sua filosofia é baseada no autodomínio, e ele luta não por prazer, mas para proteger o que é importante para ele."
        break;

    case "Zangief":
        imagem = "imgsResultado/zangief.jpg"
        descricao = "Zangief é um personagem forte e orgulhoso, conhecido por sua imensa força física e habilidades no estilo de luta russo, o Sambo. Ele é uma figura carismática e honrada, sempre representando sua pátria com orgulho. Zangief é um verdadeiro herói nacional para a Rússia, visto como um defensor do povo e um símbolo de coragem e resistência. Sua personalidade é amigável e respeitosa, mas também feroz no ringue, onde ele usa seus poderosos ataques de agarramento para derrotar adversários. Ele é um lutador que luta por honra, camaradagem e o bem-estar de seu país, sendo um verdadeiro símbolo de força e determinação."
        break;

    default:
        imagem = ""
        descricao = "Preencha o quiz corretamente!!!!!"
}
document.getElementById('resultadoQuiz').innerHTML = `<h2>Você seria...</h2>
<img class="imgResultado" src="${imagem}">
<h2>${personagemVencedor}!!!</h2>
<p id="descricaoResultado">${descricao}</p>`
})

