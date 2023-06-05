let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let rand = Math.floor(Math.random() * 100);
let inp = document.getElementById("input");
let start = new Audio("./game_start.wav");
let loose = new Audio("./loose.wav");
let win = new Audio("./win.wav");
console.log(rand);
btn1.addEventListener("click", () => {
  start.play();
  document.getElementById("disable").style.display = "none";
  document.getElementById("game").style.display = "flex";

  let chance = 10;
  let arr = [];
  inp.addEventListener("change", (e) => {
    let value = e.target.value;
    if (value > rand) {
      
      if (value !== "" && value !== " ") {
        arr.push(value);
        document.getElementById("title").innerHTML = "Value is High &#128561";
        chance--;
      }
    } else if (value < rand) {
      if (value !== " " && value !== "") {
        arr.push(value);
        document.getElementById("title").innerHTML = "Value is Less &#128517";
        chance--;
      }
    } else if (rand == value) {
      console.log("true");
      arr.push(value);
      chance--;
      inp.setAttribute("disabled", true);
      document.getElementById("title").innerHTML = "Congrats You Win &#128512";
      document.getElementById("play-btn").style.display = "block";
      win.play();
    }

    document.getElementById("render1").innerText = chance;
  
    if (arr.length === 10) {
      inp.setAttribute("disabled", true);
      document.getElementById("title").innerHTML = "You Loose &#128542";
      document.getElementById("play-btn").style.display = "block";

      loose.play();
    }
    document.getElementById("render2").innerText = arr;
  });
});
btn2.addEventListener("click", () => {
  document.getElementById("disable").style.display = "none";
  document.getElementById("game").style.display = "flex";
  let chance = 5;
  let arr = [];
  inp.addEventListener("change", (e) => {
    let value = e.target.value;
    if (value > rand) {
      
      if (value !== "" && value !== " ") {
        arr.push(value);
        document.getElementById("title").innerHTML = "Value is High &#128561";
        chance--;
      }
    } else if (value < rand) {
      if (value !== " " && value !== "") {
        arr.push(value);
        document.getElementById("title").innerHTML = "Value is Less &#128517";
        chance--;
      }
    } else if (rand == value) {
      
      arr.push(value);
      chance--;
      inp.setAttribute("disabled", true);
      document.getElementById("title").innerHTML = "Congrats You Win &#128512";
      document.getElementById("play-btn").style.display = "block";
      win.play();
    }

    document.getElementById("render1").innerText = chance;
    let res = "";
    if (arr.length > 1) {
      arr.map((item) => {
        res = res + "," + item;
      });
    } else if (arr.length === 1) {
      res = arr[0];
    }
    if (arr.length === 5) {
      inp.setAttribute("disabled", true);
      document.getElementById("title").innerHTML = "You Loose &#128542";
      document.getElementById("play-btn").style.display = "block";
      loose.play();
    }
    document.getElementById("render2").innerText = res;
  });
});

function playGame() {
  location.reload();
}

