remove_min_max = (notas) => {
    let min = Math.min(...notas);
    let max = Math.max(...notas);
    let index_min = notas.indexOf(min);
    let index_max = notas.indexOf(max);
    notas.splice(index_min, 1);
    notas.splice(index_max, 1);
    return notas;
}

class Atleta{
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria(){
        if(this.idade >= 9 && this.idade <= 11){
            return 'Infantil';
        }else if(this.idade === 12 || this.idade === 13){
            return 'Juvenil';
        }else if(this.idade >= 14 || this.idade <= 15){
            return 'Intermediário';
        }else if(this.idade >= 16 || this.idade <= 30){
            return 'Adulto';
        }else{
            return 'Sem categoria';
        }
    }

    calculaIMC(){
        return this.peso / (this.altura * this.altura);
    }

    calculaMediaValida(){
        let notas = remove_min_max(this.notas);
        let media = 0;
        for(let i = 0; i < notas.length; i++){
            media += notas[i];
        }
        return media / notas.length;
    }

    obtemNomeAtleta(){
        return 'Nome: ' + this.nome;
    }

    obtemIdadeAtleta(){
        return 'Idade: ' + this.idade;
    }

    obtemPesoAtleta(){
        return 'Peso: ' + this.peso;
    }

    obtemNotasAtleta(){
        return 'Notas: ' + this.notas;
    }

    obtemCategoria() {
        return 'categoria: ' + this.calculaCategoria();
    }

    obtemIMC(){
        return 'IMC: ' + this.calculaIMC();
    }

    obtemMediaValida(){
        return 'Média válida: ' + this.calculaMediaValida();
    }
}

const atleta = new Atleta("Cesar Abascal",
  30, 80, 1.70,
  [10, 9.34, 8.42, 10, 7.88]);


console.log(atleta.obtemNomeAtleta());
console.log(atleta.obtemIdadeAtleta());
console.log(atleta.obtemPesoAtleta());
console.log(atleta.obtemNotasAtleta());
console.log(atleta.obtemCategoria());
console.log(atleta.obtemIMC());
console.log(atleta.obtemMediaValida());
