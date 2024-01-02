const counter = document.querySelectorAll(".counter");

let countArr = Array.from(counter);

countArr.map((e) => {
  let counterValue = e.innerHTML;
  let count = 0;
  function counterUp() {
    e.innerHTML = count;
    count++;
  }
  const stop = setInterval(() => {
    if (count >= counterValue) {
      clearInterval(stop);
    }
    counterUp();
  }, 20);
});

const counter2 = document.querySelectorAll(".counter2");

let count2arr = Array.from(counter2);

count2arr.map((e) => {
  let count2Value = e.innerHTML;
  let count = 400;
  function countDown() {
    e.innerHTML = count;
    count--;
  }
  const stop = setInterval(() => {
    if (count <= 156) {
      clearInterval(stop);
    }
    countDown();
  }, 10);
});

const counter3 = document.querySelectorAll(".counter3");

let count3arr = Array.from(counter3);

count3arr.map((e) => {
  let count3Value = e.innerHTML;
  let count = 350;
  function countDown() {
    e.innerHTML = count;
    count++;
  }
  const stop = setInterval(() => {
    if (count >= count3Value) {
      clearInterval(stop);
    }
    countDown();
  }, 15);
});

const counter4 = document.querySelectorAll(".counter4");

let count4arr = Array.from(counter4);

count4arr.map((e) => {
  let count4Value = e.innerHTML;
  let count = 0;
  function countDown() {
    e.innerHTML = count;
    count++;
  }
  const stop = setInterval(() => {
    if (count >= count4Value) {
      clearInterval(stop);
    }
    countDown();
  }, 25);
});

const counter5 = document.querySelectorAll(".counter5");

let count5arr = Array.from(counter5);

count5arr.map((e) => {
  let count5Value = e.innerHTML;
  let count = 300;
  function countDown() {
    e.innerHTML = count;
    count--;
  }
  const stop = setInterval(() => {
    if (count <= 220) {
      clearInterval(stop);
    }
    countDown();
  }, 45);
});
