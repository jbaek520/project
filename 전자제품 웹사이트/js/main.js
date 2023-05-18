const basketFromEl = document.querySelector("header .basket-from");
const basketEl = basketFromEl.querySelector(".basket");

basketFromEl.addEventListener("click", function (event) {
    event.stopPropagation();
    if (basketEl.classList.contains("show")) { // false 혹은 true
        // hide
        hideBasket();
    } else{
        // show
        showBasket();
    }
});

basketEl.addEventListener("click", function (event) {
    event.stopPropagation();
});
window.addEventListener("click", function () {
    hideBasket()
});

function showBasket() {
    basketEl.classList.add("show");
}
function hideBasket() {
    basketEl.classList.remove("show");
}

// 검색
const headerEl = document.querySelector('header')
const searchWrapEl = headerEl.querySelector('.search-wrap')
const searchFromEl = headerEl.querySelector('.search-from')
const searchCloserEl = searchWrapEl.querySelector('.search-closer')
const searchShadowEl = searchWrapEl.querySelector('.shadow')

searchFromEl.addEventListener('click', showSearch)
searchCloserEl.addEventListener('click', hideSearch)
searchShadowEl.addEventListener('click', hideSearch)

function showSearch(){
    headerEl.classList.add('searching')
    document.documentElement.classList.add('fixed')
}
function hideSearch(){
    headerEl.classList.remove('searching')
    document.documentElement.classList.remove('fixed')
}