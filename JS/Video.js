/*视频播放模块*/
var video_module = (function(){
    var videoMask = document.querySelector(".mask-video");
    var videoPlay = document.querySelector(".video-play");
    var closeVideo = document.querySelector(".mask-video .closed");
    var video = document.querySelector(".mask-video video");
    videoPlay.addEventListener("click",function(){
    	videoMask.style.display = "block";
    });
    closeVideo.addEventListener("click",function(){
    	videoMask.style.display = "none";
    	if(video && !video.paused) {
    		video.pause();
    	}
    });
})();