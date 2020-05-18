var c2e={一隻:'a',狗:'dog',追:'chase',貓:'cat'};
function ma(b){
    var a=[];
    for(let i in b){
        var eword=b[i];
        var cword=c2e[eword];
        b.push(cword);
    }
    return a;
}
var 