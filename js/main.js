let data = document.querySelector("#dat");
data.addEventListener("click", () => {
  const fly = prompt("дата-", 0);
  document.querySelector("#data").innerHTML = fly;
});

let kol = document.querySelector("#kol");
kol.addEventListener("click", () => {
  const fly = prompt("особовий склад-", 0);
  document.querySelector("#chel").innerHTML = fly;
});
let kol1 = document.querySelector("#kol1");
kol1.addEventListener("click", () => {
  const fly = prompt("особовий склад-", 0);
  document.querySelector("#chel1").innerHTML = fly;
});

let flyc = document.querySelector("#a1");
flyc.addEventListener("click", () => {
  const fly = prompt("літаки-", 0);
  document.querySelector("#fly").innerHTML = fly;
});

let vert = document.querySelector("#a2");
vert.addEventListener("click", () => {
  const fly = prompt("гелікоптери-", 0);
  document.querySelector("#vert").innerHTML = fly;
});
let tank = document.querySelector("#a3");
tank.addEventListener("click", () => {
  const fly = prompt("танки-", 0);
  document.querySelector("#tank").innerHTML = fly;
});
let bbm = document.querySelector("#a4");
bbm.addEventListener("click", () => {
  const fly = prompt("ББМ-", 0);
  document.querySelector("#bbm").innerHTML = fly;
});
let pvo = document.querySelector("#a5");
pvo.addEventListener("click", () => {
  const fly = prompt("ППО-", 0);
  document.querySelector("#pvo").innerHTML = fly;
});
let rzsv = document.querySelector("#a6");
rzsv.addEventListener("click", () => {
  const fly = prompt("РЗСВ-", 0);
  document.querySelector("#rzsv").innerHTML = fly;
});
let avto = document.querySelector("#a7");
avto.addEventListener("click", () => {
  const fly = prompt("автотехніка-", 0);
  document.querySelector("#avto").innerHTML = fly;
});
let spec = document.querySelector("#a8");
spec.addEventListener("click", () => {
  const fly = prompt("спецтехника-", 0);
  document.querySelector("#spec").innerHTML = fly;
});
let art = document.querySelector("#a9");
art.addEventListener("click", () => {
  const fly = prompt("артилерія-", 0);
  document.querySelector("#art").innerHTML = fly;
});
let bpla = document.querySelector("#as");
bpla.addEventListener("click", () => {
  const fly = prompt("БПЛА-", 0);
  document.querySelector("#bpla").innerHTML = fly;
});
let ship = document.querySelector("#as1");
ship.addEventListener("click", () => {
  const fly = prompt("кораблі-", 0);
  document.querySelector("#ship").innerHTML = fly;
});
let submarin = document.querySelector("#as2");
submarin.addEventListener("click", () => {
  const fly = prompt("підлодки-", 0);
  document.querySelector("#submarin").innerHTML = fly;
});
let raketa = document.querySelector("#as3");
raketa.addEventListener("click", () => {
  const fly = prompt("крилаті ракети-", 0);
  document.querySelector("#raketa").innerHTML = fly;
});
