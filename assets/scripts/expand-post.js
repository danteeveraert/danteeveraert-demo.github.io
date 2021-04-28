window.onload = function () {
    function gotooops() {
        window.location.href = "oops.html"
    }
    document.getElementById("navbar-settings").onclick = gotooops;
    document.getElementById("see-all1").onclick = gotooops;
    document.getElementById("see-all2").onclick = gotooops;
    document.getElementById("reply1-span").onclick = gotooops;
    document.querySelectorAll(".hashtag").forEach(function (elem) {
        elem.onclick = gotooops;
    })
    document.querySelectorAll(".group").forEach(function (elem) {
        elem.onclick = gotooops;
    })
    document.querySelectorAll(".tags").forEach(function (elem) {
            elem.childNodes.forEach(function (el) {el.onclick = gotooops;});
    })
    document.querySelectorAll(".post-actions")[0].childNodes[1].childNodes[5].onclick = gotooops;
    document.querySelectorAll(".post-actions")[1].childNodes[1].childNodes[5].onclick = gotooops;

    function like_comment() {
        document.getElementById("like1-span").classList.toggle("liked");
    }

    document.getElementById("like1-span").onclick = like_comment;

    likes = [41, 14];
    has_liked = [0, 0];

    function increase_like(postid) {
        if (has_liked[postid - 1] === 0) {
            likes[postid - 1] += 1;
            document.getElementById("likes" + postid).innerHTML = likes[postid - 1].toString();
            lst = document.getElementById("like-wrapper" + postid).childNodes
            lst[1].style.color = "#0961C9";
            lst[1].style.fontWeight = 900;
            has_liked[postid - 1] = 1;
        } else {
            likes[postid - 1] -= 1;
            console.log("likes" + postid);
            document.getElementById("likes" + postid).innerHTML = likes[postid - 1].toString();
            lst = document.getElementById("like-wrapper" + postid).childNodes
            lst[1].style.color = "#797878";
            lst[1].style.fontWeight = 700;
            has_liked[postid - 1] = 0;
        }
    }
    document.getElementById("like-wrapper1").onclick = function () {
        increase_like(1)
    };
    document.getElementById("like-wrapper2").onclick = function () {
        increase_like(2)
    };
}

