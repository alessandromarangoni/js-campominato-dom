// difficolta
let select = document.getElementById("diff").value
// bottone di start
let bottone = document.getElementById("button");
// quantita di celle da generare
let quantiti = 49;
let quadrata = Math.sqrt(quantiti)
console.log(quadrata)
// bottoni per difficolta md e hd e reset
// let bottoneMD = document.getElementById("button2");
// let bottoneHD = document.getElementById("button3");
let reset =document.getElementById("button4")

// verifico la difficolta (non funziona)

if (select == "md"){
    quantiti = 10
}
else if(select == "hd"){
    quantiti = 2
}
// reset funzione
reset.addEventListener("click", function(){
    document.getElementById("boxed").innerHTML = "";
    punteggio = 0;
})
bottone.addEventListener("click",start,)
// bottoneMD.addEventListener("click",startMD)
// bottoneHD.addEventListener("click",startHD)
let bombe = [];
let punteggio=0;
for (let i = 0; i < 10; i++) {
    let randomBomba = Math.floor(Math.random() * 49);
    const bombaNumero =randomBomba[i];
    bombe.push(randomBomba)
    console.log(randomBomba)
    console.log(bombe)
}

function start() {

    for (let i = 1; i < quantiti +1; i++)   {
        let boxed = document.getElementById("boxed");
        let creaDiv = document.createElement("div");
        creaDiv.classList.add("box");
        boxed.appendChild(creaDiv);
        creaDiv.innerHTML = Math.floor(Math.random()*49)


        
        if (prova== true){
            creaDiv.style.color="#ffffff";
        }


        if (quantiti == 49){
            creaDiv.style.width = `calc(100% / ${quadrata})`
            creaDiv.style.height = `calc(100% / ${quadrata})`
        }
        // else if (quantiti == 10){
        //     creaDiv.style.width = `calc(100% / ${quadrata})`
        //     creaDiv.style.height = `calc(100% / ${quadrata})`
        // }

        // else{
        //     creaDiv.style.width = `calc(100% / ${quadrata})`
        //     creaDiv.style.height = `calc(100% / ${quadrata})`
        // }
            let clicked = false

            creaDiv.addEventListener("click", prova)
            function prova (){
                creaDiv.style.color="#ffffff";
                if(creaDiv.value == bombe[i]){
                    document.getElementById("boxed").classList.add("clicked")
                    alert(`hai perso, il tuo punteggio ${punteggio}`)
                    let partitaFinita = true;
                    return partitaFinita;
                }
                else{
                    clicked = true
                    punteggio ++
                }
            }
        }
    }



// funzione md
// function startMD() {
//     for (let i = 1; i < 81 +1; i++) {
//         // const numero = i[i]
//         let boxed = document.getElementById("boxed");
//         let creaDiv = document.createElement("div");
//         creaDiv.classList.add("boxMD");
//         boxed.appendChild(creaDiv);
//         creaDiv.innerHTML = [i];

//         creaDiv.addEventListener("click", function() {
//             console.log("this: ", this);
//             this.classList.toggle("clicked");
//         });
//     }
// }
// // funzione hd

// function startHD() {
//     for (let i = 1; i < 49 +1; i++) {
//         // const numero = i[i]
//         let boxed = document.getElementById("boxed");
//         let creaDiv = document.createElement("div");
//         creaDiv.classList.add("boxHD");
//         boxed.appendChild(creaDiv);
//         creaDiv.innerHTML = [i];

//         creaDiv.addEventListener("click", function() {
//             console.log("this: ", this);
//             this.classList.toggle("clicked");
//         });
//     }
// }
