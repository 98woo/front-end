$().ready(function () {

    $("#package-ticket-count").on("change", function() {
        $(this).keyup();
    })

    // $("#package-ticket-count").on("keyup", function() {
    $("#package-ticket-count").on("keyup", function() {
        // 1. #package-ticket-count의 값을 받아온다.
        // parseInt > 문자를 숫자로 변경하는 함수.
        var ticketCount = parseInt($(this).val());
        // 일반 JS
        // document.querySelector("package-ticket-count").value;

        if (isNaN(ticketCount) || ticketCount < 0) {
            ticketCount = 0;
            $(this).val(ticketCount);
        }

        // 2. data-price 변수의 값을 받아온다.
        // var ticketPrice = $(".package").data("price");
        var ticketPrice = $(this).closest(".package").data("price");

        console.log("ticketPrice", ticketPrice);
        console.log("ticketCount", ticketCount);

        console.log("ticketCount type: ", typeof ticketCount); // string
        console.log("ticketCount type: ", typeof ticketPrice); // number
        // 3. 입력값과 price의 값을 곱해서
        var amount = ticketCount * ticketPrice;
        console.log("amount", amount);
        console.log("amount type: ", typeof amount);

        // 4. #amount에 텍스트를 변경한다.
        $("#amount").text(amount);
    })
})