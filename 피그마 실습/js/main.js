
// 검색창 요소(.search) 찾기
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

// 검색창 요소를 클릭하면 실행
searchEl.addEventListener("click", function (){
    searchInputEl.focus();
});

// 검색창 요소 내부 실제 input 요소에 포커스 되면 실행.
searchInputEl.addEventListener("focus", function () {
    searchEl.classList.add("focused");
    searchInputEl.setAttribute("placeholder","통합검색");
});

// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러) 되면 실행.
searchInputEl.addEventListener("blur",function () {
    searchEl.classList.remove("focused");
    searchInputEl.setAttribute("placeholder", "");
});

// ==============================================================================================

const promotionEl = document.querySelector("container1");
const promotionToggleBtn = document.querySelector(".toggle");
// 토글 버튼을 클릭 했을 때
promotionToggleBtn.addEventListener("click", function () {
  if(promotionEl.classList.contains("hide")) {
    promotionEl.classList.remove("hide");
  } else {
    promotionEl.classList.add("hide");
  }
});