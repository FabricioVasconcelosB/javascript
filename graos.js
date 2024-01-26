const casasNoTabuleiro = 64;
var quantidadeTotal = 0;
var quantidadePorCasa=1;    
    
    for (var count = 0; count < casasNoTabuleiro; count++) {
        quantidadeTotal += Math.pow(2, count); 
        
        console.log("Até a casa "+ (count+1) + " tem " + quantidadeTotal + " grãos acumulados");
    
        
        console.log("Na casa " + (count+1) + " tem "+ quantidadePorCasa + " grãos"); 
        quantidadePorCasa*=2;
        
    }