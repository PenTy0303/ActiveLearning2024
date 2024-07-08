document.addEventListener('DOMContentLoaded', () => {
    const creationDate = new Date();
    document.getElementById('creation-date').textContent = creationDate.toLocaleString();
});

function navigate(url) {
    window.location.href = url;
}

// 増井 追加分

page0VideoDetail = {
    "videoUrl" : "https://www.youtube-nocookie.com/embed/2vOeY6XCVjc?rel=0&modestbranding=1&controls=0",
    "chapterDetail" : [
        {
            "sec" : 60,
            "sub" : "OP",
            "detail" : "OPが始まります",
        },
        {
            "sec" : 120,
            "sub" : "男の子",
            "detail" : "誰か知りません", 
        },
        {
            "sec" : 120,
            "sub" : "男の子",
            "detail" : "誰か知りません", 
        },
        {
            "sec" : 120,
            "sub" : "男の子",
            "detail" : "誰か知りません", 
        },
        {
            "sec" : 120,
            "sub" : "男の子",
            "detail" : "誰か知りません", 
        }
    ],
    "chapterLength" : 5,
}

function secToTime(sec) {
    let returnText = "";
    returnText += sec/60;
    returnText += ":";
    returnText += ("00" + String(sec%60)).slice(0, 2);

    return returnText;
}

function VideoPageInit(page) {

    let videoContainer = document.querySelector(".video-container");
    let videoChapterContainer = document.querySelector(".button-option-container");

    if(page == 0) {
        videoContainer.innerHTML = '<iframe width="560" height="315" src="' + page0VideoDetail["videoUrl"] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        for(i=0; i<page0VideoDetail["chapterLength"]; i++) {
            videoChapterContainer.innerHTML += '<div class="button-chapter" id="' +(i+1)+ '">' + 
            '<button class="option-button" onclick="chapter(0, ' + page0VideoDetail["chapterDetail"][i]["sec"]+')">' + 
            page0VideoDetail["chapterDetail"][i]["sub"] + '</button>' +
            '<p class="mouse-over">'+ page0VideoDetail["chapterDetail"][i]["detail"] +'</p></div>';
        }
    } else if (page == 1) {

    }

}

function chapter(page, sec) {

    let videoContainer = document.querySelector(".video-container");

    if(page == 0) {
        videoContainer.innerHTML = '<iframe width="560" height="315" src="' + page0VideoDetail["videoUrl"] + '&start='+sec+'&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
    } else if (page == 1) {

    }
}
