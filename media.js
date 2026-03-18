const notas = [2, 5, 8, 7, 4, 6]

function calculoMedia(a){
return (a[0] + a[1] + a[2] + a[3] + a[4] + a[5]) / 6
    }            
    
function verificarAprovacao(a) {
    if (a >= 6) {
        return "Aluno aprovado";
    } else {
        return "Aluno reprovado";
    }
}

const media = calculoMedia(notas)
const situacao = verificarAprovacao(media)
console.log(media)
console.log(situacao)
