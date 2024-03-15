
$().ready(function() {
    // $("img").on("mouseenter", function () {
    //     console.log("이미지에 마우스를 올렸음");
    // })

    // $("img").on("mouseleave", function () {
    //     console.log("이미지에서 마우스가 나갔음");
    // })

    // $("img").on("click", function () {
    //     console.log("이미지를 클릭함");
    // })

    $("img").on("mouseenter", function () {
        // $(".ticket").show();    // display: none 이 적용된 앨리먼트를 볼 수 있다.
        // $(".ticket").slideDown(200);
        $(".ticket").fadeIn();
    }).on("mouseleave", function () {
        // $(".ticket").hide();
        // $(".ticket").slideUp(200);
        $(".ticket").fadeOut();
    }).on("click", function () {
        console.log("이미지를 클릭함");
    }).on("contextmenu", function (event) {
        event.preventDefault();
        console.log("오른쪽 버튼을 클릭했습니다.");
    })
})