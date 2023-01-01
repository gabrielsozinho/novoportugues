const wordsDictionary = {
    "vidro": "vrido",
    "casa": "kasa",
    "carro": "karo",
    "moto": "moto",
    "cachorro": "kachoro",
    "gato": "gato",
    "mesa": "mesa",
    "cadeira": "kadeira",
    "armario": "armario",
    "geladeira": "geladeira",
    "cama": "kama",
    "faca": "faka",
    "colher": "kolher",
    "copo": "kopo",
    "garfo": "garfo",
    "prato": "prato",
    "panela": "panela",
    "chaleira": "chaleira",
    "fogão": "fogao",
    "microondas": "mikroondas",
    "caneta": "kaneta",
    "caderno": "kaderno",
    "livro": "livro",
    "papel": "papel",
    "telefone": "telefoni",
    "celulao": "celular",
    "computador": "komputador",
    "teclado": "teklado",
    "mouse": "mousr",
    "liquidificador": "likuidifikador",
    "motocicleta": "moto",
    "voce": "vose",
    "iogurte": "iorgute",
    "asterisco": "asteristico",
    "reuvenescer": "rejuvelhecer",
    "linda": "limda",
    "gostosa": "sua irma",
    "sozinho": "gostoso",
    "agente": "a gente",
    "bem-vindo": "ben-vimdo",
    "vindo": "vimdo",
    "bem": "ben",
    "vem": "vim",
    "bem-vinda": "ben-vimda",
    "vinda": "vimda",
    "bem-vindos": "ben-vimdos",
    "vindos": "vimdos",
    "bem-vindas": "ben-vimdas",
    "vindas": "vimdas",
    "bem-vindos": "ben-vimdos",
    "vindos": "vimdos",
    "cringe": "paia",
    "sigma": "smiga",
    "gostei": "gosei",
    "like": "laique",
    "boa": "bom",
    "noite": "dia",
    "boa-noite": "bom-dia",
    "boa-tarde": "bom dia",
    "mas": "mais",
    "tudo": "tudinho",
    "paysandu": "bosta",
    "paulista": "noiado",
    "elu": "ele/a",
    "delu": "dele/a",
    "lgbt": "gay",
    "sexo": "atos libidinosos",
    "respeito": "(palavra não identificada)",
    "idiota": "indiota",
    "opiniao": "opniao",
    "sobrancelha": "sombrancelha",
    "advogado": "adevogado",
    "cerebro": "celebro",
    "mau": "mal",
    "ha": "a",
    "choquei": "xoquei",
    "pprt": "papo reto",
    "para": "pra",
    "voce?": "vose?",
    "voce!": "vose!",
    "oi": "oii",
    "oie": "oii",
    "aguento": "tanko",
    "aguentar": "tankar",
    "deus": "Deus",
    "errado": "errsdo",
    "based": "baseado",
    "delicia": "delisia",
    "me": "mim",
    "suficiente": "soficiente",
    "opcional": "opicional",
    "anos": "anus",
    "horror": "horrof",
    "fazer": "faze",
    "andar": "anda",
    "estar": "esta",
    "haver": "have",
    "poder": "pode",
    "gostar": "gosar",
    "dizer": "dize",
    "dar": "da",
    "querer": "quere",
    "parecer": "parece",
    "deixar": "deixa",
    "sair": "sai",
    "ser": "se",
    "ver": "ve",
    "fds": "final de semana",
    "vtmnc": "vem tomar nescau comigo",
    "mn": "mano",
    "blz": "beleza",
    "sdds": "saudades",
    "gosto": "goso",
    "devagar": "de vaga",
    "recentemente": "recente mente",
    "girassol": "gira sol",
    "paraquedas": "para quedas",
    "pontape": "ponta pé",
    "combinacao": "combinassao",
    "coracao": "corasao"
}

var inputText = document.getElementById('oficial');
var outputText = document.getElementById('portugues')
var caracteres = document.getElementById('caracteres')
var caracteres2 = document.getElementById('caracteres2')
var copyButton = document.getElementById('copy-button')

caracteres.innerHTML = (document.getElementById("oficial").value).length;
caracteres2.innerHTML = (outputText.value.length - 1);
inputText.addEventListener('input', translate)
copyButton.addEventListener('click', copyText)

function copyText() {
    outputText.select();
    outputText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function translate(){
    var texto = document.getElementById("oficial").value;
    var texto = texto.toLowerCase();
    var texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    var texto = texto.replaceAll(",", "");
    var texto = texto.replaceAll(".", "");
    var texto = texto.replaceAll("\n", " \n");

    let palavras = texto.split(" ");

    var textoFinal = ""


    for (i = 0; i < palavras.length; i++) {
        if (wordsDictionary[palavras[i]] != null) {
            palavras[i] = wordsDictionary[palavras[i]];
        }
    }

    for (i = 0; i < palavras.length; i++) {
        textoFinal = textoFinal + palavras[i] + " ";
    }

    textoFinal = textoFinal.replaceAll(" \n", "\n");
    outputText.value = (textoFinal);
    caracteres.innerHTML = (document.getElementById("oficial").value).length;
    caracteres2.innerHTML = (textoFinal.length - 1);
}
