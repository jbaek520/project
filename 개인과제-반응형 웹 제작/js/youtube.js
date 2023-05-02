// Youtube iframe API
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'XNXuwrXFHRs',
    events: {
        // 영상이 준비 되었을 때,
        onReady: function (event) {
            event.target.mute(); //음소거
        },
    },
  });
}

gsap.to(".floating1", 1.5, {
    delay: 1, // 시작 지연 설정 시간
    y: 15, // 수직으로 얼마나 움직일지 설정
    repeat: -1, // 반복 횟수, -1은 무한반복
    yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생
    ease: Power1.easeInOut, // Easing 함수
});
gsap.to(".floating2", 2, {
    delay: 5, 
    y: 15,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
});
gsap.to(".floating3", 2.5, {
    delay: 1.5, 
    y: 20,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
});

