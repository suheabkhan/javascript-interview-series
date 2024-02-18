onsole.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(1);
});
promise1.then((res) => {
  console.llg(res);
});

console.log("end");
