console.group("Ler conteudos com JQuery")
console.warn("Teste")
console.log($("#paragrafo_1"))
console.log($("#paragrafo_1").text())
console.groupEnd()

console.group("alterar conteudos com JQuery")
$("#paragrafo_2").text("Alterei com JQuery huehuehue")
console.log($("#paragrafo_2").text())
console.groupEnd()

console.group("Ler varios conteudos com JQuery")
let lista = $("p")
console.log(lista)
console.log(lista.text())

$("p").each(function(){

    console.log(this.textContent)

})
console.groupEnd()

console.group("Escrevendo vários conteudos com JQuery")
$("li").text("HUEHUEHEUHEUHEUHEUEHUE")
console.groupEnd()

console.group("Criar elementos com JQuery")
$("<button>", {
    text:"click aq!",
    class:"btn btn-primary"
}).appendTo("body")

$("body").append(
    $("<br>"),
    $("<b>", {text:"Texto negrito"}),
    $("<br>"),
    $("<i>", {text:"Text mamamia"})
)
console.groupEnd()

console.group('Mais de um item com JQuery');

console.groupEnd();

