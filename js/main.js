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

// -------------- 뱃지 부분 --------------
// --------------------- ScrollToPlugin --------------------(나중에 추가)
const badgeEl = document.querySelector('header .badges');
// document => html자체 , window => 우리가 보고 있는 화면 자체
const toTopEl = document.querySelector('#to-top');
// 맨 마지막 #to-top 효율적인 코드 위에 이쪽에다가 붙임


// window.addEventListener('scroll', function(){
//   console.log('scroll!!');
// });

// 화면자체에 scroll이라는 이벤트를 넣어서 핸들링(함수)를 실행하겠다
// scroll 될때마다 실행돼서 짧은 시간에 많이 실행돼서 무거운 코드에서는 렉걸릴 수 있기때문에 그 수를 줄여주는 js를 갖고 옴
// lodash cdn 검색해서 1. cdnjs.com (2. lodash.com) 으로 들어가기 </> 이렇게 생긴 태그복사 버튼 클릭
// html의 main.js위에 붙여넣기
// 핸들링에 _.throttle() 이라는 메소드 함수 사용할 수 있게 됨(일정 시간에만 실행되도록 제어를 걺)

// _.throttle( 함수 , 시간 ) 일정 시간에 한 번씩 함수 실행하도록 제어 (0.3초마다 실행)
// 스크롤이벤트에 _.throttle() 거의 필수사용 해줌
window.addEventListener('scroll', _.throttle( function(){
  // console.log('scroll');
  console.log(window.scrollY);
  if ( window.scrollY > 500 ){
    // 배지 숨기기
    // badgeEl.style.display = 'none'; 너무 딱딱해서 라이브러리 갖고와서 애니메이션 추가할거임
    gsap.to( badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });

    // 버튼 보이기!
    // '#to-top' 대신 변수 toTopEl 로 바꿔주기
    gsap.to(toTopEl, .2, {
      x: 0
    });

  } else {
    // 배지 보이기
    // badgeEl.style.display = 'block';
    gsap.to( badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });

    // 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    });

  }
}, 300 ));
// 애니메이션 라이브러리 갖고오기 gsap cdn검색 cdnjs.com > libraries 들어가기
// </> 태그복사 버튼 html의 main.js위에 붙이기
// gsap.to( 요소, 지속시간, {옵션} );   => gsap의 to()라는 메소드 사용
// 눈으로만 안보이는 것이 아니라 실제로 사라지는 display:none;값도 넣어야 됨( 문자는 ''씌어주기 )

// opacity 속성처럼 값을 숫자로 입력하는 속성들은,
// 전환효과(transition 속성이나 gsap 라이브러리 등)을 통해
// 요소의 전/후 상태를 중간 숫자의 값으로 자연스럽게 만들어 줄수 있지만,
// display 속성처럼 값이 숫자가 아닌 속성은 전/후 상태의 중간값이 존재하지 않기 때문에,
// 자연스러운 전환효과를 적용할 수 없다. 한마디로 이건 눈에 보이는 오퍼시티만 애니메이션 된다



// --------------------- ScrollToPlugin --------------------(나중에 추가)
// const toTopEl = document.querySelector('#to-top');
// 맨 마지막 #to-top 효율적인 코드 위에 위쪽에다가 붙임
toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0
  });
});



// -------------- VISUAL 부분 --------------
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function( fadeEl, index ){
  // gsap.to( 요소, 지속시간 {옵션});
  gsap.to( fadeEl, 1, {
    delay: (index + 1) * .7, // 각각 0.7, 1.4, 2.1, 2.7 뒤에 실행됨.
    opacity: 1
  })
});



// ------------------- NOTICE -------------------
// swiperjs검색 swiperjs.com
// get started 들어가서 Use Swiper from CDN 부분의 링크 코드 복사(css.js 두 가지다 써야 하는데 두가지 모두 두 버전이 있음 그 중에 min(압축버전)쓰면됨.)
// main.js위에 붙여넣기(기본적인 css가 적용 돼있기 때문에 css링크 필수 이다)
// 밑으로 내려다가 보면 Add Swiper HTML Layout 확인(정상적으로 작동할 수 있는 구조 작성돼있음. 구조와 클래스명 확인)
// 우리는 <!-- If we need ... --> 부분은 쓰지 않을 거임. 저 위의 구조 따라 html 작성

// API : swiper라는 라이브러리를 통해서 어떤 명령들을 사용할 수 있는지 명령 문서가 작성돼있는 부분 잘 기억해두기
// Demos : 예제 확인 할 수 있는 곳 들어가서 내가 사용할 예제 들어가기
// source code 들어가서 보면 구조와 클래스명 등 js 확인가능
// Initialize(초기화) === 이 기능을 시작하겠다

// new : 클래스 생성자
// new Swipier(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
})

// 자동재생과 반복재생을 하겠다.(불린데이터 형식으로 써줘야 함)
// 옵션 정말 많음 
// css 작업 할때는 반복재생 자동재생 잠시 주석처리 해두기

// ------------------- NOTICE(promotion) -------------------
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal' (기본값이라 안 써줌)
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백(css에서 마진 안주고 여기 옵션값에서 지정)
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

// ----------------- AWARDS ----------- 비슷한 swiper끼리 써놓은 것
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


// ---------------- NOTICE(toggle-promotion) ----------------
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; // 안 숨겨있다 (보임)
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion // 반대값으로 전환(반환)
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
  }else {
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
});


// ---------------- FLOAT-ICON ----------------

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(seletor, delay, size){
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    seletor, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      y: size,
      repeat: -1, // 이 라이브러리 안에서의 옵션기능임 -1 = 무한반복
      yoyo: true, // 애니메이션 뒤로 재생
      // gsap easing 검색 GreenSock 들어가기
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);
//floating1 애니메이션을 딜레이 1로 위,아래 15px씩 움직이게 하겠다



// --------------------- ScrollMagic -------------------
// scrollMagic cdn 검색
// cdnjs.com에서 주황링크 Copy script tag
// main.js 위에 붙여넣기

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 0~1 사이에서 0.8 부분에 트리거 실행
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});



// --------------- YEAR ----------------
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021





