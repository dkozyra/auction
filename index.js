const Device = require("./device");

const laptop = new Device({ date: new Date(), name: "laptop" });
const desktop = new Device({ date: new Date(), name: "desktop" });

setTimeout(() => {
  const camera = new Device();
  console.log(camera);
}, 3000);

const tv = new Device();

console.log(laptop);
console.log(tv);
