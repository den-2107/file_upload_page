const popupOne = document.querySelector(".popup_one");
const uploadOne = document.querySelector(".upload_one");
const checkOne = document.querySelector(".check_one");
const penOne = document.querySelector(".pen_one");

const uploadButtonOne = document.getElementById("upload_button_one");
uploadButtonOne.addEventListener("click", () => {
  console.log("Click");
  popupOne.classList.add("popup_one_active");
});

const closeButtonOne = document.getElementById("close_one");
closeButtonOne.addEventListener("click", (e) => {
  e.stopPropagation();
  popupOne.classList.remove("popup_one_active");
});

const sendButtonOne = document.getElementById("send_one");
sendButtonOne.addEventListener("click", (e) => {
  e.stopPropagation();
  popupOne.classList.remove("popup_one_active");
});

sendButtonOne.addEventListener("click", (e) => {
  e.stopPropagation();
  uploadOne.classList.remove("upload_one_active");
});

sendButtonOne.addEventListener("click", () => {
  checkOne.classList.add("check_one__active");
});

sendButtonOne.addEventListener("click", () => {
  penOne.classList.add("pen_one_active");
});

const popupTwo = document.querySelector(".popup_two");
const uploadTwo = document.querySelector(".upload_two");
const checkTwo = document.querySelector(".check_two");
const penTwo = document.querySelector(".pen_two");

const uploadButtonTwo = document.getElementById("upload_button_two");
uploadButtonTwo.addEventListener("click", () => {
  console.log("Click");
  popupTwo.classList.add("popup_two_active");
});

const closeButtonTwo = document.getElementById("close_two");
closeButtonTwo.addEventListener("click", (e) => {
  e.stopPropagation();
  popupTwo.classList.remove("popup_two_active");
});

const sendButtonTwo = document.getElementById("send_two");
sendButtonTwo.addEventListener("click", (e) => {
  e.stopPropagation();
  popupTwo.classList.remove("popup_two_active");
});

sendButtonTwo.addEventListener("click", (e) => {
  e.stopPropagation();
  uploadTwo.classList.remove("upload_two_active");
});

sendButtonTwo.addEventListener("click", () => {
  checkTwo.classList.add("check_two__active");
});

sendButtonTwo.addEventListener("click", () => {
  penTwo.classList.add("pen_two_active");
});
