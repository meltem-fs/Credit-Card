const name = document.querySelector("#name");

const one = document.querySelector(".one");

const second = document.querySelector(".second");

const buton = document.querySelector("#button");

const container = document.querySelector(".display-one");

const cont = document.querySelector(".form-button");

const meltem = document.querySelector(".meltem");

const fourzero = document.querySelector(".fourzero");
const mm = document.querySelector("#mm");

const num = document.querySelector("#num");
const tarih = document.querySelector(".tarih");

const zero = document.querySelector(".zero");
const cvc = document.querySelector("#cvc");

// const cardholder = document.querySelector("")

buton.addEventListener("click", () => {
  one.style.display = "none";
  second.style.display = "flex";
  meltem.innerHTML = name.value;
  fourzero.innerHTML = num.value;
  zero.innerHTML = cvc.value;
});

cont.addEventListener("click", () => {
  // one.style.display="flex";
  // second.style.display="none";
  window.location.reload();
});
