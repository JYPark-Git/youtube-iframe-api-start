const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'M7lc1UVf-VE',
    playerVars : {
      autoplay : true,          //자동 재생 여부
      loop : true,              //반복 재생 여부
      playlist : 'M7lc1UVf-VE', //반복 재생할 playlist id
    },
    events: {
      onReady : function(e) {
        e.target.mute();
      },
    }
  });
}
