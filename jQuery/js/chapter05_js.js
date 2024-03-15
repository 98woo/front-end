
window.onload = function () {

    var buttonArray = document.querySelector(".package-green-button");

    buttonArray.forEach(function (button) {
            // Click 이벤트를 할당. click을 하면 ~을 해라 , 이후 클릭 발생 했을 때 function 실행
        button.addEventListener("click", function () {
            //Element 생성.
        var price = document.createElement("p");
        price.innterText = "$399.99";
        console.log(price);

        // Element 추가
        var package = button.parentElement.parentElement;
        package.append(price);
        // package.prepand(price);
        // package.after(price);
        // package.before(price);

        // 버튼 제거
            var buttonArea = button.parentElement;
        buttonArea.remove();

     });
    })

}