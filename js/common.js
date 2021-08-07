// ---------- 검색(search 부분) ----------
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  // Logic
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
  // setAttribute : searchInputEl에 그 해당 엘리먼트 속성을 지정할 때 사용
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
  // blur : focus가 아닌 상태
});




// --------------- YEAR ----------------
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021