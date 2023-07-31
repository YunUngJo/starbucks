/*
* 검색창 제어
*/
// 검색창 요소(.search) 찾기.
// html부분에서 첫번째 search를 찾아라
const searchEl = document.querySelector('.search');
// 클래스 search중 input요소를 찾아라
const searchInputEl = searchEl.querySelector('input');
// 검색창 요소를 클릭하면 실행.
// 서치라는 클래스를 클릭하게되면 검색부분의 요소를 포커스 하게 만들어라.
searchEl.addEventListener('click',function(){
  // Logic..
  searchInputEl.focus();
});
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener('focus',function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});
// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행.
searchInputEl.addEventListener('blur',function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});

/**
 * 올해가 몇 년도인지 계산
 */
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()