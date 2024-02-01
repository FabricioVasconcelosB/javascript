function escreverAsteristico(tamanho){ 
    for(var i=1;i<=tamanho;i++){
        var linha='';
        for(var j=1;j<=i;j++){
            linha+='*';
        }
        console.log(linha)
    }
}
function main(){
    var entrada=Number(document.getElementById('entrada').value);
    escreverAsteristico(entrada)
}