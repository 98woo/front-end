// jQuery(document).ready(function() {});
// $(ducument).ready(function() {});
$().ready(function () {
    // 1. input type text의 값을 가져오기
    var emailValue = $("#email").val();
    console.log(emailValue);

    // 2. input type text의 값을 할당하기
    emailValue = $("#email").val("mcjang1116@mgmail.com");

    // 3. input type text의 값을 가져오기
    emailValue = $("#email").val();
    console.log(emailValue);

    // ------------------------------------------------------ //

    // 1. jobs의 선택된 값을 가져오기
    var selectedJobs = $("#jobs").val();    // 0    //2 (selected를 준다면)
    console.log(selectedJobs);  // 2

    // 2. jobs에서 값을 변경해서 다른 옵션을 선택하도록 하기
    selectedJobs = $("#jobs").val("3");


    // 3. jobs의 선택된 값을 가져오기
    selectedJobs = $("#jobs").val(); // 3
    console.log(selectedJobs);

    // 4. jobs의 옵션이 바뀌었을 때 발생할 이벤트를 정의.
    $("#jobs").on("change", function () {
        var changedOptionValue = $(this).val();
        console.log(changedOptionValue);

        // === : 타입과 값이 일치할 때만 true ==> "1" === 1 ==> false
        // == : 타입과 관계없이 값만 같다면 true ==> "1" == 1 ==> true
        // !== : === 의 반대
        // != : == 의 반대
        if (changedOptionValue === "0") {
            alert("직업을 반드시 선택해야 합니다!");
        }
        else if (changedOptionValue === "1") {
            alert(("회사원을 선택했습니다."));
        }
        else if (changedOptionValue === "2") {
            alert("학생을 선택했습니다.");
        }
        else if (changedOptionValue === "3") {
            alert("교수를 선택했습니다.");
        }
        else {
            alert("올바른 직업을 선택하세요");
        }
    });

    // $("#jobs").val("999999");
    // $("#jobs").change();    // change 이벤트에 걸려있는 function을 수행하라.

    var checkedAgeLength = $("input[type=radio][name=age]:checked").length;
    console.log(checkedAgeLength);
    if (checkedAgeLength === 0) {
        alert("나이대를 선택해주세요!");
    }

    var checkedAgeValue = $("input[type=radio][name=age]:checked").val();
    console.log("선택한 나이대는: ", checkedAgeValue);


    var checkedGenreLength = $("input[type=checkbox][name=favorate-genre]:checked").length;
    if (checkedGenreLength === 0) {
        alert("좋아하는 장르를 한 개 이상 선택해주세요!");
    }

    // 여러 개를 동시에 하려면 반복을 써야 한다.
    var checkedGenreValue = $("input[type=checkbox][name=favorate-genre]:checked").val();
    console.log("선택한 장르는 : ", checkedGenreValue);

    $("#checked-all").on("change", function () {
        var isChecked = $(this).prop("checked");   // 선택 여부는 prop로 가져올 수 있다.

        $("input[type=checkbox][name=favorate-genre]").prop("checked", isChecked);
    });

    $("input[type=checkbox][name=favorate-genre]").on("change", function() {
        var allCheckboxLength = $("input[type=checkbox][name=favorate-genre]").length;
        var checkedCheckboxLength = $("input[type=checkbox][name=favorate-genre]:checked").length;
        var isAllChecked = allCheckboxLength === checkedCheckboxLength;
        $("#checked-all").prop("checked", isAllChecked);
    });
});


/**
 * <input type = "text" />
 * <input type = "number" />
 * <input type = "tel" />
 * <input type = "email" />
 * <input type = "..." />
 * -> 모바일 기기에서 키보드의 레이아웃을 변경 시켜줄 용도로 사용된다.
 */