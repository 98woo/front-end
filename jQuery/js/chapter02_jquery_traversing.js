
$().ready(function () {
    
    // id 가 destinations 인 앨리먼트 하위의
    // 모든 li를 찾아온다.
    // css : "#destinations li"
    // $("#destinations li");   <-- 이 방법은 사용 x 
    var liDestinations = $("#destinations").find("li");    //  <-- 위에 코드와 같지만 속도가 월등히 빠르다.
    
    console.log(liDestinations);
    console.log(liDestinations.text());
    console.log(liDestinations.html());

    // liDestinations.html("<div>Change</div>");

    // CSS : "#destinations li:first-child"
    // $("destination li:first-child"); <-- 느리다.
    var firstLiElement = $("#destinations").find("li").first();  // <-- 빠르다.
    console.log(firstLiElement.text());

    // CSS: "#destination li:last-child"
    // $("destination li:last-child"); 
    var lastLiElement = $("#destinations").find("li").last();
    console.log("last li > ", lastLiElement.text());

    // CSS: "#destination li:nth-child(2)"
    // $("#destinatnions li:nth-child(2)");
    var secondLiElement = $("#destinations").find("li").first().next();
    console.log("second li: ", secondLiElement.text());

    // CSS: "#destinations li:nth-child(2)"
    var secondLiElement2 = $("#destinations").find("li").last().prev();
    console.log("second li: ", secondLiElement2.text());

    var firstLiElement2 = $("#destinations").find("li").eq(0);
    console.log("first li: ", firstLiElement2.text());

    // var firstLiElement = $("#destinations").find("li").first();
    var firstLiElement3 = $("#destination").find("li").eq(1)
    console.log("second li: ", firstLiElement3.text());


    // $("#destinations").find("li").first().next().next();
    // $("#destinations").find("li").last();
    var lastLiElement2 = $("#destination").find("li").eq(2)
    console.log("second li: ", lastLiElement2.text());

    var parentElement = $("li").parent();   // 사용x (DOM의 구조가 상시로 바뀌기 때문)
    console.log(parentElement.text());

})