/**Rendering이 끝나기 전 */
document.getElementById // 과거에 많이 쓰던 코드이다.
var h1Element = document.querySelector("h1"); // h1의 DOM을 가져와서 반환해준다.
console.log("Before Render > ",h1Element);
// alert("Before Render > " + h1Elemnet.innerText); // innerText : h1 앨리먼트의 Text(태그내부)를 모두 가져온다.

/* 
    익명 함수
    브라우저가  tag를 모두 분석한 뒤
    화면에 노출 시키는 Rendering 과정이 끝나고 나면
    onload 이벤트를 호출한다.

    rendering이 끝난 후 부터 DOM을 Handling할 수 있다.
 */
window.onload = function () {
        // Rendering이 끝난 후
        var h1Element = document.querySelector("h1"); // h1의 DOM을 가져와서 반환해준다.
        console.log("After Render > ",h1Element);
        alert("After Render > " + h1Element.innerText);
    };