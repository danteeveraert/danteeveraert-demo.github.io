window.onload = function () {
    function gotooops() {
        window.location.href = "oops.html"
    }

    document.getElementById("activity-see-all").onclick = gotooops;
    document.getElementById("navbar-settings").onclick = gotooops;
    document.getElementById("see-all1").onclick = gotooops;
    document.getElementById("see-all2").onclick = gotooops;
    document.querySelectorAll(".hashtag").forEach(function (elem) {
        elem.onclick = gotooops;
    })
    document.querySelectorAll(".group").forEach(function (elem) {
        elem.onclick = gotooops;
    })
    document.getElementById("post-type").childNodes.forEach(function (elem) {
            elem.onclick = gotooops;
    })
    document.getElementById("news-wrapper").childNodes[3].childNodes.forEach(function (elem) {
            elem.onclick = gotooops;
    })
    document.querySelectorAll(".tags").forEach(function (elem) {
            elem.childNodes.forEach(function (el) {el.onclick = gotooops;});
    })
    document.querySelectorAll(".post-actions").forEach(function (elem) {
            elem.childNodes[5].onclick = gotooops;
            elem.childNodes[7].onclick = gotooops;
    })
    document.querySelectorAll(".activity-name").forEach(function (elem) {
        elem.childNodes.forEach(function (el) { if(el.tagName === "STRONG") {el.onclick = gotooops}});
    })


    likes = [41, 14, 53, 10];
    has_liked = [0, 0, 0, 0];

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
    document.getElementById("like-wrapper3").onclick = function () {
        increase_like(3)
    };
    document.getElementById("like-wrapper4").onclick = function () {
        increase_like(4)
    };


    posts_html = [0, 0, 0, 0]
    posts_oh = [0, 0, 0, 0]
    texts = [`
        I am trying to update the loading icon for our chat service in the repo
        FrontendChat1, file chat_load.html, but I can’t get my animations to work in CSS. What I've
         tried so far is to create an @keyframes in a new CSS file, and link that keyframe to the main CSS
         file in the right class. Does anyone have any pointers on  what might be going on?
        `,
        `Hello all, I am new to frontend development and need to add a javascript
        file to my html doc to do some cool animations :) I tried linking it like in some example files
        but I haven't been able to get it to work. Looking at the console, it says to "Element null has 
        no property innerHTML"; I suspect it's not finding an element somewhow. Any help?`,
        `I wanted to get people’s opinion on this: my team is creating a new webpage
        from scratch, and I was wondering what people’s thoughts are on using Angular vs. React JS
        as a framework. A little background: our page will likely be used on both the mobile app and web 
        page, and we're aiming to have social media integration in the page too.`,
        `I am trying to make a rectangle in CSS by creating a div and filling
        the background with a color, but it doesn't appear on my webpage even after adjusting the height
        and width parameters. When I change the surrounding elements to span instead of div, somehow
        the rectangle now appears. Are block elements creating a problem here? How do I troubleshoot?`]

    function addDOMEvent(postid) {
        document.querySelectorAll(".see-more")[postid-1].addEventListener("click", function () {
            move_post_up(postid)
        });
    }

    function move_post_up(postid) {
        elem = document.getElementById("post" + postid);
        if (posts_html.length > 0) {
            for (i = 0; i < posts_html.length; i++) {
                if (posts_html[i] !== 0) {
                    post = i + 1;
                    console.log(post)
                    if (post !== postid) {
                        ab = "pt"+post
                        document.getElementById(ab).innerHTML = posts_html[i];
                        document.getElementById("see-more" + post).style.display = "inline";
                        tempelem = document.getElementById("post" + post);
                        tempelem.style.height = posts_oh[i];
                        posts_html[i] = 0;
                        posts_oh[i] = 0;
                    }
                }
            }
        }

        posts_oh[postid - 1] = elem.style.height;
        ab = "pt"+postid
        posts_html[postid - 1] = document.getElementById(ab).innerHTML;

        funct  = function () {
            document.getElementById(ab).innerHTML = texts[postid-1];
            document.getElementById("see-more" + postid).style.display = "none";
        }

        elem.style.transition = "500ms linear";
        window.setTimeout(funct, 500)
        elem.style.height = "300px";
    }
    addDOMEvent(1);
    addDOMEvent(2);
    addDOMEvent(3);
    addDOMEvent(4);
}

