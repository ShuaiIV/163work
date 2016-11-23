/*轮播模块*/
var banner_module = (function () {
    window.onload = function(){
    var banner = document.querySelector('.banner');
    var imgUl = banner.getElementsByTagName('ul')[0];
    var imgLi = imgUl.getElementsByTagName('li');
    var indexList = document.querySelector('.indexList');
    var iLi = indexList.getElementsByTagName('li');
    var iNow = 0;
    var Runing = true;
    for (var i = 0; i < iLi.length; i++) {
        iLi[i].index = i;
        iLi[i].onclick = function(){
            for (var i = 0; i < iLi.length; i++) {
                iLi[i].className = '';
                imgLi[i].className = '';
            };
            this.className = 'indexOn';
            imgLi[this.index].className = 'imgOn';
            iNow = this.index;
        }
    };
    var intervalId = setInterval(toRun,5000);
    function toRun(){
        if (iNow == imgLi.length-1) {
            iNow = 0;
        }
        else{
            iNow++;
        }
        for (var i = 0; i < iLi.length; i++) {
            iLi[i].className = '';
            imgLi[i].className = '';
        };
        iLi[iNow].className = 'indexOn';
        imgLi[iNow].className = 'imgOn';
    }
    banner.onmouseover = function(){
        if(Runing){
            clearInterval(intervalId);
            Runing = false;   
        }
    };
    banner.onmouseout = function(){
        if(!Runing){
            intervalId = setInterval(toRun,5000);
            Runing = true;
        }
    };
}
})();