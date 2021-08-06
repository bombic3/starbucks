
// -------------------- YOUTUBE --------------------
// youtube iframe api 검색 => iframe삽입에 대한 YouTube Player API 참조문서 클릭
// 예제 2. 3.까지 복사 youtube.js 에 복사
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

// 이름 절대 바꾸면 안 됨.
function onYouTubeIframeAPIReady() {
  // var play 지워주기
  // <div id="player"></div> 의 id 값(#붙이지 말기)
  new YT.Player('player', {
    // height: '360',
    // width: '640',
    // 가로세로값 지정 필요없음

    // 해당 영상의 주소복사는 출력만 해줄뿐 주소의 맨 뒤쪽 =부터가 아이디값 그거 복사
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
    // events: {
      // 'onReady': onPlayerReady,
      // 'onStateChange': onPlayerStateChange
    playerVars: { // 플레이어 매개변수
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function(event){
        event.target.mute() // 음소거

      }
    }
  });
}

