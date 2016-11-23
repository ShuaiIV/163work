/*课程模块*/
var class_module = (function(){
    function getClassList(pageNo,psize,type,callback) {
        var request = new XMLHttpRequest();
        var classList = [];
        var url = "http://study.163.com/webDev/couresByCategory.htm?pageNo=" + encodeURIComponent(pageNo) + "&psize=" + encodeURIComponent(psize) + "&type=" + encodeURIComponent(type);
        request.open("GET",url);
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                classList = JSON.parse(request.responseText);
                callback(classList);
            }
        }
        request.send(null);
    };
    function makeClassList(classList) {
        var length = classList.list.length;
        for (var i = 0; i < length; i++) {
            var class_name = document.getElementsByClassName("class_name")[0];
            var all_class = document.createElement("div");
            var imgs = document.createElement("img");
            var p1 = document.createElement("p");
            var p2 = document.createElement("p");
            var num_peo = document.createElement("div");
            var span1 = document.createElement("span");
            var money = document.createElement("p");
            if (classList.list[i].learnerCount > 9999) {
                classList.list[i].learnerCount = (classList.list[i].learnerCount / 1000).toFixed(1) + "k";
            }
            class_name.appendChild(all_class);
            all_class.appendChild(imgs);
            all_class.appendChild(p1);
            all_class.appendChild(p2);
            all_class.appendChild(num_peo);
            all_class.appendChild(money);
            num_peo.appendChild(span1);
            classlist = "all_class class_" + i;
            all_class.className = classlist;
            imgs.src = classList.list[i].bigPhotoUrl;
            p1.textContent = classList.list[i].name;
            p2.className = "teacher";
            p2.textContent = classList.list[i].provider;
            num_peo.className ="num_peo";
            span1.textContent = classList.list[i].learnerCount;
            money.className = "money";
            if (classList.list[i].price == 0.00 ) {
                money.textContent = "免费";
            }else {
                money.textContent = "¥" + classList.list[i].price.toFixed(2);
            }
        }
    };
    function removeAllChild(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    };
    function changeClassList() {
        // body...
        var type = 10,
            pageNo = 1,
            parent = document.getElementsByClassName("class_name")[0],
            type10 = document.getElementById("product_design"),
            type20 = document.getElementById("program_language"),
            forward = document.getElementById("forward"),
            back = document.getElementById("back");
            pagelist = document.querySelectorAll(".page_num>p");
            type10.className = "type_selected";
        function typeChange10() {
            // body...
            type = 10;
            pageNo = 1;
            removeAllChild(parent);
            getClassList(pageNo,20,type,makeClassList);
            type10.className = "type_selected";
            type20.className = "";
            console.log(pageNo);
            console.log(type);
        }
        function typeChange20() {
            type = 20;
            pageNo = 1;
            removeAllChild(parent);
            getClassList(pageNo,20,type,makeClassList);
            type20.className = "type_selected";
            type10.className = "";
            console.log(pageNo);
            console.log(type);
        }
        function pageNoForward() {
            // body...
            pageNo++;
            removeAllChild(parent);
            getClassList(pageNo,20,type,makeClassList);
            console.log(pageNo);
            console.log(type);
        }
        function pageNoBack() {
            // body...
            pageNo--;
            if (pageNo < 1) {
                pageNo = 1;
            }
            removeAllChild(parent);
            getClassList(pageNo,20,type,makeClassList);
            console.log(pageNo);
            console.log(type);
        }
        function pageNoChange() {
            // body...
            for (var i = 1; i < pagelist.length-1; i++) {
                (function(i){
                    pagelist[i].onclick = function () {
                        // body...
                        pageNo = i;
                        removeAllChild(parent);
                        getClassList(pageNo,20,type,makeClassList); 
                    }
                })(i);
            }
        }
        type10.addEventListener("click",typeChange10);
        type20.addEventListener("click",typeChange20);
        forward.addEventListener("click",pageNoForward);
        back.addEventListener("click",pageNoBack);
        pageNoChange();
    };
    changeClassList();
    getClassList(1,20,10,makeClassList);
})();

/*热门推荐模块*/
var rank_module = (function(){
    var k = 19;
    function getRank (callback) {
        var request = new XMLHttpRequest();
        var rank = [];
        request.open("GET","http://study.163.com/webDev/hotcouresByCategory.htm");
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                rank = JSON.parse(request.responseText);
                callback(rank);
            }
        }
        request.send(null);
    };
    function makeRank(rank) {
        for (var i = 0; i < 20; i++) {
            var target = document.getElementsByClassName("ranks")[0];
            var all_rank = document.createElement("div");
            var imgs = document.createElement("img");
            var intro =  document.createElement("div");
            var ids = document.createElement("div");
            var leanerCount = document.createElement("div");
            var l_count = document.createElement("p");
            if (rank[i].learnerCount > 9999) {
                rank[i].learnerCount = (rank[i].learnerCount / 1000).toFixed(1) + "k";
            }
            target.appendChild(all_rank);
            all_rank.appendChild(imgs);
            all_rank.appendChild(intro);
            intro.appendChild(ids);
            intro.appendChild(leanerCount);
            leanerCount.appendChild(l_count);
            var classlist = "all_rank rank" + i;
            all_rank.className = classlist;
            imgs.src = rank[i].bigPhotoUrl;
            intro.className = "intro";
            ids.className = "id";
            leanerCount.className = "leanerCount";
            ids.textContent = rank[i].name;
            l_count.textContent = rank[i].learnerCount;
        }
    };
    function makeNewRank(rank) {
        var target = document.getElementsByClassName("ranks")[0];
        var all_rank = document.createElement("div");
        var imgs = document.createElement("img");
        var intro =  document.createElement("div");
        var ids = document.createElement("div");
        var leanerCount = document.createElement("div");
        var l_count = document.createElement("p");
        if (rank[k].learnerCount > 9999) {
            rank[k].learnerCount = (rank[k].learnerCount / 1000).toFixed(1) + "k";
        }
        target.insertBefore(all_rank,target.childNodes[0]);
        all_rank.appendChild(imgs);
        all_rank.appendChild(intro);
        intro.appendChild(ids);
        intro.appendChild(leanerCount);
        leanerCount.appendChild(l_count);
        all_rank.className = "all_rank";
        imgs.src = rank[k].bigPhotoUrl;
        intro.className = "intro";
        ids.className = "id";
        leanerCount.className = "leanerCount";
        ids.textContent = rank[k].name;
        l_count.textContent = rank[k].learnerCount;
        k --;
        if (k < 0) {
            k = 19;
        };
    };
    getRank(makeRank);
    setInterval(function(){
            getRank(makeNewRank);
            }, 5000);
})();