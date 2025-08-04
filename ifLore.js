//Atributos do personagem:
const nome = "Arthur Targaryen";
let classe = "Rei Mago"; //Maior classe possivel
let racaPersonagem = "Humano"
let nivel = 10000000000000000000000000000000000;
let vida = 100000000000000000000;
let inteligência = 1000000
let moedas = 10000000000;
let xp = 100000000000000000;

//Novos atributos:
let manaMaxima = 50000000000;
let forcaBruta = 150000000000000000;
let defesa = 124000000;
let agilidade = 12000;

// Estado atual da história:
let localAtual = "Casa do Rei Demônio";
let missaoAtual = "Conseguir o Castelo";

//Atributos da Arma:
const NOMEARMA = "Cumpridor de Promessas"; //Cajado
let DANO_BASE = 1000000000000000000000000000000000000000;
const RARIDADEARMA = "Divino";
const ELEMENTOARMA = "Amaterasu"; //Chama negra que nunca apaga

//Atributos da Armadura:
const NOMEARMADURA = "Drogon";
let DEFESA_BASE = 10000000000000000000000000000000000;
const RARIDADEARMADURA = "Divino";
const MATERIAL = "Aço Valiriano";

//Montaria:
let temMontaria = true;
let NOME_MONTARIA = "Dracarys";
let racaMontaria = "Dragão"
let forcaMontaria = 1000000000000000;

//Prólogo:
console.log("===========================================");
console.log("📜Prólogo📜");
console.log("===========================================");
console.log(`Anteriormente na história de ${nome}, ele nasceu pobre e foi treinando e treinando mesmo sem magia. em um ataque á sua vila ele conseguiu as armas Divinas de seu mundo`);
console.log(`${nome} derrotou o Rei Domônio e diminuiu a taxa de ataques a vilas em seu mundo`)


//Aventura para conseguir o castelo\\\\\\\\\\\\\\\\;
//Capítulo 1:
console.log("===========================================");
console.log("⚔️ Capítulo 1")
console.log("===========================================");
console.log(`Após ${nome} virar ${classe} e ter a melhor arma, o cajado ${NOMEARMA} e melhor armadura ${NOMEARMADURA}. ele busca um bom local para morar.`);
console.log(`Para isso ele vai precisar de algumas coisas,como muitas moedas, xp e montarias.`);
console.log(`Como esse castelo se encontra oerdudo pelos céus ele precisara de uma montaria voadora para continuar.`);
if (temMontaria = true) {
    console.log("Você pode seguir, tem montaria. Usara seu Dragão Mitíco, Dracarys...");
} if (moedas >= 100000) {
    console.log("Consegue comprar passagem para sair do continente, custa 100000 moedas.");
    moedas -= 100000;
    console.log(moedas);
} if (xp >= 1000000) {
    console.log("Consegue seguir, tem xp sulficiente.");
}

//Capítulo 2:
console.log("===========================================");
console.log("🛡️ Capítulo 2");
console.log("===========================================");
console.log("Enquanto buscava o castelo perdido, encontrou nos céus algo incomum. Uma cidade magica de elfos, super tecnológicos.");
console.log("Lá ele buscava dicas de onde encontrar o castelo perdido");
console.log(`os elfos falam que a entrada de humanos é proibido. Inclusive, a maioria deles nunca nem tinha visto uma raça diferente da deles.`);
console.log("Disseram que se ele quisesse emtrar na ilha perdida de elfos ele precisaria fazer 2 testes muito dificeis. Um de força e outro inteligência");
console.log("Terá que ganhar do elfo mais forte da ilha em uma queda de braço, usando apenas força bruta, e terá que responder uma charada")
if (forcaBruta > 100000000) {
    console.log("Você conseguiu vencer, passou do primeiro desafio.")
} else {
    console.log("Você foi sentenciado a morte no Buraco do sol, uma abertura que serve para jogar traidores e intrusos.")
} if (inteligência > 100000) {
    console.log("Conseguiu responder a charada e assim poderá ter respostas e entrar na cidade.")
} else {
    console.log("Você foi sentenciado a morte e terá a cabeça decaptada.")
}