
// jQuery 객체를 만들고 document를 객체에 넣는다.
// .ready ==> rendering이 끝난 후의 이벤트
// .ready ==> window.onload와 같다.
// jQuery(document).ready();

// jQuery 대신 $ 를 쓸 수 있다. $ ==> jQuery 객체
// shorthand 표현식.
//$(document).ready();

// 세 코드 모두 같은 코드이다. 세 번째 코드를 가장 많이 사용한다.
$().ready(function () { // 랜더링이 끝난 후 function을 수행해라.
    // Rendering이 끝나면 파라미터로 전달된 함수가 실행된다.
    // Rendering이 언제 끝날 지 알 수 없다.
    
    // alert(); 을 실행해서 정상적으로 경고창이 뜨는지를 항상 먼저 확인한다.
    // alert("jQuery Loading and Rendering 완료");

    // h1 앨리먼트를 가져와 변수에 할당한다.
    // js : document.querySelector("h1");
    var h1Element = $("h1");
    console.log(h1Element);

    // js : alert(h1Element.innerText); 
    alert(h1Element.text());

    // h1 DOM의 내용을 변경한다.
    h1Element.text("Where to?");

    // jQuery 함수의 특징. 모든 코드가 이런식으로 작성된다. 
    // .함수명(); <-- Getter
    // .함수명(데이터); <-- Setter
 });    
