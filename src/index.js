import Developer from "./developers";

const dev = new Developer("Ivan","35","04/10/1983");

document.getElementById("app").innerText=dev.displayInfo();
console.log(dev.displayInfo());

