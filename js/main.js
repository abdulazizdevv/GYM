const toggleButton = document.getElementById('toggle')
const navbarLinks = document.getElementsByClassName('navbar-responsive')[0]
const hide = document.querySelector(".hide")

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.add('db')
  console.log(true);
})

console.log(toggleButton);


hide.addEventListener('click', () => {
  navbarLinks.classList.remove('db')
})

let elBookmark = document.querySelector(".js-btn1");
let elBookmark1 = document.querySelector(".js-btn2");
let elBookmark2 = document.querySelector(".js-btn3");
let elBookmarkTxt1 = document.querySelector(".js-bookmark1");
let elBookmarkTxt2 = document.querySelector(".js-bookmark2");
let elBookmarkTxt3 = document.querySelector(".js-bookmark3");
let elAll = document.querySelector(".cards");
let elList = document.querySelector(".js-list");

elAll.addEventListener("click", (evt) => {
  if (evt.target.matches(".js-btn1")) {
    console.log(elList.innerHTML);
    elList.innerHTML = elBookmarkTxt1.textContent + "<br>" + elList.innerHTML;
  }
  if (evt.target.matches(".js-btn2")) {
    elList.innerHTML = elBookmarkTxt2.textContent + "<br>" + elList.innerHTML;
  }
  if (evt.target.matches(".js-btn3")) {
    elList.innerHTML = elBookmarkTxt3.textContent + "<br>" + elList.innerHTML;
  }
});
