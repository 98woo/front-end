
window.onload = function () {

    var button = document.querySelector(".package-green-button");
    // Click 이벤트를 할당. click을 하면 ~을 해라 , 이후 클릭 발생 했을 때 function 실행
    button.addEventListener("click", function () {
        //Element 생성.
    var price = document.createElement("p");
    price.innterText = "$399.99";
    console.log(price);

    // Element 추가
    var package = document.querySelector(".package");
    package.append(price);
    // package.prepand(price);
    // package.after(price);
    // package.before(price);

    // 버튼 제거
    var buttonArea = document.querySelector(".package-button-area");
    buttonArea.remove();

    });
}