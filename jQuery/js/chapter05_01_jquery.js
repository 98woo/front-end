
$().ready(function () {
    
    $(".package-button-area").on("click", function () {
        // $(this).remove();

        var package = $(this).closest(".package");

        var amount = package.data("price");
        var currency = package.data("currency");

        console.log("amount > ", amount);
        console.log("currency > ", currency);

        var price = $("<p>From " + currency + amount + "</p>");
        price.on("click", function () {
            var text = $(this).text();
            alert(text);
        });
        
        
        // $(this).closest(".package").append(price);


        // var date = $("<p>2024-03-15</p>");
        // $(this).closest(".package-title").before(date);
        // $(this).closest(".package").before(date);


        package.append(price);
        $(this).remove();
    })
})