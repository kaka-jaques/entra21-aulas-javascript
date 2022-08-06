procedimento(); //essa função está sendo chamada e não precisa de argumentos

BV("Usuário anonimo");
BV(true);
BV(30);
BV(BV);

function procedimento(){
    console.log("Esse tipo de função sempr executa da mesma forma, porque não tenho parâmetros para deixar dinâmico");

    console.warn("Essa função tb não retorna nada...");

}

function BV (nome){
    console.log(typeof(nome));
    console.warn("Bem-Vindo",nome);
    console.warn(`Bem-Venue ${nome}`);
}