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
    // Dark Elf names
    }else if(race == "dunmer"){
        name = darkElf1[numGenerator(darkElf1.length)] + darkElf2[numGenerator(darkElf2.length)];
    // Breton names
    }else if(race == "breton"){
        name = breton1[numGenerator(breton1.length)] + breton2[numGenerator(breton2.length)];
    }else if(race == "khajiit"){
        name = khajit1[numGenerator(khajit1.length)] + khajit2[numGenerator(khajit2.length)];
    }else if(race == "altmer"){
        name = altmer1[numGenerator(altmer1.length)] + altmer2[numGenerator(altmer2.length)];
    }else if(race == "argonian"){
        name = argonian1[numGenerator(argonian1.length)] + argonian2[numGenerator(argonian2.length)];
    }else if(race == "imperial"){
        name = imperials1[numGenerator(imperials1.length)] + imperials2[numGenerator(imperials2.length)];
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

// ORCS
const orcs1 = ["Gar", "Ma", "Da", "Ag", "Krog","Agro","G","Kur","Ghor","Lum","Lur","Mag","Ush","Sho","Shu","Ul"];
const orcs2 = ["nag", "kor", "nak", "um", "urn","ul","mug","mok","rub","akh","rak","arz","zul"];

// WOOD ELVES
const woodElf = ["An", "Ara", "Ar", "Co", "Elis", "Karo", "Lego", "Li", "Pali", "Ria", "Sil", "Ta"];
const woodElf2 = ["cher", "dell", "driel", "gan", "gorn", "las", "man", "nis", "nor", "rim", "tan", "van"];

// NORDS
const nords1 = ["Al"," Asg", "Bj", "Er", "Fenr", "Har", "Ingm", "Jurg", "Kj", "Moj", "Sor", "Torb", "Ulr"];
const nords2 = ["ald", "an", "ar", "arik", "arke", "arne", "eld", "en", "ens", "er", "ik", "is", "orn"];

// DARK ELVES
const darkElf1 =["Azar", "Cas", "Ereb", "Hel", "Nis", "Shal", "Shur", "Tur", "Ul", "Vanik", "Zan", "Zir"];
const darkElf2 =["ain", "ath", "far", "ien", "ik", "il", "imal", "imar", "kan", "on", "par", "seth"];

// BRETONS
const breton1 =["Agr", "Alab", "And", "Bed", "Dun", "Edw", "Gond", "Mord", "Per", "Rod", "Theod", "Trist", "Uth"];
const breton2 = ["ane", "ard", "astyr", "istair", "istyr", "ore", "oryan", "yctor", "yn", "ynak", "yrick", "yval","ywyr"];

// KHAJIT
const khajit1 = ["Ab\'", "Ak\'", "Akh\'", "Am", "Fa\'", "Hus", "Mo", "Moham", "Moj", "Na", "Om", "Sha", "Sin", "Za\'", "Zan\'"];
const khajit2 = ["ar", "bar", "bil", "der", "dul", "gh", "ir", "kir", "med", "nir", "noud", "sien", "soud", "taba", "tabe", "urabi"];

// ALTMER
const altmer1 = [ "Core", "Corri", "Cyre", "Gan", "Kala", "Kelkemme", "Lilland", "Lovi", "Mith", "Saru", "Sau", "Soli"];
const altmer2 = [ "dalf", "las", "lian", "llon", "man", "mon", "nar", "ra", "riil", "ril", "ron", "tar"];

// ARGONIANS
const argonian1 = ["Ah","Ali","Bi","Gat","Mik","Kax","Bar-","Jaree-","Lox-","Im-","Mahei-","Voz","Xu"];
const argonian2 = ["pah","wei","kur","skeeh","eenuz","sum","ei","axai","gnaza","zei","uxu","ish","sumeel","Jekka","Dum","Xulith"];

// Imperials
const imperials1 = ["Ar","Ant","Brus","Clau","Cos","Dan","Decen","Floren","For","Greg","Humi","Malin","Servat","Tyrell","Valand","Plauti","Vel","Zed"];
const imperials2 = ["miel","reas","ius","lav","tius","cus","nin","in","fan","nus","ero"];