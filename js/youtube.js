// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
        videoId: 'M7lc1UVf-VE',
        playerVars: {
            autoplay: true,
            loop: true,
            playlist: 'M7lc1UVf-VE'
        },
        events: {
            onReady: function (event) {
                event.target.mute();
            }
        }
    });
}

gsap.to('.floating1', 1.5, {
    delay: 1,
    y: 15,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut
});
gsap.to('.floating2', 2, {
    delay: .5,
    y: 15,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut
});
gsap.to('.floating3', 2.5, {
    delay: 1.5,
    y: 20,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut
});