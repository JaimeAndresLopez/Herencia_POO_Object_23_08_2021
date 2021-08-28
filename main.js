// class espada{
//     constructor(arg){
//         for(let [id, value] of Object.entries(arg)){
//             this[id]=value;
//         }
//     }
//     atacar(){
//         return this.ataque;
//     }
// }
// class espadaHielo extends espada{

// }
// let data={
//     ataque:30,
//     diamentro: "30cm",
//     efecto: undefined
// }

// const inst = new espada(data);
// console.log(inst.atacar());
// console.log(inst);

// const instHielo = new espadaHielo(data);
// console.log(instHielo.atacar());
// console.log(instHielo);

const espada = {
    ataque :30,
    diametro : "30cm",
    efecto : undefined,
    atacar(){
        return this.ataque;
    }
}
const espadaHielo = Object.create(espada);
Object.defineProperties(espadaHielo,{
                        "vida":{
                            value: "+30",
                            enumerable: true
                        },
                        "efecto":{
                            value: "Congelar",
                            enumerable: true
                        },
                        "ataque":{
                            value: espada.ataque += 10,
                            enumerable: true
                        }
});
espadaHielo.atacar = function(){
    return `${this.ataque} MOD ${this.efecto} y ${this.vida} vida`;
}
console.log(espadaHielo.atacar());
const espadaFuego = Object.create(espada);
Object.defineProperties(espadaFuego,{
                        "Vida":{
                            value: "+20",
                            enumerable: true
                        },
                        "Efecto":{
                            value: "Quemar",
                            enumerable: true
                        },
                        "Ataque":{
                            value:espada.ataque +=20,
                            enumarable:true
                        }

});
console.log(espadaFuego, espadaFuego.atacar());


