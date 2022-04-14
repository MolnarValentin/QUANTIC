let td = document.querySelectorAll("td");

for (let i = 0; i < td.length; i++) {
  td[i].style.border = "0.25rem solid white";
  if (i <= 7) {
    if (i % 4 <= 1) {
      td[i].style.background = "#FFF56D";
    } else {
      td[i].style.background = "#99FFCD";
    }
  } else {
    if (i % 4 <= 1) {
      td[i].style.background = "#99FFCD";
    } else {
      td[i].style.background = "#FFF56D";
    }
  }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const szabaly = document.querySelector(".jatekszabaly");
const szabszov = document.querySelector(".szabaly");

szabaly.addEventListener("click", ()=>{
  szabszov.classList.toggle("szabaly");
});

let game = document.querySelector(".game");
const kezdokepernyo = document.querySelector(".kezdokepernyo");

const start = document.querySelector(".start");
const vissza = document.querySelector(".vissza");

let jatekos1 = document.querySelector("#jatekos1");
let jatekos2 = document.querySelector("#jatekos2");


let kiiras1 = document.querySelector(".kiiras1");
let kiiras2 = document.querySelector(".kiiras2");

let allas = document.querySelector(".allas");

let statisztika = document.querySelector(".statisztika");
let statisztika2 = document.querySelector(".statisztika2");


let pirosnegyzetszam = document.querySelector(".pirosnegyzetszam");
let pirosharomszogszam = document.querySelector(".pirosharomszogszam");
let piroskorszam = document.querySelector(".piroskorszam");
let pirosxszam = document.querySelector(".pirosxszam");
let zoldnegyzetszam = document.querySelector(".zoldnegyzetszam");
let zoldharomszogszam = document.querySelector(".zoldharomszogszam");
let zoldkorszam = document.querySelector(".zoldkorszam");
let zoldxszam = document.querySelector(".zoldxszam");

pirosnegyzetszam.innerHTML = 2;
pirosharomszogszam.innerHTML = 2;
piroskorszam.innerHTML = 2;
pirosxszam.innerHTML = 2;
zoldnegyzetszam.innerHTML = 2;
zoldharomszogszam.innerHTML = 2;
zoldkorszam.innerHTML = 2;
zoldxszam.innerHTML = 2;

let pirosnyert = document.createElement("div");
let zoldnyert = document.createElement("div");
let dontetlenlett = document.createElement("div");

pirosnyert.innerHTML = `A piros játékos nyert!`;

pirosnyert.classList.add("col-7");
pirosnyert.classList.add("fw-bold");
pirosnyert.classList.add("fs-5");

zoldnyert.innerHTML = `A zöld játékos nyert!`;

zoldnyert.classList.add("col-7");
zoldnyert.classList.add("fw-bold");
zoldnyert.classList.add("fs-5");

dontetlenlett.innerHTML = `Döntetlen!`;

dontetlenlett.classList.add("col-7");
dontetlenlett.classList.add("fw-bold");
dontetlenlett.classList.add("fs-5");

let vege = false;

let jatekos1nyert = false;

let jatekos2nyert = false;

let dontetlen = false;

let gyozelem1 = 0;
let gyozelem2 = 0;
let dontetlenek = 0;

let pirosjon = true;

let babuk1 = document.querySelector(".babuk1");
let babuk2 = document.querySelector(".babuk2");

let kivalasztottelem = ``;

let pirosnegyzet = document.querySelector(".pirosnegyzetkep");
let pirosharomszog = document.querySelector(".pirosharomszogkep");
let piroskor = document.querySelector(".piroskorkep");
let pirosx = document.querySelector(".pirosxkep");
let zoldnegyzet = document.querySelector(".zoldnegyzetkep");
let zoldharomszog = document.querySelector(".zoldharomszogkep");
let zoldkor = document.querySelector(".zoldkorkep");
let zoldx = document.querySelector(".zoldxkep");

let szurkebabu = document.createElement("div");
szurkebabu.classList.add("szurkebabu");

let szurkebabukep = document.createElement("img");
szurkebabukep.setAttribute("src","Kepek/szurkebabu.svg");
szurkebabukep.classList.add("figura3");

szurkebabu.appendChild(szurkebabukep);

let allascolpiros = document.createElement("div");
allascolpiros.classList.add("col");
allascolpiros.classList.add("allascolpiros");
  
let pirosbabu2 = document.createElement("div");
pirosbabu2.classList.add("pirosbabu");
  
let pirosbabukep2 = document.createElement("img");
pirosbabukep2.setAttribute("src","Kepek/pirosbabu.svg");
pirosbabukep2.classList.add("figura1");
  
pirosbabu2.appendChild(pirosbabukep2);
  
allascolpiros.appendChild(pirosbabu2);
  
let vs1div = document.createElement("div");
vs1div.classList.add("fw-bold");
  
allascolpiros.appendChild(vs1div);
  
allas.appendChild(allascolpiros);
  
let allascolvs = document.createElement("div");
allascolvs.classList.add("col");
allascolvs.classList.add("allascolvs");
allascolvs.innerHTML = "vs";
  
allas.appendChild(allascolvs);
  
  
let allascolzold = document.createElement("div");
allascolzold.classList.add("col");
allascolzold.classList.add("allascolzold");

let zoldbabu2 = document.createElement("div");
zoldbabu2.classList.add("zoldbabu");

let zoldbabukep2 = document.createElement("img");
zoldbabukep2.setAttribute("src","Kepek/zoldbabu.svg");
zoldbabukep2.classList.add("figura2");

zoldbabu2.appendChild(zoldbabukep2);
  
allascolzold.appendChild(zoldbabu2);

let vs2div = document.createElement("div");
vs2div.classList.add("fw-bold");

allascolzold.appendChild(vs2div);

allas.appendChild(allascolzold);

let gyozelem1szam = document.createElement("div");
let gyozelem2szam = document.createElement("div");
let dontetlenszam = document.createElement("div");

let vege1x = false;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



start.addEventListener("click", () => {
  kezdokepernyo.classList.toggle("szabaly");
  game.classList.toggle("szabaly");

  if(vege1x === true) {
    gyozelem1szam.classList.add("fw-bold");
    gyozelem2szam.classList.add("fw-bold");
    dontetlenszam.classList.add("fw-bold");
  
    gyozelem1szam.innerHTML = `A piros játékos győzelmei: ${gyozelem1}`;
    gyozelem2szam.innerHTML = `A zöld játékos győzelmei: ${gyozelem2}`;
    dontetlenszam.innerHTML = `Döntetlenek száma: ${dontetlenek}`;
    statisztika2.appendChild(gyozelem1szam);
    statisztika2.appendChild(gyozelem2szam);
    statisztika2.appendChild(dontetlenszam);

  }


  let nev1 = "1.játékos";
  let nev2 = "2.játékos";

  if (jatekos1.value !== "") {
    nev1 = jatekos1.value;
  }
  if (jatekos2.value !== "") {
    nev2 = jatekos2.value;
  }
  allas.innerHTML = ``;
  
  allas.appendChild(allascolpiros);
  allas.appendChild(allascolvs);
  allas.appendChild(allascolzold);
  

  vs1div.innerHTML = nev1;
  vs2div.innerHTML = nev2;
  
  kiiras1.innerHTML = nev1;
  kiiras2.innerHTML = nev2;

  if(pirosjon) {
    if (pirosbabu2.hasChildNodes()) {
      pirosbabu2.removeChild(pirosbabu2.childNodes[0]);
    }
    pirosbabu2.appendChild(pirosbabukep2);
    
    if (zoldbabu2.hasChildNodes()) {
      zoldbabu2.removeChild(zoldbabu2.childNodes[0]);
    }
    zoldbabu2.appendChild(szurkebabukep);
  }

  if(!pirosjon) {
    if (pirosbabu2.hasChildNodes()) {
      pirosbabu2.removeChild(pirosbabu2.childNodes[0]);
    }
    pirosbabu2.appendChild(szurkebabukep);
    
    if (zoldbabu2.hasChildNodes()) {
      zoldbabu2.removeChild(zoldbabu2.childNodes[0]);
    }
    zoldbabu2.appendChild(zoldbabukep2);
  }
  
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


vissza.addEventListener("click", () => {
  kezdokepernyo.classList.toggle("szabaly");
  game.classList.toggle("szabaly");
  jatekos1.value = "";
  jatekos2.value = "";
      
  zoldnellevo = 4;
  pirosnallevo = 4;
  vege = false;
  jatekos1nyert = false;
  jatekos2nyert = false;
  dontetlen = false;
  pirosjon = true;

  statisztika.innerHTML = "";

  gyozelem1szam.classList.add("fw-bold");
  gyozelem2szam.classList.add("fw-bold");
  dontetlenszam.classList.add("fw-bold");

  gyozelem1szam.innerHTML = `A piros játékos győzelmei: ${gyozelem1}`;
  gyozelem2szam.innerHTML = `A zöld játékos győzelmei: ${gyozelem2}`;
  dontetlenszam.innerHTML = `Döntetlenek száma: ${dontetlenek}`;


  statisztika.appendChild(gyozelem1szam);
  statisztika.appendChild(gyozelem2szam);
  statisztika.appendChild(dontetlenszam);


  for(let i = 0; i<td.length; i++) {
    if(td[i].hasChildNodes()) {
      td[i].removeChild(td[i].childNodes[0]);
    }
  }

  pirosnegyzetszam.innerHTML = 2;
  pirosharomszogszam.innerHTML = 2;
  piroskorszam.innerHTML = 2;
  pirosxszam.innerHTML = 2;
  zoldnegyzetszam.innerHTML = 2;
  zoldharomszogszam.innerHTML = 2;
  zoldkorszam.innerHTML = 2;
  zoldxszam.innerHTML = 2;

  statisztika.classList.remove("mutat");

  babuk1.classList.remove("opacity");
  babuk2.classList.add("opacity");

  pirosnegyzet.classList.remove("noHover");
  pirosharomszog.classList.remove("noHover");
  piroskor.classList.remove("noHover");
  pirosx.classList.remove("noHover");
  zoldnegyzet.classList.add("noHover");
  zoldharomszog.classList.add("noHover");
  zoldkor.classList.add("noHover");
  zoldx.classList.add("noHover");

  pirosnegyzet.parentElement.children[0].classList.remove("pirosnegyzetkivalaszt");
  pirosharomszog.parentElement.children[0].classList.remove("pirosharomszogkivalaszt");
  piroskor.parentElement.children[0].classList.remove("piroskorkivalaszt");
  pirosx.parentElement.children[0].classList.remove("pirosxkivalaszt");
  
  zoldnegyzet.parentElement.children[0].classList.remove("zoldnegyzetkivalaszt");
  zoldharomszog.parentElement.children[0].classList.remove("zoldharomszogkivalaszt");
  zoldkor.parentElement.children[0].classList.remove("zoldkorkivalaszt");
  zoldx.parentElement.children[0].classList.remove("zoldxkivalaszt");

  pirosnegyzet.classList.remove("noHover2");
  pirosnegyzet.classList.remove("pirosnegyzetelfogyott");
  pirosharomszog.classList.remove("noHover2");
  pirosharomszog.classList.remove("pirosharomszogelfogyott");
  piroskor.classList.remove("noHover2");
  piroskor.classList.remove("piroskorelfogyott");
  pirosx.classList.remove("noHover2");
  pirosx.classList.remove("pirosxelfogyott");
  zoldnegyzet.classList.remove("noHover2");
  zoldnegyzet.classList.remove("zoldnegyzetelfogyott");
  zoldharomszog.classList.remove("noHover2");
  zoldharomszog.classList.remove("zoldharomszogelfogyott");
  zoldkor.classList.remove("noHover2");
  zoldkor.classList.remove("zoldkorelfogyott");
  zoldx.classList.remove("noHover2");
  zoldx.classList.remove("zoldxelfogyott");
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


babuk1.addEventListener("click",(e) =>{


    if(pirosjon === true && vege === false) {
        if(e.target.matches(".pirosnegyzetkep") || e.target.matches(".pirosharomszogkep") || e.target.matches(".piroskorkep") || e.target.matches(".pirosxkep")) {
          if(e.target.parentElement.children[1].innerHTML>0){
            kivalasztottelem = e.target;
            if(e.target === pirosnegyzet) {
              pirosnegyzet.parentElement.children[0].classList.add("pirosnegyzetkivalaszt");
              pirosharomszog.parentElement.children[0].classList.remove("pirosharomszogkivalaszt");
              piroskor.parentElement.children[0].classList.remove("piroskorkivalaszt");
              pirosx.parentElement.children[0].classList.remove("pirosxkivalaszt");
            }
            if(e.target === pirosharomszog) {
              pirosnegyzet.parentElement.children[0].classList.remove("pirosnegyzetkivalaszt");
              pirosharomszog.parentElement.children[0].classList.add("pirosharomszogkivalaszt");
              piroskor.parentElement.children[0].classList.remove("piroskorkivalaszt");
              pirosx.parentElement.children[0].classList.remove("pirosxkivalaszt");
            }
            if(e.target === piroskor) {
              pirosnegyzet.parentElement.children[0].classList.remove("pirosnegyzetkivalaszt");
              pirosharomszog.parentElement.children[0].classList.remove("pirosharomszogkivalaszt");
              piroskor.parentElement.children[0].classList.add("piroskorkivalaszt");
              pirosx.parentElement.children[0].classList.remove("pirosxkivalaszt");
            }
            if(e.target === pirosx) {
              pirosnegyzet.parentElement.children[0].classList.remove("pirosnegyzetkivalaszt");
              pirosharomszog.parentElement.children[0].classList.remove("pirosharomszogkivalaszt");
              piroskor.parentElement.children[0].classList.remove("piroskorkivalaszt");
              pirosx.parentElement.children[0].classList.add("pirosxkivalaszt");
            }
          }
        }
    }
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


babuk2.addEventListener("click",(e) =>{


  if(pirosjon === false && vege === false) {
      if(e.target.matches(".zoldnegyzetkep") || e.target.matches(".zoldharomszogkep") || e.target.matches(".zoldkorkep") || e.target.matches(".zoldxkep")) {
        if(e.target.parentElement.children[1].innerHTML>0){
          kivalasztottelem = e.target;
          if(e.target === zoldnegyzet) {
            zoldnegyzet.parentElement.children[0].classList.add("zoldnegyzetkivalaszt");
            zoldharomszog.parentElement.children[0].classList.remove("zoldharomszogkivalaszt");
            zoldkor.parentElement.children[0].classList.remove("zoldkorkivalaszt");
            zoldx.parentElement.children[0].classList.remove("zoldxkivalaszt");
          }
          if(e.target === zoldharomszog) {
            zoldnegyzet.parentElement.children[0].classList.remove("zoldnegyzetkivalaszt");
            zoldharomszog.parentElement.children[0].classList.add("zoldharomszogkivalaszt");
            zoldkor.parentElement.children[0].classList.remove("zoldkorkivalaszt");
            zoldx.parentElement.children[0].classList.remove("zoldxkivalaszt");
          }
          if(e.target === zoldkor) {
            zoldnegyzet.parentElement.children[0].classList.remove("zoldnegyzetkivalaszt");
            zoldharomszog.parentElement.children[0].classList.remove("zoldharomszogkivalaszt");
            zoldkor.parentElement.children[0].classList.add("zoldkorkivalaszt");
            zoldx.parentElement.children[0].classList.remove("zoldxkivalaszt");
          }
          if(e.target === zoldx) {
            zoldnegyzet.parentElement.children[0].classList.remove("zoldnegyzetkivalaszt");
            zoldharomszog.parentElement.children[0].classList.remove("zoldharomszogkivalaszt");
            zoldkor.parentElement.children[0].classList.remove("zoldkorkivalaszt");
            zoldx.parentElement.children[0].classList.add("zoldxkivalaszt");
          }
        }
      }
  }
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let felsosarga = [td[0],td[1],td[4],td[5]];
let felsozold = [td[2],td[3],td[6],td[7]];
let alsosarga = [td[10],td[11],td[14],td[15]];
let alsozold = [td[8],td[9],td[12],td[13]];
let elsooszlop = [td[0],td[4],td[8],td[12]];
let masodikoszlop = [td[1],td[5],td[9],td[13]];
let harmadikoszlop = [td[2],td[6],td[10],td[14]];
let negyedikoszlop = [td[3],td[7],td[11],td[15]];
let elsosor = [td[0],td[1],td[2],td[3]];
let masodiksor = [td[4],td[5],td[6],td[7]];
let harmadiksor = [td[8],td[9],td[10],td[11]];
let negyediksor = [td[12],td[13],td[14],td[15]];

let zoldnellevo = 4;
let pirosnallevo = 4;

let vizsgalandoclass;

function tartalmaze(x) {
  let rossze = false;
  if(x.hasChildNodes()) {
    if(x.childNodes[0].classList.contains(vizsgalandoclass)) {
      rossze = true;
    }
  }
  return rossze;
}


for(let i = 0; i<td.length; i++) {
  td[i].addEventListener("click",(e)=>{
    if(vege === false && e.target.innerHTML === "" && kivalasztottelem != "") {
      let abra = document.createElement("div");
      let kivalasztottelem_attribute = kivalasztottelem.classList[0];
      abra.classList.add(kivalasztottelem_attribute);
      abra.classList.add("mx-auto");
      abra.classList.add("noHover");

      if(abra.classList[0] === "pirosnegyzetkep" || abra.classList[0] === "zoldnegyzetkep") {
        abra.setAttribute("attrb","negyzet");
      }

      if(abra.classList[0] === "pirosharomszogkep" || abra.classList[0] === "zoldharomszogkep") {
        abra.setAttribute("attrb","haromszog");
      }

      if(abra.classList[0] === "piroskorkep" || abra.classList[0] === "zoldkorkep") {
        abra.setAttribute("attrb","kor");
      }

      if(abra.classList[0] === "pirosxkep" || abra.classList[0] === "zoldxkep") {
        abra.setAttribute("attrb","x");
      }


      let vizsgalando = document.createElement("div");

      if(kivalasztottelem_attribute === pirosnegyzet.classList[0]) {
        vizsgalando.classList.add("zoldnegyzetkep");
      }
      if(kivalasztottelem_attribute === pirosharomszog.classList[0]) {
        vizsgalando.classList.add("zoldharomszogkep");
      }
      if(kivalasztottelem_attribute === piroskor.classList[0]) {
        vizsgalando.classList.add("zoldkorkep");
      }
      if(kivalasztottelem_attribute === pirosx.classList[0]) {
        vizsgalando.classList.add("zoldxkep");
      }
      if(kivalasztottelem_attribute === zoldnegyzet.classList[0]) {
        vizsgalando.classList.add("pirosnegyzetkep");
      }
      if(kivalasztottelem_attribute === zoldharomszog.classList[0]) {
        vizsgalando.classList.add("pirosharomszogkep");
      }
      if(kivalasztottelem_attribute === zoldkor.classList[0]) {
        vizsgalando.classList.add("piroskorkep");
      }
      if(kivalasztottelem_attribute === zoldx.classList[0]) {
        vizsgalando.classList.add("pirosxkep");
      }

      vizsgalandoclass = vizsgalando.classList[0];

      let lerakhato = true;

    
      if(felsosarga.includes(e.target)) {
        if(felsosarga.some(tartalmaze)) {
          lerakhato = false;
        } 
      }

      if(felsozold.includes(e.target)) {
        if(felsozold.some(tartalmaze)) {
          lerakhato = false;
        } 
      }

      if(alsosarga.includes(e.target)) {
        if(alsosarga.some(tartalmaze)) {
          lerakhato = false;
        } 
      }

      if(alsozold.includes(e.target)) {
        if(alsozold.some(tartalmaze)) {
          lerakhato = false;
        } 
      }

      if(elsooszlop.includes(e.target)) {
        if(elsooszlop.some(tartalmaze)) {
          lerakhato = false;
        } 
      }

      if(masodikoszlop.includes(e.target)) {
        if(masodikoszlop.some(tartalmaze)) {
          lerakhato = false;
        } 
      }

      if(harmadikoszlop.includes(e.target)) {
        if(harmadikoszlop.some(tartalmaze)) {
          lerakhato = false;
        } 
      }

      if(negyedikoszlop.includes(e.target)) {
        if(negyedikoszlop.some(tartalmaze)) {
          lerakhato = false;
        } 
      }

      if(elsosor.includes(e.target)) {
        if(elsosor.some(tartalmaze)) {
          lerakhato = false;
        } 
      }

      if(masodiksor.includes(e.target)) {
        if(masodiksor.some(tartalmaze)) {
          lerakhato = false;
        } 
      }

      if(harmadiksor.includes(e.target)) {
        if(harmadiksor.some(tartalmaze)) {
          lerakhato = false;
        } 
      }

      if(negyediksor.includes(e.target)) {
        if(negyediksor.some(tartalmaze)) {
          lerakhato = false;
        } 
      }

      if(abra.classList.contains("pirosnegyzetkep") && pirosnegyzetszam.innerHTML > 0 && lerakhato === true) {
        pirosnegyzetszam.innerHTML = pirosnegyzetszam.innerHTML - 1;
        e.target.appendChild(abra);
      }
      if(abra.classList.contains("pirosharomszogkep") && pirosharomszogszam.innerHTML > 0 && lerakhato === true) {
        pirosharomszogszam.innerHTML = pirosharomszogszam.innerHTML - 1;
        e.target.appendChild(abra);
      }
      if(abra.classList.contains("piroskorkep") && piroskorszam.innerHTML > 0 && lerakhato === true) {
        piroskorszam.innerHTML = piroskorszam.innerHTML - 1;
        e.target.appendChild(abra);
      }
      if(abra.classList.contains("pirosxkep") && pirosxszam.innerHTML > 0 && lerakhato === true) {
        pirosxszam.innerHTML = pirosxszam.innerHTML - 1;
        e.target.appendChild(abra);
      }
      if(abra.classList.contains("zoldnegyzetkep") && zoldnegyzetszam.innerHTML > 0 && lerakhato === true) {
        zoldnegyzetszam.innerHTML = zoldnegyzetszam.innerHTML - 1;
        e.target.appendChild(abra);
      }
      if(abra.classList.contains("zoldharomszogkep") && zoldharomszogszam.innerHTML > 0 && lerakhato === true) {
        zoldharomszogszam.innerHTML = zoldharomszogszam.innerHTML - 1;
        e.target.appendChild(abra);
      }
      if(abra.classList.contains("zoldkorkep") && zoldkorszam.innerHTML > 0 && lerakhato === true) {
        zoldkorszam.innerHTML = zoldkorszam.innerHTML - 1;
        e.target.appendChild(abra);
      }
      if(abra.classList.contains("zoldxkep") && zoldxszam.innerHTML > 0 && lerakhato === true) {
        zoldxszam.innerHTML = zoldxszam.innerHTML - 1;
        e.target.appendChild(abra);
      }
      
      if(pirosnegyzetszam.innerHTML == 0) {
        pirosnegyzet.classList.add("noHover2");
        pirosnegyzet.classList.add("pirosnegyzetelfogyott");

      }

      if(pirosharomszogszam.innerHTML == 0) {
        pirosharomszog.classList.add("noHover2");
        pirosharomszog.classList.add("pirosharomszogelfogyott");

      }

      if(piroskorszam.innerHTML == 0) {
        piroskor.classList.add("noHover2");
        piroskor.classList.add("piroskorelfogyott");

      }

      if(pirosxszam.innerHTML == 0) {
        pirosx.classList.add("noHover2");
        pirosx.classList.add("pirosxelfogyott");

      }

      if(zoldnegyzetszam.innerHTML == 0) {
        zoldnegyzet.classList.add("noHover2");
        zoldnegyzet.classList.add("zoldnegyzetelfogyott");

      }

      if(zoldharomszogszam.innerHTML == 0) {
        zoldharomszog.classList.add("noHover2");
        zoldharomszog.classList.add("zoldharomszogelfogyott");

      }

      if(zoldkorszam.innerHTML == 0) {
        zoldkor.classList.add("noHover2");
        zoldkor.classList.add("zoldkorelfogyott");

      }

      if(zoldxszam.innerHTML == 0) {
        zoldx.classList.add("noHover2");
        zoldx.classList.add("zoldxelfogyott");

      }


      kivalasztottelem = "";
      abra = "";

      pirosnegyzet.parentElement.children[0].classList.remove("pirosnegyzetkivalaszt");
      pirosharomszog.parentElement.children[0].classList.remove("pirosharomszogkivalaszt");
      piroskor.parentElement.children[0].classList.remove("piroskorkivalaszt");
      pirosx.parentElement.children[0].classList.remove("pirosxkivalaszt");
      zoldnegyzet.parentElement.children[0].classList.remove("zoldnegyzetkivalaszt");
      zoldharomszog.parentElement.children[0].classList.remove("zoldharomszogkivalaszt");
      zoldkor.parentElement.children[0].classList.remove("zoldkorkivalaszt");
      zoldx.parentElement.children[0].classList.remove("zoldxkivalaszt");
  
      if(lerakhato === true) {

        pirosnegyzet.parentElement.children[0].classList.remove("pirosnegyzetkivalaszt");
        pirosharomszog.parentElement.children[0].classList.remove("pirosharomszogkivalaszt");
        piroskor.parentElement.children[0].classList.remove("piroskorkivalaszt");
        pirosx.parentElement.children[0].classList.remove("pirosxkivalaszt");
        zoldnegyzet.parentElement.children[0].classList.remove("zoldnegyzetkivalaszt");
        zoldharomszog.parentElement.children[0].classList.remove("zoldharomszogkivalaszt");
        zoldkor.parentElement.children[0].classList.remove("zoldkorkivalaszt");
        zoldx.parentElement.children[0].classList.remove("zoldxkivalaszt");

        pirosjon = !pirosjon;
      }


      let szamlalo = 0;
      let attributes = [];

      let nemugyanaz = 0;

      let vizsgalandoreszek = [felsosarga,felsozold,alsosarga,alsozold,elsooszlop,masodikoszlop,harmadikoszlop,negyedikoszlop,elsosor,masodiksor,harmadiksor,negyediksor];

      for(let j = 0; j<vizsgalandoreszek.length; j++) {
        for(let i=0; i<4; i++) {
          if(vizsgalandoreszek[j][i].hasChildNodes()){
            attributes[i] = vizsgalandoreszek[j][i].children[0].getAttribute("attrb");
            szamlalo++;
          }
          if(szamlalo === 4) {
            attributes.sort();
            for(i = 0; i<4; i++) {
              if(attributes[4-i] !== attributes[4-(i + 1)]) {
                nemugyanaz++;
              }
              if(nemugyanaz === 4 && pirosjon) {
                jatekos2nyert = true;
                for(let i=0; i<vizsgalandoreszek[j].length; i++) {
                  if(vizsgalandoreszek[j][i].children[0].classList[0] === "pirosnegyzetkep") {
                    vizsgalandoreszek[j][i].children[0].classList.add("pirosnegyzetkivalaszt");
                  }
                  if(vizsgalandoreszek[j][i].children[0].classList[0] === "pirosharomszogkep") {
                  vizsgalandoreszek[j][i].children[0].classList.add("pirosharomszogkivalaszt");
                  }
                  if(vizsgalandoreszek[j][i].children[0].classList[0] === "piroskorkep") {
                    vizsgalandoreszek[j][i].children[0].classList.add("piroskorkivalaszt");
                  }
                  if(vizsgalandoreszek[j][i].children[0].classList[0] === "pirosxkep") {
                    vizsgalandoreszek[j][i].children[0].classList.add("pirosxkivalaszt");
                  }
                  if(vizsgalandoreszek[j][i].children[0].classList[0] === "zoldnegyzetkep") {
                    vizsgalandoreszek[j][i].children[0].classList.add("zoldnegyzetkivalaszt");
                  }
                  if(vizsgalandoreszek[j][i].children[0].classList[0] === "zoldharomszogkep") {
                    vizsgalandoreszek[j][i].children[0].classList.add("zoldharomszogkivalaszt");
                  }
                  if(vizsgalandoreszek[j][i].children[0].classList[0] === "zoldkorkep") {
                    vizsgalandoreszek[j][i].children[0].classList.add("zoldkorkivalaszt");
                  }
                  if(vizsgalandoreszek[j][i].children[0].classList[0] === "zoldxkep") {
                    vizsgalandoreszek[j][i].children[0].classList.add("zoldxkivalaszt");
                  }
                }
              } 
              if(nemugyanaz === 4 && !pirosjon) {
                jatekos1nyert = true;
                for(let i=0; i<vizsgalandoreszek[j].length; i++) {
                  if(vizsgalandoreszek[j][i].children[0].classList[0] === "pirosnegyzetkep") {
                    vizsgalandoreszek[j][i].children[0].classList.add("pirosnegyzetkivalaszt");
                  }
                  if(vizsgalandoreszek[j][i].children[0].classList[0] === "pirosharomszogkep") {
                    vizsgalandoreszek[j][i].children[0].classList.add("pirosharomszogkivalaszt");
                  }
                  if(vizsgalandoreszek[j][i].children[0].classList[0] === "piroskorkep") {
                    vizsgalandoreszek[j][i].children[0].classList.add("piroskorkivalaszt");
                  }
                  if(vizsgalandoreszek[j][i].children[0].classList[0] === "pirosxkep") {
                    vizsgalandoreszek[j][i].children[0].classList.add("pirosxkivalaszt");
                  }
                  if(vizsgalandoreszek[j][i].children[0].classList[0] === "zoldnegyzetkep") {
                    vizsgalandoreszek[j][i].children[0].classList.add("zoldnegyzetkivalaszt");
                  }
                  if(vizsgalandoreszek[j][i].children[0].classList[0] === "zoldharomszogkep") {
                    vizsgalandoreszek[j][i].children[0].classList.add("zoldharomszogkivalaszt");
                  }
                  if(vizsgalandoreszek[j][i].children[0].classList[0] === "zoldkorkep") {
                    vizsgalandoreszek[j][i].children[0].classList.add("zoldkorkivalaszt");
                  }
                  if(vizsgalandoreszek[j][i].children[0].classList[0] === "zoldxkep") {
                    vizsgalandoreszek[j][i].children[0].classList.add("zoldxkivalaszt");
                  }
                }
              }
            }
          }
        }

        attributes = [];

        szamlalo = 0;
        nemugyanaz = 0;

      }
      

      if (jatekos1nyert) {
        allas.innerHTML =
        `<div class="col-5">
          <div><img src="Kepek/pirosbabu.svg" alt="figura1" class="figura1"></div>
          <div class="vs2"></div>
        </div>
        <div class="col-7 fw-bold fs-5">
        A piros játkos nyert!
        </div>`;
      }
      if(jatekos2nyert) {
        allas.innerHTML = 
        `<div class="col-7 fw-bold fs-5">
        A zöld játkos nyert!
        </div>
        <div class="col-5">
        <div><img src="Kepek/zoldbabu.svg" alt="figura1" class="figura2"></div>
        <div class="vs2"></div>
        </div>`;
      }
      if (dontetlen) {
        allas.innerHTML =
        `<div class="col fw-bold fs-5">
        Döntetlen!
        </div>`;
      }
      
      if(jatekos1nyert === true || jatekos2nyert === true || dontetlen === true) {
        vege = true;
      }

      if(vege === true) {
        vege1x = true;
      }

      if(jatekos1nyert) {
        gyozelem1++;
      }

      if(jatekos2nyert) {
        gyozelem2++;
      }

      if(dontetlen === true) {
        dontetlenek++;
      }


      gyozelem1szam.classList.add("fw-bold");
      gyozelem2szam.classList.add("fw-bold");
      dontetlenszam.classList.add("fw-bold");

      gyozelem1szam.innerHTML = `A piros játékos győzelmei: ${gyozelem1}`;
      gyozelem2szam.innerHTML = `A zöld játékos győzelmei: ${gyozelem2}`;
      dontetlenszam.innerHTML = `Döntetlenek száma: ${dontetlenek}`;


      statisztika.appendChild(gyozelem1szam);
      statisztika.appendChild(gyozelem2szam);
      statisztika.appendChild(dontetlenszam);


      statisztika2.appendChild(gyozelem1szam);
      statisztika2.appendChild(gyozelem2szam);
      statisztika2.appendChild(dontetlenszam);
      
      if(vege) {
        statisztika2.classList.remove("mutat");
        statisztika.classList.remove("mutat");
      }

      if(pirosjon && vege === false) {
      
        babuk1.classList.remove("opacity");
        babuk2.classList.add("opacity");
      
        pirosnegyzet.classList.remove("noHover");
        pirosharomszog.classList.remove("noHover");
        piroskor.classList.remove("noHover");
        pirosx.classList.remove("noHover");
        zoldnegyzet.classList.add("noHover");
        zoldharomszog.classList.add("noHover");
        zoldkor.classList.add("noHover");
        zoldx.classList.add("noHover");
      
        if (pirosbabu2.hasChildNodes()) {
          pirosbabu2.removeChild(pirosbabu2.childNodes[0]);
        }
        pirosbabu2.appendChild(pirosbabukep2);
        
        if (zoldbabu2.hasChildNodes()) {
          zoldbabu2.removeChild(zoldbabu2.childNodes[0]);
        }
        zoldbabu2.appendChild(szurkebabukep);
      }
      
      if(!pirosjon && vege === false) {
      
        babuk1.classList.add("opacity");
        babuk2.classList.remove("opacity");
      
        pirosnegyzet.classList.add("noHover");
        pirosharomszog.classList.add("noHover");
        piroskor.classList.add("noHover");
        pirosx.classList.add("noHover");
        zoldnegyzet.classList.remove("noHover");
        zoldharomszog.classList.remove("noHover");
        zoldkor.classList.remove("noHover");
        zoldx.classList.remove("noHover");
      
      
        if (pirosbabu2.hasChildNodes()) {
          pirosbabu2.removeChild(pirosbabu2.childNodes[0]);
        }
        pirosbabu2.appendChild(szurkebabukep);
        
        if (zoldbabu2.hasChildNodes()) {
          zoldbabu2.removeChild(zoldbabu2.childNodes[0]);
        }
        zoldbabu2.appendChild(zoldbabukep2);
      }

      if(vege === true) {
        pirosnegyzet.classList.add("noHover");
        pirosharomszog.classList.add("noHover");
        piroskor.classList.add("noHover");
        pirosx.classList.add("noHover");
        zoldnegyzet.classList.add("noHover");
        zoldharomszog.classList.add("noHover");
        zoldkor.classList.add("noHover");
        zoldx.classList.add("noHover");
      }
    }
  });
}