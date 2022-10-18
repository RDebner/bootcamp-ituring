function cores (cor) {
    switch (cor) {
        case "vermelha":
            console.log("O RGB da cor vermelha é rgb(255,0,0)")
            break;
        case "laranja":
            console.log("O RGB da cor laranja é rgb(255,128,0)")
            break;
        case "amarela" :
            console.log("O RGB da cor amarela é rgb(255,255,0)")
            break;
        case "verde":
            console.log("O RGB da cor verde é rgb(,255,)")
            break;
        case "azul claro":
            console.log("O RGB da cor azul claro é rgb(0,255,255)")
            break;
        case "azul marinho":
            console.log("O RGB da cor azul marinho é rgb(a,a,255)")
            break;
        case "rosa":
            console.log("O RGB da cor rosa é rgb(255,0,255)")
            break;  
            default:    
            console.log("O RGB padrão é rgb(255,255,255)")
    }

}
cores(cor = "azul claro")