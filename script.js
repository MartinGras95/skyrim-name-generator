// Generate button
const buttonGenerate = document.querySelector("#btnGenerate");
const selectRace = document.querySelector("#raceSelect");

// generate button
buttonGenerate.addEventListener("click", function(){
    var race = selectRace.options[selectRace.selectedIndex].value;

    chooseName(race);


})

// select name function
function chooseName(race) {
    let name;

    // Orc names
    if(race == "orc"){
       name = orcs1[numGenerator(orcs1.length)] + orcs2[numGenerator(orcs2.length)];
    // Nord names
    }else if(race == "nord"){
        name = nords1[numGenerator(nords1.length)]+ nords2[numGenerator(nords2.length)];
    // Bosmer names
    }else if(race == "bosmer"){
        name = woodElf[numGenerator(woodElf.length)] + woodElf2[numGenerator(woodElf2.length)];
    }

    document.querySelector("#name").innerHTML = name;
     
}

// number generator 
function numGenerator(max){
    let num = Math.floor(Math.random() * max);
    console.log(num);
    return num;
}


// Races

const orcs1 = ["Gar", "Ma", "Da", "Ag", "Krog"];
const orcs2 = ["nag", "kor", "nak", "um", "urn"];

const woodElf = ["An", "Ara", "Ar", "Co", "Elis", "Karo", "Lego", "Li", "Pali", "Ria", "Sil", "Ta"];
const woodElf2 = ["cher", "dell", "driel", "gan", "gorn", "las", "man", "nis", "nor", "rim", "tan", "van"];

const nords1 = ["Al"," Asg", "Bj", "Er", "Fenr", "Har", "Ingm", "Jurg", "Kj", "Moj", "Sor", "Torb", "Ulr"];
const nords2 = ["ald", "an", "ar", "arik", "arke", "arne", "eld", "en", "ens", "er", "ik", "is", "orn"];